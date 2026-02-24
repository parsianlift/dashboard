//-- index.js
// ====================== کامپوننت‌های مشترک ======================
function sharedHead(pageTitle = "مدیریت پارسیان لیفت - داشبورد") {
  return `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=414, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>${pageTitle}</title>
    
    <!-- فونت وزیر -->
    <link rel="preconnect" href="https://fonts.rastikerdar.com">
    <link href="https://fonts.rastikerdar.com/vazir/font-face.css" rel="stylesheet">

    <style>
      * { box-sizing: border-box; }
      
      /* قفل عرض ۳۷۵px حتی روی دسکتاپ */
      html, body {
        width: 414px !important;
        max-width: 414px !important;
        margin: 0 auto !important;
        overflow-x: hidden !important;
        background: #f0f2f5;
      }
      
      body { 
        font-family: 'Vazir', Tahoma, sans-serif; 
        padding: 0; 
        direction: rtl; 
        font-size: 16px; 
        line-height: 1.6; 
        min-height: 100vh;
      }
      
      .container {
        width: 100%;
        max-width: 414px;
        margin: 0 auto;
        padding: 15px;
      }

      /* هدر مشترک */
      .header {
        background: #1e3a8a;
        color: white;
        padding: 15px;
        text-align: center;
        position: sticky;
        top: 0;
        z-index: 100;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      }
      .header .logo { font-size: 22px; font-weight: bold; margin-bottom: 5px; }
      .header .title { font-size: 18px; opacity: 0.95; }
      .logout-btn {
        position: absolute;
        top: 15px;
        left: 15px;
        background: rgba(255,255,255,0.2);
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 6px;
        font-size: 14px;
        cursor: pointer;
      }

      /* منوی مشترک */
      .main-menu {
        display: flex;
        background: white;
        border-bottom: 1px solid #ddd;
        margin: 0 -15px 20px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
      }
      .main-menu button {
        flex: 1;
        padding: 14px 8px;
        background: none;
        border: none;
        font-size: 15px;
        cursor: pointer;
        border-bottom: 3px solid transparent;
      }
      .main-menu button.active {
        border-bottom: 3px solid #1e3a8a;
        color: #1e3a8a;
        font-weight: bold;
      }

      button.service-btn { 
        display: block;
        margin: 20px auto;
        padding: 16px 30px;
        background: #6c757d; 
        color: white; 
        border: none; 
        border-radius: 8px; 
        cursor: pointer; 
        font-size: 17px; 
        width: 100%;
        min-height: 52px;
        box-shadow: 0 3px 8px rgba(0,0,0,0.1);
        transition: all 0.3s ease;
      }
      button.service-btn:hover { 
        background: #5a6268; 
        transform: translateY(-2px);
      }

      /* داشبورد */
      .dashboard-wrapper {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        background: white;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        padding: 10px;
        margin: 30px 0;
      }
      .dashboard-wrapper iframe {
        width: 100% !important;
        height: 680px;
        border: none;
      }

      /* فوتر مشترک */
      footer {
        background: #1e3a8a;
        color: #ddd;
        text-align: center;
        padding: 20px 15px;
        font-size: 14px;
        margin-top: 40px;
        line-height: 1.5;
      }
      footer a { color: #ddd; text-decoration: none; }
    </style>
  `;
}

function sharedHeader() {
  return `
    <div class="header">
      <button class="logout-btn" onclick="logout()">خروج</button>
      <div class="logo">🛗 آسانسور پارسیان لیفت</div>
      <div class="title">داشبورد مدیریت</div>
    </div>
  `;
}

function sharedMenu(activePage = 'home') {
  return `
    <div class="main-menu">
      <button id="menu-home" onclick="loadPage('home')">خانه</button>
      <button id="menu-database" onclick="loadPage('database')">اطلاعات ساختمان</button>
      <button id="menu-services" onclick="loadPage('services')">سرویس</button>
      <button id="menu-others" onclick="loadPage('others')">خدمات</button>
    </div>
  `;
}

function sharedFooter() {
  return `
    <footer>
      <strong>آسانسور پارسیان لیفت</strong><br>
      تهران، جنت‌آباد، چهارراه مخبری، نرسیده به شاهین، پلاک ۱۸۵<br>
      ☎ ۰۲۱-۴۴۸۰۰۴۶۵  ۰۹۱۲۲۰۶۱۷۱۲<br>
      ✉ parsianlift@gmail.com<br><br>
      © ۱۴۰۴ — تمامی حقوق برای پارسیان لیفت محفوظ است.
    </footer>
  `;
}

