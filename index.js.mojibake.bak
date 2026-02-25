//-- index.js
// ====================== Ú©Ø§Ù…Ù¾ÙˆÙ†Ù†Øªâ€ŒÙ‡Ø§ÛŒ Ù…Ø´ØªØ±Ú© ======================

function sharedHead(pageTitle = "Ù…Ø¯ÛŒØ±ÛŒØª Ù¾Ø§Ø±Ø³ÛŒØ§Ù† Ù„ÛŒÙØª - Ø¯Ø§Ø´Ø¨ÙˆØ±Ø¯") {
  return `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=414, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>${pageTitle}</title>
    
    <!-- ÙÙˆÙ†Øª ÙˆØ²ÛŒØ± -->
    <link rel="preconnect" href="https://fonts.rastikerdar.com">
    <link href="https://fonts.rastikerdar.com/vazir/font-face.css" rel="stylesheet">

    <style>
      * { box-sizing: border-box; }
      
      /* Ù‚ÙÙ„ Ø¹Ø±Ø¶ Û´Û±Û´px Ø­ØªÛŒ Ø±ÙˆÛŒ Ø¯Ø³Ú©ØªØ§Ù¾ */
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

      /* Ù‡Ø¯Ø± Ù…Ø´ØªØ±Ú© (Ø§Ù†Ø¯Ø§Ø²Ù‡ padding Ø­Ø§Ù„Ø§ match Ø¨Ø§ ÙÙˆØªØ±) */
      .header {
        background: #1e3a8a;  /* Ø¢Ø¨ÛŒ Ø§ØµÙ„ÛŒ Ù†Ú¯Ù‡ Ø¯Ø§Ø´ØªÙ‡ Ø´Ø¯ */
        color: white;
        padding: 18px 15px;  /* Ø§Ù†Ø¯Ø§Ø²Ù‡ Ù…Ù†Ø§Ø³Ø¨ Ùˆ match */
        text-align: center;
        position: sticky;
        top: 0;
        z-index: 100;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      }
      .header .logo-img { 
        height: 58px; 
        width: auto; 
        max-width: 240px; 
        display: block; 
        margin: 0 auto 6px auto; 
        border-radius: 6px; 
      }
      .header .title { font-size: 18px; opacity: 0.95; }
      .logout-btn {
        position: absolute;
        top: 18px;  /* Ø¨Ø§ padding Ø¬Ø¯ÛŒØ¯ match */
        left: 15px;
        background: rgba(255,255,255,0.2);
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 6px;
        font-size: 14px;
        cursor: pointer;
      }

      /* Ù…Ù†ÙˆÛŒ Ù…Ø´ØªØ±Ú© */
      .main-menu {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 414px;
  max-width: 414px;
  display: flex;
  background: white;
  border-top: 1px solid #ddd;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.08);
  z-index: 999;
}

.main-menu button {
  flex: 1;
  padding: 10px 5px;
  background: none;
  border: none;
  font-size: 13px;
  cursor: pointer;
  border-top: 3px solid transparent;
}

.main-menu button.active {
  border-top: 3px solid #1e3a8a;
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

      /* Ø¯Ø§Ø´Ø¨ÙˆØ±Ø¯ */
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

      /* ÙÙˆØªØ± Ù…Ø´ØªØ±Ú© (Ø±Ù†Ú¯ Ù†Ø§Ø±Ù†Ø¬ÛŒ Ø¨Ø±Ø§ÛŒ match Ø¨Ø§ Ù„ÙˆÚ¯Ùˆ + Ø§Ù†Ø¯Ø§Ø²Ù‡ Ù…Ù†Ø§Ø³Ø¨) */
      footer {
        background: #ff6600;  /* Ù†Ø§Ø±Ù†Ø¬ÛŒ Ø§Ø² Ù„ÙˆÚ¯Ùˆ */
        color: #fff;  /* Ø³ÙÛŒØ¯ Ø¨Ø±Ø§ÛŒ Ø®ÙˆØ§Ù†Ø§ÛŒÛŒ Ø¨Ù‡ØªØ± */
        text-align: center;
        padding: 18px 15px;  /* Ø§Ù†Ø¯Ø§Ø²Ù‡ match Ø¨Ø§ Ù‡Ø¯Ø± */
        font-size: 14px;
        margin-top: 30px;  /* ÙØ§ØµÙ„Ù‡ Ú©Ù…ØªØ± Ø¨Ø±Ø§ÛŒ Ù…Ù†Ø§Ø³Ø¨â€ŒØªØ± Ø´Ø¯Ù† */
        line-height: 1.5;
      }
      footer a { color: #fff; text-decoration: none; }
    </style>
  `;
}

