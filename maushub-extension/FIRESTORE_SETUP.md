# Firestore 許可ユーザー設定手順

## 重要：完全セキュア設計

このシステムでは、許可されたメールアドレスは Firestore にのみ保存され、ソースコードや環境変数には一切含まれません。

## 1. Firestore Console でドキュメントを作成

### 手順：

1. Firebase Console にアクセス
2. プロジェクトを選択
3. Firestore Database > データ タブを開く
4. 「コレクションを開始」をクリック

### コレクション設定：

-   **コレクション ID:** `config`
-   **ドキュメント ID:** `allowedUsers`

### ドキュメント内容：

```json
{
    "emails": ["admin@yourcompany.com", "manager@yourcompany.com", "developer@yourcompany.com"],
    "createdAt": "2025-10-31T00:00:00.000Z",
    "updatedAt": "2025-10-31T00:00:00.000Z",
    "description": "Chrome拡張ログイン許可ユーザーリスト"
}
```

## 2. ユーザー管理

### 新しいユーザーを追加：

1. Firebase Console > Firestore Database
2. `config/allowedUsers` ドキュメントを開く
3. `emails` 配列に新しいメールアドレスを追加
4. `updatedAt` フィールドを現在の日時に更新

### ユーザーを削除：

1. `emails` 配列から該当のメールアドレスを削除
2. `updatedAt` フィールドを更新

## 3. セキュリティルール

Firestore セキュリティルールで適切にアクセスを制限：

```javascript
// config コレクションの読み取りは認証済みユーザーのみ
// 書き込みはFirebase Consoleからのみ
match /config/{document} {
  allow read: if request.auth != null;
  allow write: if false;
}
```

## 4. 動作確認

### ログイン成功パターン：

-   Firestore の `emails` 配列に含まれる Google アカウント

### ログイン失敗パターン：

-   配列に含まれていないメールアドレス
-   Firestore に接続できない場合

## 5. トラブルシューティング

### よくある問題：

**1. "No allowed emails found" エラー**

-   Firestore の `config/allowedUsers` ドキュメントが存在しない
-   ドキュメント内の `emails` フィールドが配列でない

**2. ログインできない**

-   メールアドレスが配列に含まれていない
-   大文字小文字の違い（自動で小文字変換されます）

**3. Firestore 接続エラー**

-   Firebase 設定の確認
-   ネットワーク接続の確認
