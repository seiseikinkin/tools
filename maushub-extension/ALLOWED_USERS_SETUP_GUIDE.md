# 👥 許可ユーザーリスト作成手順（詳細版）

## 📍 前提条件

-   Firestore Database が作成済み
-   セキュリティルールが設定済み
-   Firebase Console にログイン済み

---

## 🚀 具体的な手順

### 1. Firebase Console で Firestore にアクセス

1. **Firebase Console にアクセス**

    - https://console.firebase.google.com/ を開く
    - 作成したプロジェクトをクリック

2. **左サイドバーから「Firestore Database」を選択**

    ```
    🏠 プロジェクトの概要
    👥 Authentication
    🗄️ Firestore Database  ← これをクリック
    ⚡ Functions
    🏗️ Hosting
    ```

3. **「データ」タブを選択**
    ```
    📊 データ  |  📝 ルール  |  📈 使用状況  |  ⚙️ インデックス
    ^^^^^^^^^^^^
    このタブを選択
    ```

### 2. config コレクションを作成

1. **「コレクションを開始」をクリック**

    ```
    ┌─────────────────────────────────────────┐
    │                                         │
    │    まだドキュメントはありません          │
    │                                         │
    │         [コレクションを開始]            │
    │                                         │
    └─────────────────────────────────────────┘
    ```

2. **コレクション ID を入力**

    ```
    コレクション ID
    ┌─────────────────────────────────┐
    │ config                          │  ← これを入力
    └─────────────────────────────────┘

    [キャンセル]  [次へ]
                  ^^^^^^
                これをクリック
    ```

### 3. allowedUsers ドキュメントを作成

1. **ドキュメント ID を入力**

    ```
    ドキュメント ID
    ┌─────────────────────────────────┐
    │ allowedUsers                    │  ← これを入力
    └─────────────────────────────────┘
    ```

2. **フィールドを追加**

#### 📧 **方法 1: 個別メールアドレス形式（推奨）**

**フィールド 1**: emails (array 型)

```
フィールド    | タイプ  | 値
-------------|---------|---------------------------
emails       | array   | ["admin@example.com",
             |         |  "user1@gmail.com",
             |         |  "user2@company.com"]
```

**具体的な入力手順**:

1. **フィールド名**: `emails` と入力
2. **タイプ**: ドロップダウンから `array` を選択
3. **値の入力**:
    ```
    [0] string "admin@example.com"     [+追加]
    [1] string "user1@gmail.com"       [+追加]
    [2] string "user2@company.com"     [+追加]
    ```

#### 📋 **方法 2: 個別フィールド形式**

各メールアドレスを個別のフィールドとして設定:

```
フィールド           | タイプ  | 値
--------------------|---------|------------------
admin_email         | string  | admin@example.com
user1_email         | string  | user1@gmail.com
user2_email         | string  | user2@company.com
enabled             | boolean | true
created_date        | timestamp| (自動設定)
```

### 4. ドキュメントを保存

1. **「保存」をクリック**

    ```
    [キャンセル]  [保存]
                  ^^^^^^
                これをクリック
    ```

2. **作成完了の確認**
    ```
    config (コレクション)
    └── allowedUsers (ドキュメント)
        ├── emails: ["admin@example.com", "user1@gmail.com"]
        └── enabled: true
    ```

---

## 📝 実際の設定例

### 🎯 **推奨設定（array 形式）**

```json
{
    "emails": ["your-admin-email@gmail.com", "team-member1@company.com", "team-member2@gmail.com", "external-user@domain.com"],
    "enabled": true,
    "last_updated": "2025-10-31T10:00:00Z",
    "description": "Chrome extension allowed users list"
}
```

### 🔧 **Firebase Console での表示**

作成後、以下のような構造で表示されます:

```
📁 config
   📄 allowedUsers
      📧 emails: Array (4)
         [0]: "your-admin-email@gmail.com"
         [1]: "team-member1@company.com"
         [2]: "team-member2@gmail.com"
         [3]: "external-user@domain.com"
      ✅ enabled: true
      📅 last_updated: October 31, 2025 at 10:00:00 AM UTC+9
      📝 description: "Chrome extension allowed users list"
```

---

## 🔄 ユーザーの追加・削除方法

### ➕ **新しいユーザーを追加**

1. **allowedUsers ドキュメントをクリック**
2. **emails フィールドの横の「編集」アイコンをクリック**
3. **「要素を追加」をクリック**
4. **新しいメールアドレスを入力**
    ```
    [4] string "new-user@example.com"
    ```
5. **「更新」をクリック**

### ➖ **ユーザーを削除**

1. **削除したい要素の「×」ボタンをクリック**
2. **「更新」をクリック**

### ⏸️ **一時的な無効化**

```json
{
  "emails": [...],
  "enabled": false  ← これをfalseに変更
}
```

---

## 🧪 設定のテスト

### Chrome 拡張での動作確認:

1. **許可されたメールアドレス**でログイン

    - ✅ ログイン成功
    - ✅ 拡張機能が正常動作

2. **許可されていないメールアドレス**でログイン
    - ❌ 自動的にログアウト
    - ❌ 「管理者に連絡してください」メッセージ表示

### Firebase Console でのデータ確認:

```
📊 Firestore Database → データ → config → allowedUsers
```

上記パスでドキュメントが正しく作成されているか確認

---

## 🚨 よくあるトラブル

### ❌ 「ドキュメントが見つかりません」エラー

**原因**: コレクション名またはドキュメント名が間違っている  
**解決**: `config/allowedUsers` の正確なパスを確認

### ❌ 「権限エラー」でアクセスできない

**原因**: セキュリティルールが正しく設定されていない  
**解決**: FIRESTORE_SECURITY_RULES_GUIDE.md を参照してルールを再設定

### ❌ メールアドレスが認識されない

**原因**: 配列の構文エラーまたは大文字小文字の違い  
**解決**:

-   メールアドレスは小文字で統一
-   配列形式が正しいか確認
-   スペースや特殊文字がないか確認

### ❌ Chrome 拡張で「許可されていません」が表示

**原因**: Google アカウントのメールアドレスがリストにない  
**解決**:

-   ログインに使用する Gmail アドレスを正確に追加
-   大文字小文字を確認
-   ドメイン名を確認

---

## 🔒 セキュリティのベストプラクティス

### ✅ **推奨事項**

1. **最小権限の原則**

    - 必要最小限のユーザーのみ追加
    - 定期的にリストを見直し

2. **メールアドレスの管理**

    - 正確なメールアドレスを使用
    - 退職者は速やかに削除

3. **バックアップ**
    - 重要な変更前にスクリーンショット保存
    - Firebase Console の変更履歴を確認

### 🚨 **避けるべき設定**

-   ❌ ワイルドカード（\*@company.com など）の使用
-   ❌ テスト用のダミーアドレスを本番に残す
-   ❌ 不要になったアドレスの放置

---

## ✅ 次のステップ

許可ユーザーリストが作成できたら：

1. **Chrome 拡張での動作テスト** 🔧
    - 許可ユーザーでログイン確認
    - 非許可ユーザーで拒否確認
2. **本番環境での運用開始** 🚀
    - 実際のユーザーを招待
    - 定期的なリスト管理

詳細は `FIREBASE_GOOGLE_LOGIN_SETUP.md` の該当セクションを参照してください。
