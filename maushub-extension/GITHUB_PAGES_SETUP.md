# 🚀 GitHub Pages + Firebase 認証 セットアップガイド

## 📍 前提条件

-   GitHub アカウント
-   Firebase プロジェクト設定済み

---

## 🚀 GitHub Pages セットアップ

### 1. 新しいリポジトリ作成（または既存利用）

1. **GitHub で新しいリポジトリを作成**

    - リポジトリ名: `chrome-extension-auth`（任意）
    - Public に設定

2. **auth.html をリポジトリにアップロード**
    ```bash
    git clone https://github.com/[username]/chrome-extension-auth.git
    cd chrome-extension-auth
    # auth.html をコピー
    git add .
    git commit -m "Add authentication page"
    git push origin main
    ```

### 2. GitHub Pages を有効化

1. **Settings → Pages**
2. **Source**: Deploy from a branch
3. **Branch**: main
4. **Folder**: / (root)
5. **Save** をクリック

### 3. デプロイ完了確認

約 1-2 分後、以下の URL でアクセス可能：

```
https://[username].github.io/chrome-extension-auth/auth.html
```

---

## 🔧 Firebase Console での設定追加

### 承認済みドメインの追加

1. **Firebase Console → Authentication → Settings → Authorized domains**
2. **「ドメインを追加」** で以下を追加：

    ```
    [username].github.io
    ```

3. **カスタムドメインを使用する場合**：
    ```
    your-custom-domain.com
    ```

---

## 🎯 Chrome 拡張側の修正

### authService.ts の認証 URL 変更

```typescript
// Firebase Hosting の場合
const authUrl = `https://sample-9dde3.web.app/auth.html?extension=true`;

// GitHub Pages の場合
const authUrl = `https://[username].github.io/chrome-extension-auth/auth.html?extension=true`;
```

---

## 🔒 セキュリティ考慮事項

### ✅ **GitHub Pages でも安全な理由**

1. **HTTPS 通信**: 自動的に HTTPS
2. **Firebase 認証**: 本物の Google OAuth 使用
3. **クロスオリジン**: 適切な CORS 設定
4. **タブ間通信**: Chrome Extension API 使用

### ⚠️ **注意点**

-   **リポジトリは Public**: コードが公開される
-   **Firebase 設定**: API キーなどが見える（これは正常）
-   **ドメイン制限**: Firebase 側で承認済みドメイン設定が必要

---

## 📝 実装例

### 1. auth.html を GitHub Pages にデプロイ

### 2. Chrome 拡張の authService.ts 修正

```typescript
async signInWithGoogle(): Promise<UserProfile | null> {
    try {
        // GitHub Pages の認証URL
        const authUrl = `https://hayatosum.github.io/chrome-extension-auth/auth.html?extension=true`;

        const authTab = await chrome.tabs.create({
            url: authUrl,
            active: true
        });
        // ... 残りの処理
    }
}
```

### 3. Firebase Console で承認済みドメイン追加

```
hayatosum.github.io
```

---

## 🚨 よくある問題と解決方法

### ❌ 「この API キーは制限されています」エラー

**解決**: Firebase Console → プロジェクト設定 → API 制限 → HTTP リファラーに GitHub Pages ドメインを追加

### ❌ CORS エラー

**解決**: Firebase 側の承認済みドメイン設定を確認

### ❌ 認証後の通信エラー

**解決**: Chrome 拡張の manifest.json で GitHub Pages ドメインを Host Permissions に追加

---

## ✅ GitHub Pages の利点

1. **完全無料**: 制限なし
2. **高速**: CDN 配信
3. **安定**: GitHub の信頼性
4. **簡単**: push するだけでデプロイ

Firebase Hosting と同等のセキュリティと機能を提供できます！
