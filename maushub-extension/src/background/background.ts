// Chrome拡張のバックグラウンドスクリプト
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, query, where, orderBy } from "firebase/firestore";

// Firebase設定
const firebaseConfig = {
    apiKey: "AIzaSyBv5r-nE0C5yEo9ZTCa2PaS-A5q4x8XXXX",
    authDomain: "sample-9dde3.firebaseapp.com",
    projectId: "sample-9dde3",
    storageBucket: "sample-9dde3.firebasestorage.app",
    messagingSenderId: "434283491779",
    appId: "1:434283491779:web:56a18cfeb70f89e2a2cd76",
};

// Firebase初期化
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let isInitialized = false;

// 現在のユーザーを取得
async function getCurrentUser() {
    try {
        const result = await chrome.storage.local.get(["currentUser", "isAuthenticated"]);
        if (result.currentUser && result.isAuthenticated) {
            return result.currentUser;
        }
        return null;
    } catch (error) {
        console.error("Error getting current user:", error);
        return null;
    }
}

// 拡張機能の初期化
function initializeExtension() {
    if (isInitialized) return;
    isInitialized = true;
}

// 拡張機能がインストールされたときの処理
chrome.runtime.onInstalled.addListener(() => {
    initializeExtension();
});

// 未処理のPromise拒否をキャッチ
self.addEventListener("unhandledrejection", (event) => {
    console.warn("Unhandled promise rejection:", event.reason);
    event.preventDefault();
});

interface PokePasteItem {
    url: string;
    title: string;
    timestamp: number;
    id: string;
}

// 認証成功時の処理
async function handleAuthSuccess(user: any, sendResponse: (response?: unknown) => void) {
    console.log("handleAuthSuccess called with user:", user);
    try {
        const userProfile = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName || user.email.split("@")[0],
            photoURL: user.photoURL,
            createdAt: user.createdAt || Date.now(),
            lastLoginAt: user.lastLoginAt || Date.now(),
        };

        console.log("Saving user profile to storage:", userProfile);

        // Chrome拡張機能のストレージに保存
        await chrome.storage.local.set({
            currentUser: userProfile,
            isAuthenticated: true,
        });

        // 保存確認
        const result = await chrome.storage.local.get(["currentUser", "isAuthenticated"]);
        console.log("Storage verification:", result);

        console.log("Authentication successful, user profile saved:", userProfile);
        sendResponse({ success: true, user: userProfile });
    } catch (error) {
        console.error("Error handling auth success:", error);
        sendResponse({ success: false, error: "認証の処理中にエラーが発生しました" });
    }
}

// メッセージを受信したときの処理
chrome.runtime.onMessage.addListener((request: any, sender: chrome.runtime.MessageSender, sendResponse: (response?: unknown) => void) => {
    console.log("Background received message:", request, "from:", sender);

    // 初期化されていない場合は初期化を実行
    if (!isInitialized) {
        initializeExtension();
    }

    try {
        // 認証メッセージの場合
        if (request && request.type === "AUTH_SUCCESS" && request.user) {
            console.log("Processing AUTH_SUCCESS message:", request.user);
            handleAuthSuccess(request.user, sendResponse);
            return true;
        }

        if (request && request.type === "AUTH_ERROR") {
            console.error("Authentication error:", request.error);
            sendResponse({ success: false, error: request.error });
            return true;
        }

        if (!request || typeof request.action !== "string") {
            sendResponse({
                success: false,
                error: "不正なリクエスト形式です",
            });
            return false;
        }

        if (request.action === "addPokePaste") {
            handleAddPokePaste(sendResponse);
            return true; // 非同期レスポンスを示す
        }

        if (request.action === "getPokePasteList") {
            handleGetPokePasteList(sendResponse);
            return true; // 非同期レスポンスを示す
        }

        if (request.action === "ping") {
            sendResponse({
                success: true,
                message: "pong",
                initialized: isInitialized,
                timestamp: new Date().toISOString(),
            });
            return false;
        }

        // その他のアクション
        sendResponse({
            success: false,
            error: `未知のアクション: ${request.action}`,
        });
        return false;
    } catch (error) {
        sendResponse({
            success: false,
            error: `メッセージリスナーエラー: ${error instanceof Error ? error.message : "不明なエラー"}`,
        });
        return false;
    }
}); // PokePaste URL追加の処理
async function handleAddPokePaste(sendResponse: (response?: unknown) => void) {
    try {
        // アクティブなタブの情報を取得
        const tabs = await new Promise<chrome.tabs.Tab[]>((resolve) => {
            chrome.tabs.query({ active: true, currentWindow: true }, resolve);
        });

        const activeTab = tabs[0];

        if (!activeTab || !activeTab.url) {
            sendResponse({
                success: false,
                error: "Could not access the current tab",
            });
            return;
        }

        if (!activeTab.url.includes("pokepast.es")) {
            sendResponse({
                success: false,
                error: "This extension only works on pokepast.es URLs",
                currentUrl: activeTab.url,
            });
            return;
        }

        // 現在のユーザーを取得
        const currentUser = await getCurrentUser();
        if (!currentUser) {
            sendResponse({
                success: false,
                error: "User not authenticated. Please login first.",
            });
            return;
        }

        // 新しいアイテムを作成
        const newItem = {
            url: activeTab.url,
            title: activeTab.title || "No title",
            timestamp: Date.now(),
            userId: currentUser.uid,
        };

        try {
            // Firestoreで重複チェック
            const pokepastesRef = collection(db, "pokepastes");
            const duplicateQuery = query(pokepastesRef, where("url", "==", newItem.url), where("userId", "==", currentUser.uid));
            const duplicateSnapshot = await getDocs(duplicateQuery);

            if (!duplicateSnapshot.empty) {
                sendResponse({
                    success: false,
                    error: "This URL is already saved",
                    url: newItem.url,
                });
                return;
            }

            // Firestoreに保存
            const docRef = await addDoc(pokepastesRef, newItem);
            console.log("Document written with ID: ", docRef.id);

            sendResponse({
                success: true,
                url: newItem.url,
                title: newItem.title,
                message: "URLをFirebaseに保存しました",
            });
        } catch (error) {
            console.error("Error saving to Firestore:", error);
            sendResponse({
                success: false,
                error: "Failed to save URL to database",
            });
        }
    } catch (error) {
        sendResponse({
            success: false,
            error: `処理エラー: ${error instanceof Error ? error.message : "不明なエラー"}`,
        });
    }
}

// 保存されたURL一覧取得の処理
async function handleGetPokePasteList(sendResponse: (response?: unknown) => void) {
    try {
        // 現在のユーザーを取得
        const currentUser = await getCurrentUser();
        if (!currentUser) {
            sendResponse({
                success: false,
                error: "User not authenticated. Please login first.",
            });
            return;
        }

        // Firestoreからユーザーの保存URLを取得
        const pokepastesRef = collection(db, "pokepastes");
        const userQuery = query(pokepastesRef, where("userId", "==", currentUser.uid), orderBy("timestamp", "desc"));

        const querySnapshot = await getDocs(userQuery);
        const savedUrls: PokePasteItem[] = [];

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            savedUrls.push({
                id: doc.id,
                url: data.url as string,
                title: data.title as string,
                timestamp: data.timestamp as number,
            });
        });

        sendResponse({
            success: true,
            data: savedUrls,
        });
    } catch (error) {
        console.error("Error getting PokePaste list from Firestore:", error);
        sendResponse({
            success: false,
            error: `取得エラー: ${error instanceof Error ? error.message : "不明なエラー"}`,
        });
    }
}
