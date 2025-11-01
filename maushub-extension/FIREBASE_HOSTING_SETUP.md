# 🔥 Firebase Hosting セットアップ手順

## 📍 前提条件

-   Firebase プロジェクト作成済み
-   Firebase CLI インストール済み

---

## 🚀 Firebase Hosting セットアップ

### 1. Firebase CLI インストール（未インストールの場合）

```bash
# npm でインストール
npm install -g firebase-tools

# ログイン
firebase login
```

### 2. プロジェクトの初期化

```bash
# 新しいフォルダを作成
mkdir chrome-extension-auth
cd chrome-extension-auth

# Firebase プロジェクトを初期化
firebase init hosting

# 質問への回答:
# ? Select a default Firebase project: sample-9dde3
# ? What do you want to use as your public directory? public
# ? Configure as a single-page app? No
# ? Set up automatic builds? No
```

### 3. 認証ページをデプロイ

```bash
# auth.html を public フォルダにコピー
cp ../extension/auth.html public/

# デプロイ
firebase deploy --only hosting
```

### 4. デプロイ完了

デプロイ後、以下の URL でアクセス可能：

```
https://sample-9dde3.web.app/auth.html
```

---

## 💰 料金比較

### Firebase Hosting vs GitHub Pages

| 項目                 | Firebase Hosting     | GitHub Pages |
| -------------------- | -------------------- | ------------ |
| **基本料金**         | 無料（Spark プラン） | 無料         |
| **ストレージ**       | 10GB 無料            | 1GB 制限     |
| **転送量**           | 10GB/月無料          | 100GB/月無料 |
| **SSL**              | 無料                 | 無料         |
| **カスタムドメイン** | 無料                 | 無料         |
| **CDN**              | Firebase CDN         | GitHub CDN   |
| **セットアップ**     | やや複雑             | 簡単         |

### 📊 認証ページでの実際の使用量

```
ファイルサイズ: 5KB
月間アクセス: 1000回
月間転送量: 5MB

Firebase Hosting: $0（無料範囲内）
GitHub Pages: $0（無料範囲内）
```

---

## 🎯 Firebase Hosting の追加メリット

### ✅ **Firebase 統合**

-   同一プロジェクト内で管理
-   認証設定が自動で最適化
-   Firebase Console で一元管理

### ✅ **高度な機能**

-   プレビューチャンネル
-   自動 SSL 更新
-   高速 CDN 配信
-   ロールバック機能

### ✅ **セキュリティ**

-   Firebase Security Rules と連携
-   同一 Origin での認証最適化
-   CORS 設定が簡単

---

## 🔧 Chrome 拡張での認証 URL

### Firebase Hosting 使用時

```typescript
const authUrl = `https://sample-9dde3.web.app/auth.html?extension=true`;
```

### GitHub Pages 使用時

```typescript
const authUrl = `https://hayatosum.github.io/tools/auth.html?extension=true`;
```

---

## 📋 推奨事項

### 🏆 **Firebase Hosting を推奨する理由**

1. **統合性**: 同一 Firebase プロジェクト内
2. **最適化**: Firebase 認証との親和性
3. **無料**: 認証ページ程度なら完全無料
4. **管理性**: Firebase Console で一元管理
5. **セキュリティ**: 同一 Origin の利点

### 💡 **GitHub Pages を選ぶ場合**

-   より簡単なセットアップが必要
-   Firebase CLI の使用を避けたい
-   Git ベースのデプロイが好み

---

## ✅ 結論

**Firebase Hosting は認証ページ用途では完全無料**で、Firebase プロジェクトとの統合性を考えると最適解です！