function sharedHeader() {
  return `
    <div class="header">
      <button class="logout-btn" onclick="logout()">Ø®Ø±ÙˆØ¬</button>
      
      <!-- Ù„ÙˆÚ¯Ùˆ Ø§Ø² GitHub -->
      <img 
        src="https://raw.githubusercontent.com/parsianlift/dashboard/main/photo/LogoCapture.JPG" 
        class="logo-img" 
        alt="Ù„ÙˆÚ¯Ùˆ Ù¾Ø§Ø±Ø³ÛŒØ§Ù† Ù„ÛŒÙØª">
      
      <div class="title">Ø¯Ø§Ø´Ø¨ÙˆØ±Ø¯ Ù…Ø¯ÛŒØ±ÛŒØª</div>
    </div>
  `;
}


function sharedMenu(activePage = "home") {
  return `
    <div class="main-menu">
      <button id="menu-home" onclick="loadPage('home')">Ø®Ø§Ù†Ù‡</button>
      <button id="menu-database" onclick="loadPage('database')">Ø³Ø§Ø®ØªÙ…Ø§Ù†</button>
      <button id="menu-services" onclick="loadPage('services')">Ø³Ø±ÙˆÛŒØ³</button>
      <button id="menu-others" onclick="loadPage('others')">Ø®Ø¯Ù…Ø§Øª</button>
      <button id="menu-hoghogh" onclick="loadPage('hoghogh')">Ø­Ù‚ÙˆÙ‚</button>
    </div>
  `;
}

function sharedHead(pageTitle = "Ù…Ø¯ÛŒØ±ÛŒØª Ù¾Ø§Ø±Ø³ÛŒØ§Ù† Ù„ÛŒÙØª - Ø¯Ø§Ø´Ø¨ÙˆØ±Ø¯") {
  return `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${pageTitle}</title>

    <!-- ÙÙˆÙ†Øª ÙˆØ²ÛŒØ± -->
    <link rel="preconnect" href="https://fonts.rastikerdar.com">
    <link href="https://fonts.rastikerdar.com/vazir/font-face.css" rel="stylesheet">

    <style>
      * {
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
      }

      html, body {
        margin: 0;
        padding: 0;
        background: #f2f4f8;
        height: 100%;
      }

      body {
        display: flex;
        justify-content: center;
        font-family: "Vazir", Tahoma, sans-serif;
      }

      .container {
        width: 414px;
        max-width: 414px;
        min-height: 100vh;
        padding: 15px;
        padding-bottom: 120px;
      }

      /* ================= Header ================= */

      .header {
        background: linear-gradient(135deg, #1e3a8a, #2563eb);
        color: #fff;
        padding: 20px 15px;
        text-align: center;
        border-radius: 0 0 24px 24px;
        box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        position: relative;
      }

      .logo-img {
        height: 54px;
        margin-bottom: 8px;
      }

      .title {
        font-size: 18px;
        opacity: 0.95;
      }

      .logout-btn {
        position: absolute;
        top: 18px;
        left: 15px;
        background: rgba(255,255,255,0.2);
        border: none;
        color: white;
        padding: 7px 14px;
        border-radius: 20px;
        font-size: 13px;
        cursor: pointer;
        backdrop-filter: blur(10px);
      }

      /* ================= Modern Floating Bottom Menu 2026 ================= */

      .main-menu {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        width: 390px;
        height: 70px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: rgba(255,255,255,0.75);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border-radius: 30px;
        box-shadow:
          0 15px 35px rgba(0,0,0,0.15),
          inset 0 1px 1px rgba(255,255,255,0.5);
        padding: 0 10px;
        z-index: 999;
      }

      .main-menu button {
        flex: 1;
        height: 60px;
        border: none;
        background: none;
        font-size: 11px;
        font-family: inherit;
        color: #777;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 4px;
        cursor: pointer;
        border-radius: 18px;
        transition: all 0.25s ease;
      }

      .main-menu button::before {
        font-size: 20px;
      }

      #menu-home::before { content: "ðŸ "; }
      #menu-database::before { content: "ðŸ¢"; }
      #menu-services::before { content: "ðŸ”§"; }
      #menu-others::before { content: "ðŸ“‹"; }
      #menu-hoghogh::before { content: "ðŸ’°"; }

      .main-menu button.active {
        background: linear-gradient(135deg, #1e3a8a, #2563eb);
        color: #fff;
        transform: translateY(-6px);
        box-shadow: 0 8px 20px rgba(37, 99, 235, 0.35);
      }

      .main-menu button.active::before {
        transform: scale(1.15);
      }

      /* ================= Buttons ================= */

      .service-btn {
        display: block;
        margin: 25px auto;
        padding: 16px 30px;
        background: #6c757d;
        color: white;
        border: none;
        border-radius: 14px;
        font-size: 16px;
        width: 100%;
        box-shadow: 0 6px 15px rgba(0,0,0,0.1);
        transition: 0.25s;
      }

      .service-btn:hover {
        transform: translateY(-3px);
        background: #5a6268;
      }

      /* ================= Dashboard Wrapper ================= */

      .dashboard-wrapper {
        background: white;
        border-radius: 18px;
        padding: 18px;
        margin: 25px 0;
        box-shadow: 0 10px 25px rgba(0,0,0,0.08);
      }

      .dashboard-wrapper iframe {
        border: none;
        width: 100%;
      }

      /* ================= Footer ================= */

      footer {
        background: linear-gradient(135deg, #ff6600, #ff8533);
        color: #fff;
        text-align: center;
        padding: 18px 15px;
        font-size: 14px;
        border-radius: 24px 24px 0 0;
        margin-top: 40px;
      }

      footer a {
        color: #fff;
        text-decoration: none;
      }
    </style>
  `;
}

