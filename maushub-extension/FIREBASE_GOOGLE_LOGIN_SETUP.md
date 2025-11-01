# Firebase Google ログイン設定ガイド

現在のソースコードで Firebase と Google アカウント連携を有効にするために必要な作業手順です。

## 📋 必要な作業一覧

### 1. Firebase プロジェクトの作成と設定

### 2. Firebase 設定値の取得と環境変数設定

### 3. Authentication（認証）の有効化

### 4. Firestore Database の設定

### 5. 許可ユーザーリストの作成

### 6. Chrome 拡張機能での動作確認

---

## 🔧 詳細手順

### 1. Firebase プロジェクトの作成

1. **Firebase Console にアクセス**

    - https://console.firebase.google.com/ を開く
    - Google アカウントでログイン

2. **新しいプロジェクトを作成**
    - 「プロジェクトを作成」をクリック
    - プロジェクト名を入力（例：`pokepast-extension`）
    - Google Analytics は任意（推奨：無効）
    - 「プロジェクトを作成」をクリック

### 2. Web アプリの追加と設定値取得

1. **Web アプリを追加**

    - プロジェクト概要ページで `</>` アイコンをクリック
    - アプリのニックネーム：`PokePast Chrome Extension`
    - 「Firebase Hosting を設定」はチェック不要
    - 「アプリを登録」をクリック

2. **設定値をコピー**

    ```javascript
    const firebaseConfig = {
        apiKey: "AIzaSy...",
        authDomain: "your-project.firebaseapp.com",
        projectId: "your-project-id",
        storageBucket: "your-project.appspot.com",
        messagingSenderId: "123456789",
        appId: "1:123456789:web:abcdef...",
    };
    ```

3. **`.env` ファイルを更新**
    ```env
    VITE_FIREBASE_API_KEY=AIzaSy...（実際のAPIキー）
    VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
    VITE_FIREBASE_PROJECT_ID=your-project-id
    VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
    VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
    VITE_FIREBASE_APP_ID=1:123456789:web:abcdef...
    ```

### 3. Authentication（認証）の設定

1. **Authentication を有効化**

    - 左サイドバーから「Authentication」をクリック
    - 「始める」をクリック

2. **Google 認証プロバイダーを有効化**

    - 「Sign-in method」タブをクリック
    - 「Google」を選択
    - 「有効にする」をオンにする
    - プロジェクトサポートメールを選択
    - 「保存」をクリック

3. **承認済みドメインの確認**
    - 「Settings」タブ > 「承認済みドメイン」を確認
    - Chrome 拡張の場合、特別な設定は不要

### 4. Firestore Database の設定

1. **Firestore を有効化**

    - 左サイドバーから「Firestore Database」をクリック
    - 「データベースの作成」をクリック

2. **セキュリティルールを選択**

    - 「テストモードで開始」を選択（後で変更）
    - 「次へ」をクリック

3. **ロケーションを選択**

    - 推奨：`asia-northeast1`（東京）
    - 「完了」をクリック

4. **セキュリティルールを更新**

    - 「ルール」タブをクリック
    - 以下のルールに置き換え：

    ```javascript
    rules_version = '2';
    service cloud.firestore {
      match /databases/{database}/documents {
        // ユーザープロフィール
        match /users/{userId} {
          allow read, write: if request.auth != null && request.auth.uid == userId;
        }

        // PokePastデータ
        match /pokepasts/{pokepastId} {
          allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
          allow create: if request.auth != null && request.auth.uid == request.resource.data.userId;
        }

        // 設定ドキュメント（許可ユーザーリスト）
        match /config/{document} {
          allow read: if request.auth != null;
          allow write: if false; // Firebase Consoleからのみ変更可能
        }
      }
    }
    ```

    - 「公開」をクリック

### 5. 許可ユーザーリストの作成

1. **設定ドキュメントを作成**

    - Firestore Database の「データ」タブを開く
    - 「コレクションを開始」をクリック

2. **コレクション設定**

    - **コレクション ID:** `config`
    - 「次へ」をクリック

3. **ドキュメント設定**

    - **ドキュメント ID:** `allowedUsers`
    - **フィールドを追加:**

    | フィールド  | タイプ | 値                                            |
    | ----------- | ------ | --------------------------------------------- |
    | emails      | array  | ["your-email@gmail.com", "admin@company.com"] |
    | createdAt   | string | 2025-10-31T00:00:00.000Z                      |
    | updatedAt   | string | 2025-10-31T00:00:00.000Z                      |
    | description | string | Chrome 拡張ログイン許可ユーザーリスト         |

    - 「保存」をクリック

### 6. プロジェクトのビルドと動作確認

1. **プロジェクトをビルド**

    ```bash
    npm run build
    ```

2. **Chrome 拡張として読み込み**

    - Chrome で `chrome://extensions/` を開く
    - 「デベロッパーモード」を有効化
    - 「パッケージ化されていない拡張機能を読み込む」
    - `dist` フォルダを選択

3. **動作確認**
    - pokepast.es のページを開く
    - 拡張機能のポップアップを開く
    - 「Sign in with Google」をクリック
    - 許可された Google アカウントでログイン

---

## ⚠️ 重要な注意事項

### セキュリティ

-   `.env` ファイルは `.gitignore` に含まれていることを確認
-   Firebase API キーは公開されても問題ありませんが、適切なセキュリティルールの設定が重要
-   許可ユーザーリストは Firestore Console からのみ編集可能

### トラブルシューティング

-   **ログインできない場合:** 許可ユーザーリストにメールアドレスが含まれているか確認
-   **Firebase 接続エラー:** 設定値が正しく `.env` に設定されているか確認
-   **権限エラー:** Firestore セキュリティルールが正しく設定されているか確認

---

## 🎯 完了後の状態

✅ Firebase プロジェクトが作成され、認証が有効化されている  
✅ Firestore Database が設定され、セキュリティルールが適用されている  
✅ 許可ユーザーリストが Firestore に作成されている  
✅ Chrome 拡張で Google ログインが動作する  
✅ 許可されたユーザーのみがログイン可能

この手順を完了すると、完全に動作する Firebase 連携 Google ログイン機能付き Chrome 拡張が完成します。
