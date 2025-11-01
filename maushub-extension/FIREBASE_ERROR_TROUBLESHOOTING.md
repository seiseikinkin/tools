# 🚨 Firebase エラー解決チェックリスト

## 現在のエラー: `Firebase Error (auth/internal-error)`

このエラーの原因と解決方法を順番に確認してください。

---

## 🔍 **STEP 1: Firebase Console での設定確認**

### 1.1 Google 認証が有効化されているか確認

1. **Firebase Console にアクセス**

    - https://console.firebase.google.com/
    - プロジェクト「sample-9dde3」を選択

2. **Authentication → Sign-in method を確認**

    ```
    🔍 Google    [有効] ← これが「有効」になっているか確認
    ```

    **❌ もし「無効」の場合**:

    - 詳細手順: `GOOGLE_AUTH_ENABLE_GUIDE.md` を参照
    - 「有効にする」→「プロジェクトサポートメール選択」→「保存」

### 1.2 Firestore Database が作成されているか確認

1. **Firestore Database を確認**

    ```
    左サイドバー: 🗄️ Firestore Database をクリック
    ```

    **✅ 正常な場合**: データベース画面が表示される
    **❌ 未作成の場合**: 「データベースの作成」ボタンが表示される

    **未作成の場合の対処**:

    - 詳細手順: `FIRESTORE_DATABASE_SETUP_GUIDE.md` を参照
    - 「データベースの作成」→「本番モード」→「asia-east1 (Taiwan)」

---

## 🔍 **STEP 2: セキュリティルール設定確認**

### 2.1 Firestore セキュリティルールが設定されているか

1. **Firestore Database → ルール タブを確認**

2. **現在のルール内容を確認**

    **❌ デフォルト（全拒否）の場合**:

    ```javascript
    match /{document=**} {
      allow read, write: if false;  // ← これだとアクセス不可
    }
    ```

    **✅ 正しい設定の場合**:

    ```javascript
    match /config/allowedUsers {
      allow read: if request.auth != null;
      allow write: if false;
    }
    ```

    **未設定の場合の対処**:

    - 詳細手順: `FIRESTORE_SECURITY_RULES_GUIDE.md` を参照

---

## 🔍 **STEP 3: 許可ユーザーリスト作成確認**

### 3.1 config/allowedUsers ドキュメントが存在するか

1. **Firestore Database → データ タブを確認**

2. **以下の構造が存在するか確認**:

    ```
    📁 config
       📄 allowedUsers
          📧 emails: ["your-email@gmail.com"]
    ```

    **❌ 未作成の場合**:

    - 詳細手順: `ALLOWED_USERS_SETUP_GUIDE.md` を参照
    - あなたの Gmail アドレスを追加する必要があります

---

## 🔍 **STEP 4: Chrome 拡張の権限設定**

### 4.1 manifest.json の権限確認

現在の権限設定を確認（通常は問題なし）:

-   `identity`
-   `storage`
-   `https://firebase.googleapis.com/`

---

## 📋 **今すぐ確認すべき項目（優先度順）**

### 🚨 **最重要（エラーの直接原因になりやすい）**

1. **Google 認証有効化**: Firebase Console で Google Sign-in が有効か
2. **Firestore Database**: データベースが作成済みか
3. **許可ユーザーリスト**: あなたのメールアドレスが登録済みか

### ⚠️ **重要（設定ミスが多い）**

4. **セキュリティルール**: カスタムルールが設定済みか
5. **環境変数**: プロジェクト ID が正しいか（sample-9dde3）

---

## 🔧 **簡単な確認方法**

### PowerShell で設定確認スクリプト実行:

```powershell
# 設定状況を確認
.\check-firebase-setup.ps1
```

このスクリプトで現在の設定状況が一覧表示されます。

---

## 🆘 **それでも解決しない場合**

### デバッグ用の詳細エラー情報取得:

1. **Chrome Developer Tools を開く**

    - F12 または右クリック → 検証
    - Console タブを選択

2. **「Sign in with Google」をクリック**

3. **詳細なエラーメッセージを確認**
    - 赤いエラーメッセージをコピー
    - エラーコードを特定

### よくあるエラーコード:

-   `auth/invalid-api-key`: API キーが間違っている
-   `auth/project-not-found`: プロジェクト ID が間違っている
-   `auth/network-request-failed`: ネットワークまたは権限の問題
-   `auth/internal-error`: Firebase の設定が不完全

---

## ✅ **次のアクション**

**まず最初に確認**:

1. Firebase Console で Google 認証が「有効」になっているか
2. Firestore Database が作成済みか

この 2 つが完了していれば、多くの場合エラーが解決します。