function sharedHead(pageTitle = "Ù…Ø¯ÛŒØ±ÛŒØª Ù¾Ø§Ø±Ø³ÛŒØ§Ù† Ù„ÛŒÙØª - Ø¯Ø§Ø´Ø¨ÙˆØ±Ø¯") {
  return `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- PWA Fullscreen Mode -->
    <meta name="theme-color" content="#1e3a8a">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">

    <link rel="manifest" href="manifest.json">

    <title>${pageTitle}</title>

    <!-- ÙÙˆÙ†Øª ÙˆØ²ÛŒØ± -->
    <link rel="preconnect" href="https://fonts.rastikerdar.com">
    <link href="https://fonts.rastikerdar.com/vazir/font-face.css" rel="stylesheet">

    <style>
      * {
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
      }

      html, body {
        margin: 0;
        padding: 0;
        background: #f2f4f8;
        height: 100%;
      }

      body {
        display: flex;
        justify-content: center;
        font-family: "Vazir", Tahoma, sans-serif;
      }

      .container {
        width: 414px;
        max-width: 414px;
        min-height: 100vh;
        padding: 15px;
        padding-bottom: 120px;
      }

      /* Header */

      .header {
        background: linear-gradient(135deg, #1e3a8a, #2563eb);
        color: #fff;
        padding: 20px 15px;
        text-align: center;
        border-radius: 0 0 24px 24px;
        box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        position: relative;
      }

      .logo-img {
        height: 54px;
        margin-bottom: 8px;
      }

      .title {
        font-size: 18px;
      }

      .logout-btn {
        position: absolute;
        top: 18px;
        left: 15px;
        background: rgba(255,255,255,0.2);
        border: none;
        color: white;
        padding: 7px 14px;
        border-radius: 20px;
        font-size: 13px;
        cursor: pointer;
      }

      /* Floating Bottom Menu */

      .main-menu {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        width: 390px;
        height: 70px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: rgba(255,255,255,0.85);
        backdrop-filter: blur(20px);
        border-radius: 30px;
        box-shadow: 0 15px 35px rgba(0,0,0,0.15);
        padding: 0 10px;
        z-index: 999;
      }

      .main-menu button {
        flex: 1;
        height: 60px;
        border: none;
        background: none;
        font-size: 11px;
        color: #777;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 4px;
        cursor: pointer;
        border-radius: 18px;
        transition: 0.25s ease;
      }

      .main-menu button::before {
        font-size: 20px;
      }

      #menu-home::before { content: "ðŸ "; }
      #menu-database::before { content: "ðŸ¢"; }
      #menu-services::before { content: "ðŸ”§"; }
      #menu-others::before { content: "ðŸ“‹"; }
      #menu-hoghogh::before { content: "ðŸ’°"; }

      .main-menu button.active {
        background: linear-gradient(135deg, #1e3a8a, #2563eb);
        color: #fff;
        transform: translateY(-6px);
        box-shadow: 0 8px 20px rgba(37, 99, 235, 0.35);
      }

      /* Buttons */

      .service-btn {
        display: block;
        margin: 25px auto;
        padding: 16px 30px;
        background: #6c757d;
        color: white;
        border: none;
        border-radius: 14px;
        font-size: 16px;
        width: 100%;
        box-shadow: 0 6px 15px rgba(0,0,0,0.1);
      }

      /* Dashboard */

      .dashboard-wrapper {
        background: white;
        border-radius: 18px;
        padding: 18px;
        margin: 25px 0;
        box-shadow: 0 10px 25px rgba(0,0,0,0.08);
      }

      footer {
        background: linear-gradient(135deg, #ff6600, #ff8533);
        color: #fff;
        text-align: center;
        padding: 18px 15px;
        font-size: 14px;
        border-radius: 24px 24px 0 0;
        margin-top: 40px;
      }
    </style>
  `;
}

