// index.js (index.gs)

function index_generateHead() {
  return `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>مدیریت پارسیان لیفت - داشبورد</title>
    
    <!-- اضافه کردن فونت وزیر از CDN رسمی -->
    <link rel="preconnect" href="https://fonts.rastikerdar.com">
    <link href="https://fonts.rastikerdar.com/vazir/font-face.css" rel="stylesheet">

    <style>
      body { 
        font-family: 'Vazir', Tahoma, sans-serif; 
        background: #f0f2f5; 
        margin: 0; 
        padding: 20px; 
        direction: rtl; 
        font-size: 16px; 
        line-height: 1.5; 
      }
      h1 { 
        text-align: center; 
        color: #333; 
        margin: 20px 0 40px; 
        font-size: 28px; 
      }
      .container { 
        max-width: 1200px; 
        margin: 0 auto; 
      }

      button.service-btn { 
        display: block;
        margin: 30px auto;
        padding: 16px 40px;
        background: #6c757d; 
        color: white; 
        border: none; 
        border-radius: 8px; 
        cursor: pointer; 
        font-size: 18px; 
        min-height: 48px;
        width: fit-content;
        box-sizing: border-box;
        transition: background 0.3s ease;
      }
      button.service-btn:hover { 
        background: #5a6268; 
      }

      @media (max-width: 480px) {
        body { 
          padding: 15px; 
        }
        h1 { 
          font-size: 24px; 
          margin-bottom: 30px; 
        }
        button.service-btn { 
          width: 100%; 
          margin: 30px 0; 
          padding: 16px; 
          font-size: 16px; 
        }
      }
    </style>
  `;
}

function index_generateBody() {
  return `
    <div class="container">
      <h1>مدیریت پارسیان لیفت</h1>
      
      <!-- دکمه ثبت سرویس - تولید شده توسط تابع جداگانه -->
      ${sabteServiceButton()}

      <!-- دکمه مدیریت خدمات -->
      ${modiriatKhadamatButton()}

      
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

// تابع واحد و ترکیبی: تولید دکمه ثبت سرویس همراه با رفتار onclick مستقیم (بدون نیاز به تابع جداگانه sabteService)
function sabteServiceButton() {
  return `
    <button class="service-btn" 
            onclick="window.location.href='https://script.google.com/macros/s/AKfycbzfm6uUstUCICWCpIrauRCq6PlPKzyxw6J8BPAy-deTWQjns-Fb8dL8hjMkrpccjEuP/exec';">
      ثبت سرویس
    </button>
  `;
}

function modiriatKhadamatButton() {
  return `
    <button class="service-btn" 
            onclick="window.location.href='https://script.google.com/macros/s/AKfycbzg5Vo4V4PKW-Tyi-w8hZZiaY5-2-eOO38nKAbEqh9rNCK8Cs7Pp97Xuzj85jIfpqr3/exec';">
      مدیریت خدمات
    </button>
  `;
}

// تابع جدید برای دکمه گزارش‌ها (Looker Studio Dashboard)
function gozareshButton() {
  return `
    <button class="service-btn" 
            onclick="window.location.href='https://lookerstudio.google.com/reporting/12YbMhxfPPECg2_BvZkLHFr1jCGoDCmT4/page/6IDS';">
     پنل گزارش مالی سرویس ماهیانه 
    </button>
  `;
}

// ویرایش تابع index_generateBody برای اضافه کردن دکمه جدید
function index_generateBody() {
  return `
    <div class="container">
      <h1>مدیریت پارسیان لیفت</h1>
      
      <!-- دکمه ثبت سرویس -->
      ${sabteServiceButton()}

      <!-- دکمه مدیریت خدمات -->
      ${modiriatKhadamatButton()}

      <!-- دکمه جدید گزارش‌ها (Looker Studio) -->
      ${gozareshButton()}
      
    </div>
  `;
}

//new 

function index_generateHead() {
  return `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>مدیریت پارسیان لیفت - داشبورد</title>
    
    <!-- فونت وزیر -->
    <link rel="preconnect" href="https://fonts.rastikerdar.com">
    <link href="https://fonts.rastikerdar.com/vazir/font-face.css" rel="stylesheet">

    <style>
      body { 
        font-family: 'Vazir', Tahoma, sans-serif; 
        background: #f0f2f5; 
        margin: 0; 
        padding: 20px; 
        direction: rtl; 
        font-size: 16px; 
        line-height: 1.5; 
      }
      h1 { 
        text-align: center; 
        color: #333; 
        margin: 20px 0 40px; 
        font-size: 28px; 
      }
      .container { 
        max-width: 1200px; 
        margin: 0 auto; 
      }

      button.service-btn { 
        display: block;
        margin: 30px auto;
        padding: 16px 40px;
        background: #6c757d; 
        color: white; 
        border: none; 
        border-radius: 8px; 
        cursor: pointer; 
        font-size: 18px; 
        min-height: 48px;
        width: fit-content;
        box-sizing: border-box;
        transition: background 0.3s ease;
      }
      button.service-btn:hover { 
        background: #5a6268; 
      }

      /* wrapper داشبورد */
      .dashboard-wrapper {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch; /* اسکرول نرم در iOS */
        margin: 50px 0;
        padding: 10px;
        background: white;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        direction: ltr; /* برای اسکرول طبیعی داشبورد */
      }

      @media (max-width: 480px) {
        body { 
          padding: 15px; 
        }
        h1 { 
          font-size: 24px; 
          margin-bottom: 30px; 
        }
        button.service-btn { 
          width: 100%; 
          margin: 30px 0; 
          padding: 16px; 
          font-size: 16px; 
        }
        .dashboard-wrapper {
          padding: 5px;
          margin: 40px 0;
        }
      }
    </style>
  `;
}

function index_generateBody() {
  return `
    <div class="container">
      <h1>مدیریت پارسیان لیفت</h1>
      
      <!-- دکمه‌های اصلی -->
      ${sabteServiceButton()}
      ${modiriatKhadamatButton()}
      ${gozareshButton()}

      <!-- عنوان داشبورد -->
      <h2 style="text-align: center; color: #333; margin-top: 60px; direction: rtl;">پنل گزارش مالی سرویس ماهیانه</h2>
      
      <!-- iframe داشبورد با اندازه طبیعی و اسکرول افقی -->
      <div class="dashboard-wrapper">
        <iframe 
          src="https://lookerstudio.google.com/embed/reporting/12YbMhxfPPECg2_BvZkLHFr1jCGoDCmT4/page/6IDS?rm=minimal"
          width="1200" 
          height="700" 
          style="border: none;" 
          allowfullscreen>
        </iframe>
      </div>
      
    </div>
  `;
}