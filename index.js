// index.js (index.gs)

function index_generateHead() {
  return `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>نمایشگر موبایل - داشبورد</title>
    <style>
      body { font-family: Tahoma, sans-serif; background: #f0f2f5; margin: 0; padding: 20px; direction: rtl; }
      h1 { text-align: center; color: #333; margin-bottom: 30px; }
      .container { max-width: 1200px; margin: 0 auto; position: relative; }
      table { width: 100%; border-collapse: collapse; margin-top: 20px; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; }
      th, td { padding: 12px; text-align: center; border-bottom: 1px solid #ddd; }
      th { background: #007bff; color: white; }
      .online { color: green; font-weight: bold; }
      .offline { color: red; font-weight: bold; }
      .battery { font-size: 1.2em; }
      button.logout { 
        position: absolute; top: 20px; left: 20px; padding: 10px 20px; 
        background: #dc3545; color: white; border: none; border-radius: 5px; 
        cursor: pointer; font-size: 14px; 
      }
      button.logout:hover { background: #c82333; }
    </style>
  `;
}

function index_generateBody() {
  return `
    <div class="container">
      <h1>نمایشگر موبایل - خوش آمدید</h1>
      <button class="logout" onclick="logout()">خروج</button>

      <!-- جدول نمونه - بعداً می‌تونی با داده‌های واقعی از Sheet جایگزین کنی -->
      <table>
        <thead>
          <tr>
            <th>نام دستگاه</th>
            <th>باتری</th>
            <th>وضعیت</th>
            <th>آخرین آپدیت</th>
          </tr>
        </thead>
        <tbody id="devicesTable">
          <!-- ردیف‌ها با JS پر می‌شن یا اینجا استاتیک بذار -->
          <tr>
            <td>دستگاه ۱</td>
            <td class="battery">۸۵٪</td>
            <td class="online">آنلاین</td>
            <td>۱۴۰۴/۱۱/۲۲ ۱۴:۰۰</td>
          </tr>
          <tr>
            <td>دستگاه ۲</td>
            <td class="battery">۴۵٪</td>
            <td class="offline">آفلاین</td>
            <td>۱۴۰۴/۱۱/۲۱ ۱۰:۳۰</td>
          </tr>
          <!-- ردیف‌های بیشتر -->
        </tbody>
      </table>
    </div>
  `;
}

function index_generateJavaScript() {
  return `
    <script>
      // حفاظت صفحه: اگر لاگین نکرده باشد → برگرد به login.html
      window.addEventListener("load", function() {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        const loginTime = localStorage.getItem("loginTime");

        const isValid = isLoggedIn === "true" && 
                        loginTime && 
                        (Date.now() - Number(loginTime) < 24 * 60 * 60 * 1000); // ۲۴ ساعت اعتبار

        if (!isValid) {
          localStorage.removeItem("isLoggedIn");
          localStorage.removeItem("loginTime");
          window.location.replace("login.html");
        }
      });

      // تابع خروج
      function logout() {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("loginTime");
        window.location.href = "login.html";
      }

      // اگر بعداً بخوای جدول رو با داده‌های واقعی پر کنی، اینجا کدش رو اضافه کن
      // مثلاً fetch از Google Sheet یا Apps Script
    </script>
  `;
}