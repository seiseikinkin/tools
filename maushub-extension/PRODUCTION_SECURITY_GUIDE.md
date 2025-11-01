# 本番用セキュリティ実装のガイドライン

## 現在の状況
- Firestoreセキュリティルールを本番用に変更済み
- 認証が必要なルールに更新
- Chrome拡張機能のコードを部分的に修正

## まだ必要な実装

### 1. カスタムトークン認証の実装
現在のChrome拡張機能の認証システムをFirebase Authenticationと統合する必要があります。

#### オプションA: サーバーサイドでカスタムトークン生成
```javascript
// サーバーサイド（Node.js + Firebase Admin SDK）
const admin = require('firebase-admin');

// カスタムトークンを生成
const customToken = await admin.auth().createCustomToken(userId, {
  email: userEmail,
  displayName: userDisplayName
});

// Chrome拡張機能にトークンを返す
```

#### オプションB: Firebase Auth APIを直接使用
```javascript
// Chrome拡張機能内でFirebase Authを使用
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const provider = new GoogleAuthProvider();
const result = await signInWithPopup(auth, provider);
```

### 2. 現在の問題点
- Chrome拡張機能では`signInWithPopup`が制限される場合がある
- 独自認証システムとFirebase Authの統合が不完全
- カスタムトークンの生成が未実装

### 3. 推奨される解決策

#### 短期的解決策（現在のシステムを維持）
1. 認証済みユーザーのみがアクセス可能なAPI エンドポイントを作成
2. そのエンドポイントでFirebase Admin SDKを使用してFirestoreにアクセス
3. Chrome拡張機能からAPIを呼び出す

#### 長期的解決策（Firebase Auth完全統合）
1. Chrome拡張機能の認証をFirebase Authに完全移行
2. 外部認証ページでFirebase Authを使用
3. 認証トークンをChrome拡張機能に渡す

## セキュリティ上の利点
- ユーザーが自分のデータのみアクセス可能
- 未認証ユーザーはデータにアクセス不可
- データの整合性検証
- 管理者のみが設定を変更可能

## 次のステップ
1. まず現在のシステムでテストを実行
2. 認証エラーが発生した場合は、API経由のアクセスを検討
3. 本格的な本番運用前にFirebase Auth統合を完了