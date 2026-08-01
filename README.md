# 我的作品集 — 物件導向程式設計（清大科藝 115-1）

> 這是你整學期的作品集 repo：16 週的作品、你的 AI 工作流、你的成長紀錄，全部在這裡累積。
> 課程頁：<https://course.interaction.tw/oop/>

## 🚀 三分鐘開工（學校電腦也一樣）

學校公用電腦每次都會被還原？沒關係——**你的環境不在那台電腦上**。

1. 開瀏覽器 → 登入 [github.com](https://github.com)
2. 進到你的這個 repo → 綠色 **Code** 按鈕 → **Codespaces** → **Create codespace on main**
   （第二次以後：同一個地方會看到你之前的 codespace，點開即續，幾秒就好）
3. 等瀏覽器裡出現 **VS Code 版面**——這就是你的工作環境，任何電腦打開都一模一樣
4. 下方終端機輸入 `claude` → 登入你的 Claude 帳號（登入一次即可，之後都記得你）——**照下面的「登入 SOP」做，不要等它自動開瀏覽器**
5. 開始工作。做完記得：**Source Control 面板 → commit → push**（推上去的才算數）

## 📁 這個 repo 的結構

```
CLAUDE.md        ← 你的 AI 工作流（W3 起自己維護，這是課程核心作業之一）
week01/ … week16/ ← 每週作業：index.html + sketch.js + README.md（四件套）
.devcontainer/   ← 環境定義（Claude Code 已預裝）——你不用動它
```

## ✍️ 每週交作業（四件套）

每週資料夾裡已放好範本：

1. **程式碼**：`sketch.js`（可執行；對著 `index.html` 按右上角 Live Preview 即可看結果）
2. **截圖或影片**：放進當週資料夾
3. **反思**：`README.md` 裡寫 100–200 字（自己寫，AI 不代寫）
4. **AI 揭露欄**：`README.md` 裡照格式填（沒用到就寫「未使用」）

Deadline 前 push＝繳交。commit 的時間戳就是紀錄，每一步嘗試都是過程的證據。

## 🔑 Claude 登入 SOP（Codespace 裡一定要走手動流程）

Codespace 是雲端容器，登入的「自動跳轉」到不了它——**要手動貼授權碼**：

1. 終端機打 `claude` → 選 **Claude account with subscription**
2. **按 `c`** 複製登入網址（不要等它開瀏覽器）
3. 自己開新分頁貼上網址 → 登入 Claude 帳號 → 授權
4. 頁面顯示一組**授權碼** → 複製 → 回終端機貼在 `Paste code here…` → Enter

排錯：

- 授權完跳到「無法連上 localhost」錯誤頁？→ 看**網址列**，把 `code=` 後面那串複製回終端機貼上即可
- 貼上沒反應？→ 終端機用**右鍵→貼上**或 `Ctrl+Shift+V`；再不行檢查 `claude --version` 是否 ≥ 2.1.108，舊了就 `npm install -g @anthropic-ai/claude-code@latest`

## ⚠️ Codespaces 三件事

- **用 2-core 機型就好**（預設就是）：學生帳號每月 180 core-hours＝90 小時，夠用；開大機型會加倍燒
- 閒置 30 分鐘會自動休眠（重開即續）；**閒置 30 天 codespace 會被刪**——所以工作一定要 push，repo 裡的東西永遠不會消失
- 第一次用若被要求設定 spending budget，設 $0 即可（課堂上會帶大家走一遍）

## 🤖 你的 AI 工作流

`CLAUDE.md` 是你的——課堂五條公約寫在裡面（不可刪），其餘的部分隨學期自己長出來：你的偏好、你的流程、你踩過的坑。學期末它就是你帶得走的工作方法。

p5.js 也可以用[網頁編輯器](https://editor.p5js.org)寫（一樣存雲端），寫完把碼貼回當週資料夾即可。