function sharedHead(pageTitle = "Ù…Ø¯ÛŒØ±ÛŒØª Ù¾Ø§Ø±Ø³ÛŒØ§Ù† Ù„ÛŒÙØª - Ø¯Ø§Ø´Ø¨ÙˆØ±Ø¯") {
  return `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- PWA -->
    <meta name="theme-color" content="#1e3a8a">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <link rel="manifest" href="manifest.json">
    <link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16.png">
    <link rel="apple-touch-icon" sizes="180x180" href="icons/apple-touch-icon.png">

    <title>${pageTitle}</title>

    <link rel="preconnect" href="https://fonts.rastikerdar.com">
    <link href="https://fonts.rastikerdar.com/vazir/font-face.css" rel="stylesheet">

    <style>
      * {
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
      }

      html, body {
        margin: 0;
        padding: 0;
        background: #f2f4f8;
        font-family: "Vazir", Tahoma, sans-serif;
      }

      /* Main Wrapper */
      .container {
        width: 414px;
        max-width: 100%;
        margin: 0 auto;
        min-height: 100vh;
        padding: 15px;
        padding-bottom: 120px;
      }

      /* Header */
      .header {
        background: linear-gradient(135deg, #1e3a8a, #2563eb);
        color: #fff;
        padding: 20px 15px;
        text-align: center;
        border-radius: 0 0 24px 24px;
        box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        position: relative;
      }

      .logo-img {
        height: 54px;
        margin-bottom: 8px;
      }

      .title {
        font-size: 18px;
      }

      .logout-btn {
        position: absolute;
        top: 18px;
        left: 15px;
        background: rgba(255,255,255,0.2);
        border: none;
        color: white;
        padding: 7px 14px;
        border-radius: 20px;
        font-size: 13px;
        cursor: pointer;
      }

      /* Floating Bottom Menu */
      .main-menu {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        width: 390px;
        max-width: 95%;
        height: 70px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: rgba(255,255,255,0.9);
        backdrop-filter: blur(20px);
        border-radius: 30px;
        box-shadow: 0 15px 35px rgba(0,0,0,0.15);
        padding: 0 10px;
        z-index: 999;
      }

      .main-menu button {
        flex: 1;
        height: 60px;
        border: none;
        background: none;
        font-size: 11px;
        color: #777;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 4px;
        cursor: pointer;
        border-radius: 18px;
        transition: 0.25s ease;
      }

      .main-menu button::before {
        font-size: 20px;
      }

      #menu-home::before { content: "ðŸ "; }
      #menu-database::before { content: "ðŸ¢"; }
      #menu-services::before { content: "ðŸ”§"; }
      #menu-others::before { content: "ðŸ“‹"; }
      #menu-hoghogh::before { content: "ðŸ’°"; }

      .main-menu button.active {
        background: linear-gradient(135deg, #1e3a8a, #2563eb);
        color: #fff;
        transform: translateY(-6px);
        box-shadow: 0 8px 20px rgba(37, 99, 235, 0.35);
      }

      /* Dashboard */
      .dashboard-wrapper {
        background: #fff;
        border-radius: 18px;
        padding: 18px;
        margin: 25px 0;
        box-shadow: 0 10px 25px rgba(0,0,0,0.08);
      }

      .dashboard-wrapper iframe {
        width: 100%;
        border: none;
      }

      /* Buttons */
      .service-btn {
        display: block;
        margin: 25px auto;
        padding: 16px 30px;
        background: #6c757d;
        color: #fff;
        border: none;
        border-radius: 14px;
        font-size: 16px;
        width: 100%;
        box-shadow: 0 6px 15px rgba(0,0,0,0.1);
      }

      /* Footer */
      footer {
        width: 414px;
        max-width: 100%;
        margin: 40px auto 0 auto;
        background: linear-gradient(135deg, #ff6600, #ff8533);
        color: #fff;
        text-align: center;
        padding: 18px 15px;
        font-size: 14px;
        border-radius: 24px 24px 0 0;
        box-shadow: 0 -5px 20px rgba(0,0,0,0.08);
      }

      footer a {
        color: #fff;
        text-decoration: none;
      }
    </style>
  `;
}

