## zhimou.bolt

### 本地開發

```bash
npm install
npm run dev
```

### 部署前設定

1. 於 Formspree 使用 `yutingh88@gmail.com` 建立一個 form, 取得 endpoint 例如 `https://formspree.io/f/abcd1234`.
2. 在專案根目錄建立 `.env` 檔案, 並加入:

```
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/你的formID
```

沒有設定 endpoint 時, 聯絡表單將提示錯誤。
