# 🔒 Firestore セキュリティルール設定手順（詳細版）

## 📍 前提条件

-   Firestore Database が作成済み
-   Firebase Console にログイン済み

---

## 🚀 具体的な手順

### 1. Firebase Console でセキュリティルールにアクセス

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

3. **「ルール」タブをクリック**
    ```
    📊 データ  |  📝 ルール  |  📈 使用状況  |  ⚙️ インデックス
                ^^^^^^^^^^^^
                このタブを選択
    ```

### 2. 現在のルールを確認

デフォルトでは以下のルールが設定されています：

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;  // すべてのアクセスを拒否
    }
  }
}
```

**⚠️ このままではアプリからアクセスできません**

### 3. カスタムセキュリティルールを設定

1. **エディタ画面で現在のルールを削除**

    - 全選択（Ctrl+A）して削除

2. **以下の新しいルールをコピー＆ペースト**

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // 🔧 設定データ（許可されたメールアドレスのリスト）
    match /config/allowedUsers {
      // 認証済みユーザーなら誰でも読み取り可能（メールチェック用）
      allow read: if request.auth != null;
      // 書き込みは管理者のみ（Firebase Console から手動更新）
      allow write: if false;
    }

    // 👤 ユーザーデータ（個人情報・設定など）
    match /users/{userId} {
      // 本人のデータのみアクセス可能
      allow read, write: if request.auth != null
                         && request.auth.uid == userId;
    }

    // 📝 その他のコレクション（必要に応じて追加）
    match /quizResults/{userId} {
      // クイズ結果も本人のみアクセス可能
      allow read, write: if request.auth != null
                         && request.auth.uid == userId;
    }
  }
}
```

3. **「公開」ボタンをクリック**

    ```
    [保存] [公開]
           ^^^^^^
         これをクリック
    ```

4. **確認ダイアログで「公開」をクリック**
    ```
    ルールを公開しますか？
    [キャンセル] [公開]
                 ^^^^^^
               これをクリック
    ```

### 4. 設定完了の確認

公開が完了すると：

-   ✅ 「ルールが正常に公開されました」メッセージが表示
-   ✅ エディタ画面に新しいルールが表示
-   ✅ 「最終更新: 数秒前」と表示

---

## 🔍 セキュリティルールの詳細解説

### 📋 各ルールの意味

#### 1. **config/allowedUsers ルール**

```javascript
match /config/allowedUsers {
  allow read: if request.auth != null;  // 認証済みなら読み取り可能
  allow write: if false;                // 書き込み不可（管理者のみ）
}
```

**用途**: 許可されたメールアドレスのリストを保存

-   ✅ **読み取り**: 認証後のメールチェックで使用
-   ❌ **書き込み**: Firebase Console から手動更新のみ

#### 2. **users/{userId} ルール**

```javascript
match /users/{userId} {
  allow read, write: if request.auth != null
                     && request.auth.uid == userId;
}
```

**用途**: 個人のユーザーデータを保存

-   ✅ **本人のみ**: 自分のデータのみアクセス可能
-   ❌ **他人**: 他のユーザーのデータは見れない

#### 3. **quizResults/{userId} ルール**

```javascript
match /quizResults/{userId} {
  allow read, write: if request.auth != null
                     && request.auth.uid == userId;
}
```

**用途**: クイズの結果・進捗を保存（オプション）

-   ✅ **本人のみ**: 自分の結果のみアクセス可能

---

## 🔒 セキュリティの仕組み

### 🛡️ 多層防御システム

1. **認証レイヤー**

    ```
    Google認証 → Firebase Authentication → メール確認
    ```

2. **認可レイヤー**

    ```
    Firestore Rules → 個人データ保護 → 管理データ保護
    ```

3. **アプリケーションレイヤー**
    ```
    Chrome拡張 → 許可ユーザーチェック → 自動ログアウト
    ```

### 🚨 セキュリティ効果

-   ✅ **不正アクセス防止**: 認証なしではデータ読み取り不可
-   ✅ **プライバシー保護**: 他のユーザーのデータは見れない
-   ✅ **管理データ保護**: 許可ユーザーリストは読み取り専用
-   ✅ **改ざん防止**: 各ユーザーは自分のデータのみ操作可能

---

## 🧪 ルールのテスト

### Firebase Console でテスト可能：

1. **「ルール」タブで「ルールプレイグラウンド」をクリック**
2. **シミュレーション設定**:
    ```
    コレクション: /config/allowedUsers
    ドキュメント: (空白)
    リクエストタイプ: get
    認証: Authenticated
    UID: test-user-123
    ```
3. **「実行」をクリック**
4. **結果**: ✅ Allowed (許可) が表示されれば OK

---

## 🚨 よくあるトラブル

### ❌ 「権限が拒否されました」エラー

**原因**: ルールの構文エラーまたは条件ミス  
**解決**: ルールを再確認、Firebase Console のエラーメッセージを確認

### ❌ 「無効なルール」エラー

**原因**: JavaScript 構文エラー  
**解決**: コピー＆ペーストを正確に行う、セミコロンや括弧を確認

### ❌ 「認証が必要です」エラー

**原因**: 正常な動作（認証後にアクセス可能）  
**対策**: Chrome 拡張で Google ログインを実行

---

## ✅ 次のステップ

セキュリティルールが設定できたら、次は：

1. **許可ユーザーリストの作成** 👥
    - Firebase Console でデータを手動作成
2. **Chrome 拡張での動作テスト** 🔧
    - 実際にログイン・データアクセスをテスト
3. **本番環境での運用開始** 🚀

詳細は `FIREBASE_GOOGLE_LOGIN_SETUP.md` の該当セクションを参照してください。