function sharedFooter() {
  return `
    <footer>
      <strong>Ø¢Ø³Ø§Ù†Ø³ÙˆØ± Ù¾Ø§Ø±Ø³ÛŒØ§Ù† Ù„ÛŒÙØª</strong><br>
      ØªÙ‡Ø±Ø§Ù†ØŒ Ø¬Ù†Øªâ€ŒØ¢Ø¨Ø§Ø¯ØŒ Ú†Ù‡Ø§Ø±Ø±Ø§Ù‡ Ù…Ø®Ø¨Ø±ÛŒØŒ Ù†Ø±Ø³ÛŒØ¯Ù‡ Ø¨Ù‡ Ø´Ø§Ù‡ÛŒÙ†ØŒ Ù¾Ù„Ø§Ú© Û±Û¸Ûµ<br>
      â˜Ž Û°Û²Û±-Û´Û´Û¸Û°Û°Û´Û¶Ûµâ€ƒâ€ƒÛ°Û¹Û±Û²Û²Û°Û¶Û±Û·Û±Û²<br>
      âœ‰ parsianlift@gmail.com<br><br>
      Â© Û±Û´Û°Û´ â€” ØªÙ…Ø§Ù…ÛŒ Ø­Ù‚ÙˆÙ‚ Ø¨Ø±Ø§ÛŒ Ù¾Ø§Ø±Ø³ÛŒØ§Ù† Ù„ÛŒÙØª Ù…Ø­ÙÙˆØ¸ Ø§Ø³Øª.
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
          loadPage('services');
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

        // ÙØ¹Ø§Ù„ Ú©Ø±Ø¯Ù† ØªØ¨
        document.querySelectorAll('.main-menu button').forEach(btn => {
          btn.classList.remove('active');
        });
        document.getElementById('menu-' + page).classList.add('active');

        // Ø§Ù†ØªØ®Ø§Ø¨ Ù…Ø­ØªÙˆØ§
        switch(page) {
          case 'home':     content = homeContent(); break;
          case 'database': content = databaseContent(); break;
          case 'services': content = servicesContent(); break;
          case 'others':   content = othersContent(); break;
        }

        contentDiv.innerHTML = content;
      }

      // ==================== ØªÙˆØ§Ø¨Ø¹ Ù…Ø­ØªÙˆØ§ Ø§ÛŒÙ†Ø¬Ø§ inject Ù…ÛŒâ€ŒØ´Ù† ====================
      ${homeContent.toString()}
      ${databaseContent.toString()}
      ${servicesContent.toString()}
      ${othersContent.toString()}
    </script>
  `;
}

// ====================== Ø³Ø§Ø®ØªØ§Ø± ØµÙØ­Ù‡ Ø§ØµÙ„ÛŒ ======================
function generateHead() {
  return sharedHead();
}

