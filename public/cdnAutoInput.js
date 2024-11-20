// cdn.js
(function () {
  // 等待 DOM 完全加載
  document.addEventListener("DOMContentLoaded", () => {
    // 找到輸入框和按鈕元素
    const usernameInput = document.getElementById("username");
    const loginButton = document.querySelector(
      "button[onclick='handleLogin()']"
    );

    if (usernameInput && loginButton) {
      // 填入 "admin" 到輸入框
      usernameInput.value = "admin";

      // 模擬按下按鈕
      loginButton.click();
    } else {
      console.error("Could not find username input or login button.");
    }
  });
})();
