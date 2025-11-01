# 🚨 Chrome 拡張 Firebase 認証 トラブルシューティング

## 現在の問題

1. **CSP エラー**: Google APIs スクリプトが読み込めない
2. **auth/internal-error**: Firebase 認証の内部エラー

---

## 📋 解決手順（順番に実行）

### STEP 1: Chrome 拡張を更新

1. `chrome://extensions/` を開く
2. 「PokePast Extension」の 🔄 更新ボタンをクリック
3. 拡張機能 ID をコピー（例：`abcdefghijklmnopqrstuvwxyz123456`）

### STEP 2: Firebase Console で承認済みドメインを追加

1. Firebase Console → Authentication → Settings → Authorized domains
2. 「ドメインを追加」をクリック
3. 以下を追加：
    ```
    chrome-extension://[拡張機能ID]
    localhost
    127.0.0.1
    ```

### STEP 3: 代替認証方法の検討

Chrome 拡張での Firebase 認証は制限が多いため、以下の代替案を検討：

#### 🎯 **推奨解決策**: Chrome Identity API を使用

Chrome 拡張専用の認証 API を使用して、より確実に認証を行います。

---

## 🔧 今すぐ試すべき設定

### Chrome 拡張の更新と確認

```bash
# 1. 拡張機能を更新
chrome://extensions/ → 更新ボタン

# 2. 拡張機能IDを確認
# 例：abcdefghijklmnopqrstuvwxyz123456
```

### Firebase Console での設定

```
Authentication → Settings → Authorized domains → ドメインを追加

追加するドメイン：
- chrome-extension://[あなたの拡張機能ID]
- localhost
- 127.0.0.1
```

---

## 🆘 それでも解決しない場合

### デバッグ情報の収集

1. Chrome DevTools → Network タブ
2. ログインボタンをクリック
3. 失敗したリクエストの詳細を確認

### よくある解決方法

-   Firebase プロジェクトの再作成
-   Chrome 拡張の完全な再インストール
-   異なるブラウザでのテスト

---

## ✅ 次のアクション

1. **拡張機能 ID を取得して Firebase Console に追加**
2. **再度ログインをテスト**
3. **まだエラーが出る場合は代替認証方法を実装**

Firebase 認証が Chrome 拡張で動作しない場合は、Chrome Identity API を使用した認証方法に切り替えることをお勧めします。