function generateBody() {
  return `
    <div class="container">
      ${sharedHeader()}
      ${sharedMenu()}
      <div id="page-content">
        <!-- Ù…Ø­ØªÙˆØ§ÛŒ ØµÙØ­Ù‡ Ø¨Ù‡ ØµÙˆØ±Øª Ø¯ÛŒÙ†Ø§Ù…ÛŒÚ© Ø§ÛŒÙ†Ø¬Ø§ Ù„ÙˆØ¯ Ù…ÛŒâ€ŒØ´ÙˆØ¯ -->
      </div>
    </div>
    
    ${sharedFooter()}
  `;
}

// ====================== Ù…Ø­ØªÙˆØ§ÛŒ ØµÙØ­Ø§Øª (Ø¬Ø¯Ø§Ú¯Ø§Ù†Ù‡ Ùˆ Ø®ÙˆØ§Ù†Ø§) ======================

function homeContent() {
  return `
    
    
  `;
}

function databaseContent() {
  return `
    <h1 style="text-align:center; color:#1e3a8a; margin:30px 0 20px; font-size:24px;">
      Ù¾Ø§ÛŒÚ¯Ø§Ù‡ Ø¯Ø§Ø¯Ù‡ Ø§Ø·Ù„Ø§Ø¹Ø§Øª Ø³Ø§Ø®ØªÙ…Ø§Ù†â€ŒÙ‡Ø§
    </h1>
    <div class="dashboard-wrapper">
      <p>Ù…Ø­ØªÙˆØ§ÛŒ ØµÙØ­Ù‡ Ø§Ø·Ù„Ø§Ø¹Ø§Øª Ø³Ø§Ø®ØªÙ…Ø§Ù† Ø¯Ø± Ø­Ø§Ù„ ØªÙˆØ³Ø¹Ù‡...</p>
    </div>
  `;
}

