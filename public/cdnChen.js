const chenFunction = () => {
  console.log("This script is served by the custom CDN!");

  // 創建一個 <input> 元素
  const input = document.createElement("input");
  input.type = "text";
  input.value = "admin"; // 預設值為 "admin"
  input.id = "custom-input"; // 給它一個 ID 方便後續操作

  // 將 <input> 添加到 <body>
  document.body.appendChild(input);

  // 設定樣式（選擇性，可根據需要設計）
  input.style.margin = "20px";
  input.style.padding = "10px";
  input.style.fontSize = "16px";

  console.log("Input element added with default value 'admin'.");
};

// 執行功能
chenFunction();
