const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

// 啟用 CORS
app.use(cors());

// JSON 解析
app.use(express.json());

// 提供靜態文件的路徑
app.use("/static", express.static(path.join(__dirname, "public")));

// 一個簡單的路由
app.get("/", (req, res) => {
  res.json({ message: "CORS 已啟用！" });
});

// 啟動伺服器
app.listen(PORT, () => {
  console.log(`伺服器正在執行，網址：http://localhost:${PORT}`);
});