function servicesContent() {
  return `


    <button class="service-btn" 
            onclick="window.location.href='https://script.google.com/macros/s/AKfycbzfm6uUstUCICWCpIrauRCq6PlPKzyxw6J8BPAy-deTWQjns-Fb8dL8hjMkrpccjEuP/exec'">
      Ø«Ø¨Øª Ø³Ø±ÙˆÛŒØ³ Ø¬Ø¯ÛŒØ¯
    </button>

    <h1 style="text-align:center; color:#1e3a8a; margin:30px 0 20px; font-size:24px;">
      Ù¾Ù†Ù„ Ú¯Ø²Ø§Ø±Ø´ Ù…Ø§Ù„ÛŒ Ø³Ø±ÙˆÛŒØ³ Ù…Ø§Ù‡ÛŒØ§Ù†Ù‡
    </h1>
    
      <div class="dashboard-wrapper">

    
        <div style="width:625px; height:330px; overflow:hidden;">
        <iframe 
       src="https://lookerstudio.google.com/embed/reporting/12YbMhxfPPECg2_BvZkLHFr1jCGoDCmT4/page/6IDS?rm=minimal"
       width="1250"
       height="660"
       style="
       border:none;
       transform:scale(0.5);
       transform-origin:top right;
       "
       allowfullscreen>
       </iframe>
      </div>

    <!-- Ø³Ø±ÙˆÛŒØ³ Ù…Ø§Ù‡Ø§Ù†Ù‡ Ø§Ù†Ø¬Ø§Ù… Ù†Ø´Ø¯Ù‡ -->
    <iframe 
  src="https://lookerstudio.google.com/embed/reporting/6136844b-ee45-4834-9ce3-53b5bfec9d74/page/eI0BB"
  width="1200"
  height="960"
  style="
    border: none;
    min-width: 1200px;
    display: block;
    transform: scale(0.31);
    transform-origin: top right;
  "
  allowfullscreen>
</iframe>



    <h1 style="text-align:center; color:#1e3a8a; margin:30px 0 20px; font-size:24px;">
      Ù…Ø¯ÛŒØ±ÛŒØª Ø³Ø±ÙˆÛŒØ³â€ŒÙ‡Ø§ÛŒ Ù…Ø§Ù‡ÛŒØ§Ù†Ù‡
    </h1>
    <div class="dashboard-wrapper">
      <p>Ù…Ø­ØªÙˆØ§ÛŒ ØµÙØ­Ù‡ Ø³Ø±ÙˆÛŒØ³ Ø¯Ø± Ø­Ø§Ù„ ØªÙˆØ³Ø¹Ù‡...</p>
    </div>
  `;
}
function servicesContent() {
  return `

    <!-- Ù…Ø¯ÛŒØ±ÛŒØª Ø³Ø±ÙˆÛŒØ³â€ŒÙ‡Ø§ -->
    <h1 style="text-align:center; color:#1e3a8a; margin:30px 0 20px; font-size:24px;">
      Ù…Ø¯ÛŒØ±ÛŒØª Ø³Ø±ÙˆÛŒØ³â€ŒÙ‡Ø§ÛŒ Ù…Ø§Ù‡ÛŒØ§Ù†Ù‡
    </h1>


    <!-- Ø¯Ú©Ù…Ù‡ Ø«Ø¨Øª Ø³Ø±ÙˆÛŒØ³ -->
    <button class="service-btn" 
      onclick="window.location.href='https://script.google.com/macros/s/AKfycbzfm6uUstUCICWCpIrauRCq6PlPKzyxw6J8BPAy-deTWQjns-Fb8dL8hjMkrpccjEuP/exec'">
      Ø«Ø¨Øª Ø³Ø±ÙˆÛŒØ³ Ø¬Ø¯ÛŒØ¯
    </button>

    <!-- Ú¯Ø²Ø§Ø±Ø´ Ù…Ø§Ù„ÛŒ Ø³Ø±ÙˆÛŒØ³ Ù…Ø§Ù‡ÛŒØ§Ù†Ù‡ -->
    <h1 style="text-align:center; color:#1e3a8a; margin:30px 0 20px; font-size:24px;">
      Ù¾Ù†Ù„ Ú¯Ø²Ø§Ø±Ø´ Ù…Ø§Ù„ÛŒ Ø³Ø±ÙˆÛŒØ³ Ù…Ø§Ù‡ÛŒØ§Ù†Ù‡
    </h1>

    <div class="dashboard-wrapper">
      <div style="width:625px; height:330px; overflow:hidden; margin:auto;">
        <iframe 
          src="https://lookerstudio.google.com/embed/reporting/12YbMhxfPPECg2_BvZkLHFr1jCGoDCmT4/page/6IDS?rm=minimal"
          width="1250"
          height="550"
          style="
            border:none;
            transform:scale(1);
            transform-origin:top right;
          "
          allowfullscreen>
        </iframe>
      </div>
    </div>

    <!-- Ø³Ø±ÙˆÛŒØ³ Ù…Ø§Ù‡Ø§Ù†Ù‡ Ø§Ù†Ø¬Ø§Ù… Ù†Ø´Ø¯Ù‡ -->
    <h1 style="text-align:center; color:#1e3a8a; margin:30px 0 20px; font-size:24px;">
      Ø³Ø±ÙˆÛŒØ³ Ù…Ø§Ù‡Ø§Ù†Ù‡ Ø§Ù†Ø¬Ø§Ù… Ù†Ø´Ø¯Ù‡
    </h1>

    <div class="dashboard-wrapper" style="overflow-x:auto; overflow-y:hidden;">
  
      <div style="height:450px; overflow:hidden;">
    
       <div class="dashboard-wrapper" style="overflow-x:hidden; overflow-y:auto; height:450px;">
  
          <div class="dashboard-wrapper">
  <div style="width:625px; height:330px; overflow-y:auto; overflow-x:hidden; margin:auto;">
    
           <div class="dashboard-wrapper" style="overflow-x:auto; overflow-y:hidden;">
  
  <div style="height:450px; overflow:hidden;">
    
           <iframe 
      src="https://lookerstudio.google.com/embed/reporting/6136844b-ee45-4834-9ce3-53b5bfec9d74/page/eI0BB"
      width="1250"
      height="450"
      style="border:none; display:block;"
      allowfullscreen>
    </iframe>

  </div>

</div>

           </div>
        </div>>

       </div>

    </div>

</div>

  `;
}

