# PokePast Extension with Firebase Authentication

PokePast URL を保存・管理する Chrome 拡張機能です。Firebase 認証を使用してデータを同期できます。

## 🚀 Features

-   ✅ PokePast URL の保存・管理
-   🔐 Firebase 認証（Google 認証、メール・パスワード）
-   ☁️ クラウドでのデータ同期
-   🌙 ダークテーマ UI
-   📱 レスポンシブデザイン

## 🛠️ Setup

### 1. 依存関係のインストール

```bash
npm install
```

### 2. Firebase プロジェクトの設定

1. [Firebase Console](https://console.firebase.google.com/) でプロジェクトを作成
2. Authentication を有効化
    - Google 認証プロバイダーを有効化
    - メール・パスワード認証を有効化
3. Firestore データベースを作成
4. プロジェクト設定から Firebase 設定を取得

### 3. 環境変数の設定

`.env` ファイルをプロジェクトルートに作成し、Firebase 設定を記入：

```env
VITE_FIREBASE_API_KEY=your-api-key-here
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=your-app-id-here
```

### 4. Firestore セキュリティルール

`firestore.rules` に以下のルールを設定：

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
  }
}
```

### 5. ビルド

```bash
npm run build
```

## 📦 Chrome 拡張として使用

1. Chrome で `chrome://extensions/` を開く
2. 「デベロッパーモード」を有効化
3. 「パッケージ化されていない拡張機能を読み込む」をクリック
4. `dist` フォルダを選択

## 🎯 使用方法

1. pokepast.es のページを開く
2. 拡張機能のポップアップを開く
3. ログイン（オプション）
4. 「URL を追加」ボタンで URL を保存
5. 「保存された URL を表示」で一覧を確認

## 🔧 開発

### 開発サーバー起動

```bash
npm run dev
```

### リント

```bash
npm run lint
```

## 📁 プロジェクト構成

```
src/
├── components/
│   └── LoginComponent.tsx    # ログインUI
├── firebase/
│   ├── config.ts            # Firebase設定
│   └── authService.ts       # 認証サービス
├── popup/
│   └── Popup.tsx           # メインポップアップ
└── background/
    └── background.ts       # バックグラウンドスクリプト
```

## 🛡️ セキュリティ

-   環境変数を使用して Firebase 設定を管理
-   Firestore セキュリティルールでデータアクセスを制限
-   Chrome 拡張の Content Security Policy を適用

## 📝 License

MIT License
