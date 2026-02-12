//login.js

function login_generateHead() {
  return `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ورود به نمایشگر موبایل</title>
    <style>
      body { font-family: Tahoma, sans-serif; background: #f0f2f5; margin: 0; padding: 20px; direction: rtl; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
      .login-box { background: white; padding: 40px; border-radius: 10px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); width: 100%; max-width: 400px; text-align: center; }
      h1 { color: #333; margin-bottom: 30px; }
      input { width: 100%; padding: 12px; margin: 10px 0; border: 1px solid #ddd; border-radius: 6px; box-sizing: border-box; font-size: 16px; }
      button { width: 100%; padding: 12px; background: #007bff; color: white; border: none; border-radius: 6px; font-size: 16px; cursor: pointer; margin-top: 20px; }
      button:hover { background: #0056b3; }
      #error { color: red; margin-top: 15px; display: none; }
    </style>
  `;
}

function login_generateBody() {
  return `
    <div class="login-box">
      <h1>ورود به نمایشگر موبایل</h1>
      <form id="loginForm">
        <input type="text" id="username" placeholder="نام کاربری" required>
        <input type="password" id="password" placeholder="رمز عبور" required>
        <button type="submit">ورود</button>
      </form>
      <p id="error">نام کاربری یا رمز عبور اشتباه است!</p>
    </div>
  `;
}

function login_generateJavaScript() {
  return `
    <script>
      const VALID_USERNAME = "admin";
      const VALID_PASSWORD = "123";

      document.getElementById("loginForm").addEventListener("submit", function(e) {
        e.preventDefault();
        
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        if (username === VALID_USERNAME && password === VALID_PASSWORD) {
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("loginTime", Date.now().toString());
          window.location.href = "index.html";  // یا URL داشبورد اصلی در Apps Script
        } else {
          document.getElementById("error").style.display = "block";
        }
      });
    </script>
  `;
}