function servicesContent() {
  return `

    <!-- Ù…Ø¯ÛŒØ±ÛŒØª Ø³Ø±ÙˆÛŒØ³â€ŒÙ‡Ø§ -->
    <h1 style="text-align:center; color:#1e3a8a; margin:30px 0 20px; font-size:24px;">
      Ù…Ø¯ÛŒØ±ÛŒØª Ø³Ø±ÙˆÛŒØ³â€ŒÙ‡Ø§ÛŒ Ù…Ø§Ù‡ÛŒØ§Ù†Ù‡
    </h1>

    <!-- Ø¯Ú©Ù…Ù‡ Ø«Ø¨Øª Ø³Ø±ÙˆÛŒØ³ -->
    <button class="service-btn" 
      onclick="window.location.href='https://script.google.com/macros/s/AKfycbzfm6uUstUCICWCpIrauRCq6PlPKzyxw6J8BPAy-deTWQjns-Fb8dL8hjMkrpccjEuP/exec'">
      Ø«Ø¨Øª Ø³Ø±ÙˆÛŒØ³ Ø¬Ø¯ÛŒØ¯
    </button>

    <!-- Ú¯Ø²Ø§Ø±Ø´ Ù…Ø§Ù„ÛŒ Ø³Ø±ÙˆÛŒØ³ Ù…Ø§Ù‡ÛŒØ§Ù†Ù‡ -->
    <h1 style="text-align:center; color:#1e3a8a; margin:30px 0 20px; font-size:24px;">
      Ù¾Ù†Ù„ Ú¯Ø²Ø§Ø±Ø´ Ù…Ø§Ù„ÛŒ Ø³Ø±ÙˆÛŒØ³ Ù…Ø§Ù‡ÛŒØ§Ù†Ù‡
    </h1>

    <div class="dashboard-wrapper">
      <div style="width:625px; height:330px; overflow:hidden; margin:auto;">
        <iframe 
          src="https://lookerstudio.google.com/embed/reporting/12YbMhxfPPECg2_BvZkLHFr1jCGoDCmT4/page/6IDS?rm=minimal"
          width="1250"
          height="550"
          style="border:none; display:block;"
          allowfullscreen>
        </iframe>
      </div>
    </div>

    <!-- Ø³Ø±ÙˆÛŒØ³ Ù…Ø§Ù‡Ø§Ù†Ù‡ Ø§Ù†Ø¬Ø§Ù… Ù†Ø´Ø¯Ù‡ -->
    <h1 style="text-align:center; color:#1e3a8a; margin:30px 0 20px; font-size:24px;">
      Ø³Ø±ÙˆÛŒØ³ Ù…Ø§Ù‡Ø§Ù†Ù‡ Ø§Ù†Ø¬Ø§Ù… Ù†Ø´Ø¯Ù‡
    </h1>

  <div class="dashboard-wrapper">
    <div style="width:625px; height:330px; overflow:hidden; margin:auto;">
      <iframe 
        src="https://lookerstudio.google.com/embed/reporting/6136844b-ee45-4834-9ce3-53b5bfec9d74/page/eI0BB"
        width="1250"
        height="550"
        style="border:none; display:block; transform:scale(0.6); transform-origin:top right;"
        allowfullscreen>
      </iframe>
    </div>

  `;
}

function othersContent() {
  return `

<h1 style="text-align:center; color:#1e3a8a; margin:30px 0 20px; font-size:24px;">
    <button class="service-btn" 
            onclick="window.location.href='https://script.google.com/macros/s/AKfycbzg5Vo4V4PKW-Tyi-w8hZZiaY5-2-eOO38nKAbEqh9rNCK8Cs7Pp97Xuzj85jIfpqr3/exec'">
      Ù…Ø¯ÛŒØ±ÛŒØª Ù‡Ù…Ù‡ Ø®Ø¯Ù…Ø§Øª
    </button>


   
  `;
}

function hoghoghContent() {
  return `
    <div class="dashboard-wrapper">
      <iframe 
        src="Ù„ÛŒÙ†Ú©-Ù…ÙˆØ±Ø¯-Ù†Ø¸Ø±-Ø§ÛŒÙ†Ø¬Ø§-Ù‚Ø±Ø§Ø±-Ø¨Ú¯ÛŒØ±Ø¯"
        width="1250"
        height="660"
        style="border: none; min-width: 1250px; display: block;"
        allowfullscreen>
      </iframe>
    </div>
  `;
}