function sharedJavaScript() {
  return `
    <script>
      window.addEventListener("load", function() {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        const loginTime = localStorage.getItem("loginTime");
        const isValid = isLoggedIn === "true" && 
                        loginTime && 
                        (Date.now() - Number(loginTime) < 24 * 60 * 60 * 1000);

        if (!isValid) {
          localStorage.removeItem("isLoggedIn");
          localStorage.removeItem("loginTime");
          window.location.replace("login.html");
        } else {
          loadPage('home');
        }
      });

      function logout() {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("loginTime");
        window.location.href = "login.html";
      }

      function loadPage(page) {
        const contentDiv = document.getElementById('page-content');
        let content = '';

        // فعال کردن تب
        document.querySelectorAll('.main-menu button').forEach(btn => {
          btn.classList.remove('active');
        });
        document.getElementById('menu-' + page).classList.add('active');

        // انتخاب محتوا
        switch(page) {
          case 'home':     content = homeContent(); break;
          case 'database': content = databaseContent(); break;
          case 'services': content = servicesContent(); break;
          case 'others':   content = othersContent(); break;
        }

        contentDiv.innerHTML = content;
      }

      // ==================== توابع محتوا اینجا inject می‌شن ====================
      ${homeContent.toString()}
      ${databaseContent.toString()}
      ${servicesContent.toString()}
      ${othersContent.toString()}
    </script>
  `;
}

// ====================== ساختار صفحه اصلی ======================
function generateHead() {
  return sharedHead();
}

function generateBody() {
  return `
    <div class="container">
      ${sharedHeader()}
      ${sharedMenu()}
      <div id="page-content">
        <!-- محتوای صفحه به صورت دینامیک اینجا لود می‌شود -->
      </div>
    </div>
    
    ${sharedFooter()}
  `;
}

// ====================== محتوای صفحات (جداگانه و خوانا) ======================

function homeContent() {
  return `
    

    
    
    
  `;
}

function databaseContent() {
  return `
    <h1 style="text-align:center; color:#1e3a8a; margin:30px 0 20px; font-size:24px;">
      پایگاه داده اطلاعات ساختمان‌ها
    </h1>
    <div class="dashboard-wrapper">
      <p>محتوای صفحه اطلاعات ساختمان در حال توسعه...</p>
    </div>
  `;
}

function servicesContent() {
  return `


    <button class="service-btn" 
            onclick="window.location.href='https://script.google.com/macros/s/AKfycbzfm6uUstUCICWCpIrauRCq6PlPKzyxw6J8BPAy-deTWQjns-Fb8dL8hjMkrpccjEuP/exec'">
      ثبت سرویس جدید
    </button>

    <h1 style="text-align:center; color:#1e3a8a; margin:30px 0 20px; font-size:24px;">
      پنل گزارش مالی سرویس ماهیانه
    </h1>
    
    <div class="dashboard-wrapper">
      <iframe 
        src="https://lookerstudio.google.com/embed/reporting/12YbMhxfPPECg2_BvZkLHFr1jCGoDCmT4/page/6IDS?rm=minimal"
        width="1250"
        height="660"
        style="border: none; min-width: 1250px; display: block;"
        allowfullscreen>
      </iframe>
    </div>


    <h1 style="text-align:center; color:#1e3a8a; margin:30px 0 20px; font-size:24px;">
      مدیریت سرویس‌های ماهیانه
    </h1>
    <div class="dashboard-wrapper">
      <p>محتوای صفحه سرویس در حال توسعه...</p>
    </div>
  `;
}

function othersContent() {
  return `

<h1 style="text-align:center; color:#1e3a8a; margin:30px 0 20px; font-size:24px;">
    <button class="service-btn" 
            onclick="window.location.href='https://script.google.com/macros/s/AKfycbzg5Vo4V4PKW-Tyi-w8hZZiaY5-2-eOO38nKAbEqh9rNCK8Cs7Pp97Xuzj85jIfpqr3/exec'">
      مدیریت همه خدمات
    </button>


   
  `;
}