/**
 * app.js
 * FinTech Platform Core Logic & Session Management
 */

// ----------------------------------------------------
// Init & Theme Sync
// ----------------------------------------------------
const htmlTag = document.documentElement;
const themeToggleBtn = document.getElementById('theme-toggle');

let isDark = localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

function applyTheme() {
    if (isDark) {
        htmlTag.classList.add('dark');
        themeToggleBtn.innerHTML = '☀️';
        themeToggleBtn.classList.replace('bg-white', 'bg-slate-800');
        themeToggleBtn.classList.replace('text-slate-800', 'text-yellow-400');
    } else {
        htmlTag.classList.remove('dark');
        themeToggleBtn.innerHTML = '🌙';
        themeToggleBtn.classList.replace('bg-slate-800', 'bg-white');
        themeToggleBtn.classList.replace('text-yellow-400', 'text-slate-800');
    }
}
applyTheme();

applyTheme();

// ----------------------------------------------------
// Language & i18n System
// ----------------------------------------------------
const TRANSLATIONS = {
    ar: {
        who_investing: "من يستثمر الآن؟",
        select_account: "اختر حسابك للدخول السريع بضغطة واحدة",
        different_account: "الدخول بحساب مختلف",
        no_account: "ليس لديك حساب استثماري؟",
        contact_us: "تواصل معنا لشراء حساب",
        site_title: "شركة الوسيط",
        site_slogan: "منصتك الموثوقة للاستثمار الاحترافي",
        login_id: "اسم الدخول",
        enter_username: "أدخل اسم الحساب...",
        password: "كلمة المرور",
        continue: "متابعة",
        back_profiles: "العودة لقائمة الحسابات ←",
        buy_contact: "لشراء وإنشاء حساب، تواصل معنا",
        admin_ops: "العمليات الإدارية والمقاصة",
        open_new_wallet: "فتح محفظة جديدة",
        investor: "المستثمر",
        base_balance: "الرصيد الأساسي",
        dist_profit: "الأرباح الموزعة",
        auto_system: "النظام الآلي",
        manage: "إدارة",
        wallet_overview: "نظرة عامة على المحفظة",
        total_assets: "إجمالي الأصول المتاحة",
        currency: "IQD",
        iv_yield: "العائد الاستثماري",
        login_id_set: "رمز الدخول المراد تعيينه",
        enc_password: "كلمة المرور المشفرة",
        user_role: "رتبة المستخدم",
        investor_normal: "مستثمر عادي",
        admin_panel: "مدير لوحة",
        initial_deposit: "إيداع أولي (IQD)",
        auto_profit_margin: "هامش الربح التلقائي / الدورة",
        cycle_time_hours: "دورة الربح بالزمن (ساعة)",
        create_wallet: "اعتماد وإنشاء المحفظة",
        edit_wallet_data: "تعديل بيانات المحفظة",
        category: "التصنيف",
        base_balance_iqd: "الرصيد الأساسي (IQD)",
        cycle_settings: "إعدادات الدورة (الأرباح)",
        cycle_time_hours_full: "زمن الدورة (بالساعات)",
        ignore: "تجاهل",
        save_changes: "حفظ التغييرات",
        investor_statement: "كشف حساب المستثمر",
        close_statement: "إغلاق الكشف",
        active_sessions: "جلسات الدخول النشطة",
        logout_current: "تسجيل خروج المستثمر الحالي",
        neutralize_vault: "تحييد الخزنة (طرد جميع الحسابات)",
        
        // Dynamic Strings
        banned_msg: "للأسف الحساب محظور حالياً.",
        invalid_data: "الرجاء إدخال البيانات",
        incorrect_data: "بيانات غير صحيحة.",
        banned_switch: "لا يمكنك الدخول، الحساب محظور.",
        account_exists: "المعرف مستخدم مسبقاً.",
        wallet_created: "تم اعتماد المحفظة وربطها بقواعد البيانات الحصينة للخزنة!",
        locked: "Locked",
        admin: "Admin",
        active: "نشط",
        inactive: "غير نشط",
        statement_full: "كشف حساب شامل",
        statement_edit: "تعديل المحفظة",
        statement_funds: "إضافة رصيد",
        statement_profit: "اعتماد أرباح",
        statement_logout: "إنهاء الجلسة",
        statement_unban: "فك التجميد",
        statement_ban: "تجميد (حظر)",
        statement_delete: "تصفية وإلغاء",
        confirm_delete: "تصفية الحساب؟",
        prompt_funds: "أضف إيداع للمحفظة",
        prompt_profit: "توزيع ربح للمحفظة",
        force_logout_msg: "تم طرد الحساب.",
        ban_options_prompt: "اختر: 1 (يوم), 2 (أسبوع), 3 (شهر), 4 (دائم), 5 (مخصص بالساعات)",
        ban_hours_prompt: "ضع الساعات:",
        session_cut: "انقطعت الجلسة أو تم تغيير الصلاحيات.",
        statement_total: "الرصيد الفعلي التقريبي الآن",
        edit_success: "تم تعديل البيانات.",
        empty_fields: "حقول فارغة.",
        restricted_name: "ممنوع استخدام هذا الاسم.",
        mandatory_fields: "هناك حقول إجبارية لم تـُمـلأ!",
        add_extra_account: "الدخول لحساب إضافي...",
        owner_label: "Owner",
        user_label: "User",
        system_owner: "System Owner",
        investor_label: "Investor",
        assets_chart: "إجمالي الأصول (IQD)",
        start_trade: "بدء التداول",
        stage: "مرحلة",
        now: "الآن",
        cycle_label: "دورة"
    },
    en: {
        who_investing: "Who is investing now?",
        select_account: "Choose your account for quick one-tap access",
        different_account: "Login with another account",
        no_account: "Don't have an investment account?",
        contact_us: "Contact us to buy an account",
        site_title: "Al-Waseet Co.",
        site_slogan: "Your Trusted Platform for Professional Investment",
        login_id: "Login ID",
        enter_username: "Enter username...",
        password: "Password",
        continue: "Continue",
        back_profiles: "← Back to Account List",
        buy_contact: "To buy and create an account, contact us",
        admin_ops: "Administrative Ops & Clearing",
        open_new_wallet: "Open New Wallet",
        investor: "Investor",
        base_balance: "Base Balance",
        dist_profit: "Distributed Profits",
        auto_system: "Auto System",
        manage: "Manage",
        wallet_overview: "Portfolio Overview",
        total_assets: "Total Available Assets",
        currency: "IQD",
        iv_yield: "Investment Yield",
        login_id_set: "Login ID to be assigned",
        enc_password: "Encrypted Password",
        user_role: "User Role",
        investor_normal: "Normal Investor",
        admin_panel: "Panel Manager",
        initial_deposit: "Initial Deposit (IQD)",
        auto_profit_margin: "Auto Profit Margin / Cycle",
        cycle_time_hours: "Profit Cycle (Hours)",
        create_wallet: "Confirm & Create Wallet",
        edit_wallet_data: "Edit Wallet Data",
        category: "Category",
        base_balance_iqd: "Base Balance (IQD)",
        cycle_settings: "Cycle Settings (Profits)",
        cycle_time_hours_full: "Cycle Time (Hours)",
        ignore: "Ignore",
        save_changes: "Save Changes",
        investor_statement: "Investor Statement",
        close_statement: "Close Statement",
        active_sessions: "Active Sessions",
        logout_current: "Logout Current Investor",
        neutralize_vault: "Neutralize Vault (Logout All)",
        
        // Dynamic Strings
        banned_msg: "Sorry, this account is currently banned.",
        invalid_data: "Please enter data",
        incorrect_data: "Incorrect data.",
        banned_switch: "Cannot login, account is banned.",
        account_exists: "ID already in use.",
        wallet_created: "Wallet confirmed and linked to secure database!",
        locked: "Locked",
        admin: "Admin",
        active: "Active",
        inactive: "Inactive",
        statement_full: "Full Statement",
        statement_edit: "Edit Portfolio",
        statement_funds: "Add Funds",
        statement_profit: "Approve Profits",
        statement_logout: "End Session",
        statement_unban: "Unfreeze",
        statement_ban: "Freeze (Ban)",
        statement_delete: "Clear & Cancel",
        confirm_delete: "Clear this account?",
        prompt_funds: "Add deposit to wallet",
        prompt_profit: "Distribute profit to wallet",
        force_logout_msg: "Account forced out.",
        ban_options_prompt: "Choose: 1 (Day), 2 (Week), 3 (Month), 4 (Permanent), 5 (Custom hours)",
        ban_hours_prompt: "Enter hours:",
        session_cut: "Session cut or permissions changed.",
        statement_total: "Current Approximate Balance",
        edit_success: "Data updated.",
        empty_fields: "Empty fields.",
        restricted_name: "This name is restricted.",
        mandatory_fields: "Mandatory fields were not filled!",
        add_extra_account: "Add another account...",
        owner_label: "Owner",
        user_label: "User",
        system_owner: "System Owner",
        investor_label: "Investor",
        assets_chart: "Total Assets (IQD)",
        start_trade: "Start Trading",
        stage: "Stage",
        now: "Now",
        cycle_label: "Cycle"
    }
};

let currentLang = localStorage.getItem('app_lang') || 'ar';

function t(key) {
    return TRANSLATIONS[currentLang][key] || key;
}

function updateUILanguage() {
    const isEn = currentLang === 'en';
    htmlTag.dir = isEn ? 'ltr' : 'rtl';
    htmlTag.lang = currentLang;
    
    // Update static elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.innerText = t(key);
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });

    // Update button text
    document.getElementById('lang-text').innerText = isEn ? 'العربية' : 'English';
    
    // Update document title
    document.title = isEn ? 'Al-Waseet Co. - FinTech Platform' : 'شركة الوسيط - FinTech Platform';
}

document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('app_lang', currentLang);
    updateUILanguage();
    location.reload(); // Safer to reload for complex dynamic sections
});

updateUILanguage();

themeToggleBtn.addEventListener('click', () => {
    isDark = !isDark;
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    applyTheme();

    // Update chart theme if it exists
    if (investorChartInstance && typeof renderChart === 'function') {
        const users = getSecureBrokerData();
        if (CURRENT_USER && users[CURRENT_USER] && CURRENT_USER !== ADMIN.u) {
            const data = users[CURRENT_USER];
            const diff = Date.now() - data.time;
            const periods = data.p_int > 0 ? Math.floor(diff / (data.p_int * 60 * 60 * 1000)) : 0;
            const autoP = periods * (data.p_amt || 0);
            renderChart(data.amt, data.p_amt || 0, periods, autoP + (data.manual_profit || 0));
        }
    }
});

// ----------------------------------------------------
// Core Security Layer (Anti-Tamper & Obfuscation)
// ----------------------------------------------------
const SALT = "sM@rT_bRoK3R_x99!";

// 1. Deep Sanitization (XSS Prevention)
function sanitize(input) {
    if (typeof input !== 'string') return input;
    return input.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
}

// 3. Simple Stream Cipher (Obfuscation)
function xorEncrypt(text, key) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return btoa(unescape(encodeURIComponent(result)));
}

function xorDecrypt(cipher, key) {
    try {
        let text = decodeURIComponent(escape(atob(cipher)));
        let result = '';
        for (let i = 0; i < text.length; i++) {
            result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
        }
        return result;
    } catch (e) { return null; }
}

// 4. Payload Signing
function generateSignature(jsonString) {
    let hash = 0;
    const str = jsonString + SALT;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return hash.toString(16);
}

// 5. Secure I/O Handlers
function migrateOldDataOnce() {
    let oldData = localStorage.getItem('broker_data');
    if (oldData && !oldData.startsWith('ENCRYPTED::')) {
        // Assume it's plain text JSON, encrypt it
        saveSecureBrokerData(JSON.parse(oldData));
    }
}

function getSecureBrokerData() {
    let raw = localStorage.getItem('broker_data');
    if (!raw) return {};
    if (!raw.startsWith('ENCRYPTED::')) return {}; // Invalid format

    try {
        const payload = JSON.parse(raw.replace('ENCRYPTED::', ''));
        const decryptedJson = xorDecrypt(payload.data, SALT);
        if (!decryptedJson) throw new Error("Decryption failed");

        const expectedSig = generateSignature(decryptedJson);
        if (expectedSig !== payload.sig) {
            console.warn("TAMPER DETECTED!");
            // Freeze compromised DB
            return {};
        }
        return JSON.parse(decryptedJson);
    } catch (e) {
        return {};
    }
}

function saveSecureBrokerData(dataObj, pushToCloud = true) {
    const jsonStr = JSON.stringify(dataObj);
    const encrypted = xorEncrypt(jsonStr, SALT);
    const sig = generateSignature(jsonStr);

    const payload = { data: encrypted, sig: sig };
    localStorage.setItem('broker_data', 'ENCRYPTED::' + JSON.stringify(payload));

    // تحديث قاعدة البيانات السحابية (Firebase) فوراً إن تم تفعيلها
    if (pushToCloud && typeof firebase !== 'undefined' && firebase.apps.length > 0) {
        firebase.database().ref('broker_data').set(dataObj);
    }
}

// ----------------------------------------------------
// Global Variables & Constants
// ----------------------------------------------------
const ADMIN = { u: "lightmoonowner", p: "r3bl7nsw134" };
let CURRENT_USER = null;
let MY_SESSION_TOKEN = null;
let investorChartInstance = null;

// ====================================================
// إعدادات الربط السحابي (FIREBASE CLOUD SYNC)
// ====================================================
// ضع معلومات قاعدة بياناتك المرتبطة بـ Firebase هنا مكان القيم الوهمية
const firebaseConfig = {
    apiKey: "AIzaSyCXWc0XLn2y3MG1mCRrZkliNgGJrc0dGgPg",
    authDomain: "al-oaset.firebaseapp.com",
    databaseURL: "https://al-oaset-default-rtdb.firebaseio.com",
    projectId: "al-oaset",
    storageBucket: "al-oaset.firebasestorage.app",
    messagingSenderId: "257766691014",
    appId: "1:257766691014:web:eac168ac7dc6d654b8c7c7"
};

// تفعيل المزامنة إن تم وضع المفتاح السري
if (firebaseConfig.apiKey !== "ضع_المفتاح_هنا" && typeof firebase !== 'undefined') {
    firebase.initializeApp(firebaseConfig);
    const database = firebase.database();

    // مراقبة التغييرات القادمة من الإنترنت (أجهزة أخرى)
    database.ref('broker_data').on('value', (snapshot) => {
        let cloudData = snapshot.val();
        if (cloudData) {

            // إصلاح مشكلة قراءة Firebase للأرقام التسلسلية كـ Arrays
            if (Array.isArray(cloudData)) {
                const fixedObj = {};
                for (let i = 0; i < cloudData.length; i++) {
                    if (cloudData[i] !== null && cloudData[i] !== undefined) {
                        fixedObj[String(i)] = cloudData[i];
                    }
                }
                cloudData = fixedObj;
            }
            // تحديث الذاكرة المحلية بصمت ليقرأها النظام
            const jsonStr = JSON.stringify(cloudData);
            const encrypted = xorEncrypt(jsonStr, SALT);
            const sig = generateSignature(jsonStr);
            const payload = { data: encrypted, sig: sig };
            localStorage.setItem('broker_data', 'ENCRYPTED::' + JSON.stringify(payload));

            // تحديث جدول تحكم الأدمن تلقائياً إن كان مفتوحاً
            const ownerBox = document.getElementById('owner-box');
            if (ownerBox && !ownerBox.classList.contains('hidden') && typeof displayUsersForAdmin === 'function') {
                displayUsersForAdmin();
            }
        }
    });
}
// ====================================================

// Ensure local storage structures without wiping cloud DB
if (!localStorage.getItem('broker_data')) saveSecureBrokerData({}, false);
migrateOldDataOnce();
if (!localStorage.getItem('saved_sessions')) localStorage.setItem('saved_sessions', JSON.stringify([]));

// ----------------------------------------------------
// Boot & Session Manager
// ----------------------------------------------------
window.onload = () => {
    const active = localStorage.getItem('active_session');
    const users = getSecureBrokerData();
    const saved = JSON.parse(localStorage.getItem('saved_sessions') || "[]");

    // If there is an active valid user
    if (active) {
        if (active === ADMIN.u) {
            executeLoginSetup(active);
        } else if (users[active]) {
            // check ban
            if (users[active].ban_until && users[active].ban_until > Date.now()) {
                alert(t('banned_msg'));
                localStorage.removeItem('active_session');
                location.reload();
            } else {
                executeLoginSetup(active);
            }
        } else {
            // User was deleted but session is stuck
            localStorage.removeItem('active_session');
            showInitialLoginView();
        }
    } else {
        showInitialLoginView();
    }
};

function showInitialLoginView() {
    const saved = JSON.parse(localStorage.getItem('saved_sessions') || "[]");
    const container = document.getElementById('profiles-container');
    const form = document.getElementById('login-form-container');
    const backBtn = document.getElementById('back-profiles-btn');

    // Only keep saved sessions that still exist in DB (or admin)
    const users = getSecureBrokerData();
    const validSaved = saved.filter(s => s === ADMIN.u || users[s]);
    localStorage.setItem('saved_sessions', JSON.stringify(validSaved));

    if (validSaved.length > 0) {
        container.classList.remove('hidden');
        form.classList.add('hidden');
        backBtn.classList.remove('hidden');
        renderSavedProfiles(validSaved);
    } else {
        container.classList.add('hidden');
        form.classList.remove('hidden');
        backBtn.classList.add('hidden');
    }
}

function renderSavedProfiles(list) {
    const listDiv = document.getElementById('profiles-list');
    listDiv.innerHTML = '';

    list.forEach(name => {
        let abbr = name.substring(0, 2).toUpperCase();
        let isAdmin = name === ADMIN.u;

        listDiv.innerHTML += `
            <div onclick="switchAccount('${name}')" class="flex flex-col items-center gap-3 cursor-pointer group">
                <div class="w-20 h-20 rounded-2xl flex items-center justify-center font-black text-2xl shadow-md transition-all group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]
                    ${isAdmin ? 'bg-gradient-to-tr from-orange-400 to-red-500 text-white' : 'bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)]'}">
                    ${abbr}
                </div>
                <span class="text-sm font-bold text-slate-500 group-hover:text-[var(--text-primary)] transition-colors">${name}</span>
            </div>
        `;
    });
}

function showLoginForm() {
    document.getElementById('profiles-container').classList.add('hidden');
    document.getElementById('login-form-container').classList.remove('hidden');

    // Auto focus
    setTimeout(() => { document.getElementById('log-user').focus(); }, 100);
}

function backToProfilesIfPossible() {
    document.getElementById('profiles-container').classList.remove('hidden');
    document.getElementById('login-form-container').classList.add('hidden');
}

// ----------------------------------------------------
// Authentication Handlers
// ----------------------------------------------------
function loginWithPassword() {
    const u = sanitize(document.getElementById('log-user').value.trim());
    const p = sanitize(document.getElementById('log-pass').value);

    if (!u || !p) return alert(t('invalid_data'));

    const users = getSecureBrokerData();

    if (u === ADMIN.u && p === ADMIN.p) {
        finalizeAuth(u);
    } else if (users[u] && users[u].p === p) {
        if (users[u].ban_until && users[u].ban_until > Date.now()) {
            return alert(t('banned_switch'));
        }
        finalizeAuth(u);
    } else {
        alert(t('incorrect_data'));
    }
}

// This runs on password-less quick switch
function switchAccount(name) {
    const users = getSecureBrokerData();
    if (name === ADMIN.u || users[name]) {
        if (users[name] && users[name].ban_until && users[name].ban_until > Date.now()) {
            return alert(t('banned_switch'));
        }
        finalizeAuth(name);
    }
}

function finalizeAuth(username) {
    // 1. Set active
    localStorage.setItem('active_session', username);

    // 2. Add to saved if not exists
    let saved = JSON.parse(localStorage.getItem('saved_sessions') || "[]");
    if (!saved.includes(username)) {
        saved.push(username);
        localStorage.setItem('saved_sessions', JSON.stringify(saved));
    }

    // if it's a regular user update session token
    if (username !== ADMIN.u) {
        const users = getSecureBrokerData();
        users[username].session_token = Date.now();
        saveSecureBrokerData(users);
    }

    location.reload(); // Refresh to boot cleanly into dashboard
}

function executeLoginSetup(username) {
    const users = getSecureBrokerData();
    CURRENT_USER = username;

    // Fade out login layer
    const loginPage = document.getElementById('login-page');
    loginPage.style.opacity = '0';
    setTimeout(() => {
        loginPage.style.display = 'none';
        const mainContent = document.getElementById('main-content');
        mainContent.classList.remove('hidden');
        mainContent.style.opacity = '0';
        mainContent.style.animation = 'fade-in 0.4s ease forwards';
    }, 400);

    // Build Switcher Menu
    populateAccountSwitcher();

    // Setup role logic
    let role = 'user';
    let data = null;
    let rName = username;

    if (username === ADMIN.u) {
        role = 'owner';
        MY_SESSION_TOKEN = 'omni';
    } else {
        role = users[username].role || 'user';
        MY_SESSION_TOKEN = users[username].session_token;
        data = users[username];
    }

    document.getElementById('name-tag').innerText = username;
    document.getElementById('avatar-circle').innerText = username.substring(0, 1).toUpperCase();

    if (role === 'admin' || role === 'owner') {
        document.getElementById('role-tag').innerText = role === 'owner' ? t('system_owner') : t('admin');
        document.getElementById('owner-box').classList.remove('hidden');
        document.getElementById('user-box').classList.add('hidden');
        displayUsersForAdmin(); // Load Table
    } else {
        document.getElementById('role-tag').innerText = t('investor_label');
        document.getElementById('owner-box').classList.add('hidden');
        document.getElementById('user-box').classList.remove('hidden');

        startCounter(data.amt, data.time, data.p_amt || 0, data.p_int || 0, data.manual_profit || 0);
    }
}

// ----------------------------------------------------
// UI Menus & Logout Options
// ----------------------------------------------------
function populateAccountSwitcher() {
    const listDiv = document.getElementById('active-sessions-list');
    const saved = JSON.parse(localStorage.getItem('saved_sessions') || "[]");

    listDiv.innerHTML = '';

    saved.forEach(name => {
        const isActive = name === CURRENT_USER;
        const icon = isActive ? "<i class='bx bx-check-circle text-blue-500'></i>" : "";
        const role = (name === ADMIN.u) ? t('owner_label') : t('user_label');

        listDiv.innerHTML += `
            <button onclick="${isActive ? '' : `switchAccount('${name}')`}" class="flex items-center justify-between w-full px-4 py-2 text-xs font-bold hover:bg-[var(--bg-app)] transition group ${isActive ? 'cursor-default opacity-80' : 'cursor-pointer'}">
                <div class="flex flex-col items-start gap-0.5">
                    <span class="text-[var(--text-primary)]">${name}</span>
                    <span class="text-[9px] text-slate-400 capitalize">${role}</span>
                </div>
                ${icon}
            </button>
        `;
    });

    // Add new account button
    listDiv.innerHTML += `
        <button onclick="addNewSession()" class="flex items-center gap-2 w-full mt-1 px-4 py-2.5 text-xs font-bold text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-colors border-t border-[var(--border-subtle)]">
            <i class='bx bx-plus'></i> ${t('add_extra_account')}
        </button>
    `;
}

function toggleDropdown(menuId) {
    document.querySelectorAll('.action-menu.show').forEach(menu => {
        if (menu.id !== menuId) menu.classList.remove('show');
    });
    const menu = document.getElementById(menuId);
    if (menu) menu.classList.toggle('show');
}

// Hide menus on click outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.inline-block.relative')) {
        document.querySelectorAll('.action-menu.show').forEach(menu => menu.classList.remove('show'));
    }
});

function addNewSession() {
    // Clear active so it prompts the login screen
    localStorage.removeItem('active_session');
    location.reload();
}

function logoutThisAccount() {
    // Remove from active & saved
    let saved = JSON.parse(localStorage.getItem('saved_sessions'));
    saved = saved.filter(x => x !== CURRENT_USER);
    localStorage.setItem('saved_sessions', JSON.stringify(saved));
    localStorage.removeItem('active_session');

    location.reload();
}

function logoutAllAccounts() {
    localStorage.removeItem('active_session');
    localStorage.setItem('saved_sessions', JSON.stringify([]));
    location.reload();
}


// ----------------------------------------------------
// Super Admin / Table Management
// ----------------------------------------------------
function saveAccount() {
    const u = sanitize(document.getElementById('new-u').value.trim());
    const p = sanitize(document.getElementById('new-p').value);
    const role = sanitize(document.getElementById('new-role').value);
    const amt = sanitize(document.getElementById('new-amt').value);
    const p_amt = sanitize(document.getElementById('new-profit-amt').value);
    const p_int = sanitize(document.getElementById('new-profit-interval').value);

    if (!u || !p || !amt) return alert(t('mandatory_fields'));

    const users = getSecureBrokerData();
    if (u === ADMIN.u || users[u]) return alert(t('account_exists'));

    users[u] = {
        p: p, role: role, amt: parseInt(amt), p_amt: parseInt(p_amt) || 0, p_int: parseInt(p_int) || 0,
        time: Date.now(), manual_profit: 0
    };

    saveSecureBrokerData(users);
    alert(t('wallet_created'));

    document.getElementById('add-user-form').classList.add('hidden');
    displayUsersForAdmin();
}

function displayUsersForAdmin() {
    const users = getSecureBrokerData();
    const tbody = document.getElementById('users-table-body');
    tbody.innerHTML = "";

    for (let name in users) {
        let isAdmin = users[name].role === 'admin';
        let isBanned = users[name].ban_until && users[name].ban_until > Date.now();

        // Stats
        let deposit = users[name].amt.toLocaleString();
        let manual = (users[name].manual_profit || 0).toLocaleString();
        let cycle = users[name].p_amt ? `<span class="text-xs text-blue-500 font-bold">+${users[name].p_amt} / ${users[name].p_int}h</span>` : `<span class="text-[10px] text-slate-400">${t('inactive')}</span>`;

        let rowClass = isBanned ? 'bg-red-50 dark:bg-red-900/10 opacity-75' : 'hover:bg-[var(--bg-app)]';
        let badge = isBanned
            ? `<span class="bg-red-100 text-red-600 px-2 py-0.5 text-[10px] rounded border border-red-200 ml-2 font-bold uppercase">${t('locked')}</span>`
            : (isAdmin ? `<span class="bg-orange-100 text-orange-600 px-2 py-0.5 text-[10px] rounded border border-orange-200 ml-2 font-bold uppercase">${t('admin')}</span>` : '');

        let menuHtml = `
            <div class="relative inline-block text-right">
                <button onclick="toggleDropdown('opt-${name}')" class="p-1 px-2 text-slate-400 hover:text-[var(--text-primary)] transition">
                    <i class='bx bx-dots-vertical-rounded text-lg'></i>
                </button>
                <div id="opt-${name}" class="action-menu absolute mt-2 ml-4">
                    <div class="py-1">
                        <button onclick="showAccountDetails('${name}')" class="flex items-center gap-2 px-4 py-2 text-xs text-slate-600 dark:text-slate-300 hover:bg-[var(--bg-app)] w-full text-right font-bold transition">
                            <i class='bx bx-file text-blue-500 text-lg'></i> ${t('statement_full')}
                        </button>
                    </div>
                    <div class="border-t border-[var(--border-subtle)] py-1">
                        <button onclick="openEditModal('${name}')" class="flex items-center gap-2 px-4 py-2 text-xs text-slate-600 dark:text-slate-300 hover:bg-[var(--bg-app)] w-full text-right font-bold transition">
                            <i class='bx bx-edit text-orange-400 text-lg'></i> ${t('statement_edit')}
                        </button>
                        <button onclick="addFunds('${name}')" class="flex items-center gap-2 px-4 py-2 text-xs text-slate-600 dark:text-slate-300 hover:bg-[var(--bg-app)] w-full text-right font-bold transition">
                            <i class='bx bx-wallet text-emerald-500 text-lg'></i> ${t('statement_funds')}
                        </button>
                        <button onclick="addManualProfit('${name}')" class="flex items-center gap-2 px-4 py-2 text-xs text-slate-600 dark:text-slate-300 hover:bg-[var(--bg-app)] w-full text-right font-bold transition">
                            <i class='bx bx-trending-up text-green-500 text-lg'></i> ${t('statement_profit')}
                        </button>
                    </div>
                    <div class="border-t border-[var(--border-subtle)] py-1">
                        <button onclick="forceLogout('${name}')" class="flex items-center gap-2 px-4 py-2 text-xs text-slate-600 dark:text-slate-300 hover:bg-[var(--bg-app)] w-full text-right font-bold transition">
                            <i class='bx bx-log-out text-slate-400 text-lg'></i> ${t('statement_logout')}
                        </button>
                        ${isBanned
                ? `<button onclick="unbanUser('${name}')" class="flex items-center gap-2 px-4 py-2 text-xs text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/10 w-full text-right font-bold transition">
                             <i class='bx bx-check-shield text-lg'></i> ${t('statement_unban')}
                           </button>`
                : `<button onclick="showBanOptions('${name}')" class="flex items-center gap-2 px-4 py-2 text-xs text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 w-full text-right font-bold transition">
                             <i class='bx bx-block text-lg'></i> ${t('statement_ban')}
                           </button>`}
                    </div>
                    <div class="border-t border-[var(--border-subtle)] py-1">
                        <button onclick="deleteAccount('${name}')" class="flex items-center gap-2 px-4 py-2 text-xs text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 w-full text-right font-bold transition">
                            <i class='bx bx-trash text-lg'></i> ${t('statement_delete')}
                        </button>
                    </div>
                </div>
            </div>
        `;

        tbody.innerHTML += `
            <tr class="${rowClass} transition-colors">
                <td class="px-6 py-4 font-bold max-w-[150px] truncate">
                    ${name}
                    ${badge}
                </td>
                <td class="px-6 py-4 font-bold">
                    ${deposit} <span class="text-[9px] text-slate-400">IQD</span>
                </td>
                <td class="px-6 py-4 font-bold text-emerald-500">
                    +${manual}
                </td>
                <td class="px-6 py-4 text-center">
                    ${cycle}
                </td>
                <td class="px-6 py-4 text-left">
                    ${menuHtml}
                </td>
            </tr>
        `;
    }
}

// ----------------------------------------------------
// Details Modal (كشف حساب)
// ----------------------------------------------------
function showAccountDetails(name) {
    const users = getSecureBrokerData();
    const u = users[name];
    if (!u) return;

    // Calculate total logic
    let totalAutoProfit = 0;
    if (u.p_amt && u.p_int > 0) {
        const diffOffset = Date.now() - u.time;
        const periodsCount = Math.floor(diffOffset / (u.p_int * 60 * 60 * 1000));
        totalAutoProfit = periodsCount > 0 ? (periodsCount * u.p_amt) : 0;
    }
    const currentTotal = u.amt + (u.manual_profit || 0) + totalAutoProfit;
    const isBanned = u.ban_until && u.ban_until > Date.now() ? `<span class="text-red-500">${currentLang === 'ar' ? 'نعم (مجمد)' : 'Yes (Frozen)'}</span>` : `<span class="text-emerald-500">${currentLang === 'ar' ? 'لا (فعال)' : 'No (Active)'}</span>`;

    let html = `
        <div class="flex flex-col gap-3">
            <div class="flex justify-between border-b border-[var(--border-subtle)] pb-2">
                <span class="text-slate-500 font-bold text-xs uppercase">${t('login_id')}</span>
                <span class="font-bold">${name}</span>
            </div>
            <div class="flex justify-between border-b border-[var(--border-subtle)] pb-2">
                <span class="text-slate-500 font-bold text-xs uppercase">${t('base_balance')}</span>
                <span class="font-bold text-blue-500">${u.amt.toLocaleString()} ${t('currency')}</span>
            </div>
            <div class="flex justify-between border-b border-[var(--border-subtle)] pb-2">
                <span class="text-slate-500 font-bold text-xs uppercase">${t('dist_profit')}</span>
                <span class="font-bold text-emerald-500">+${(u.manual_profit || 0).toLocaleString()} ${t('currency')}</span>
            </div>
            <div class="flex justify-between border-b border-[var(--border-subtle)] pb-2">
                <span class="text-slate-500 font-bold text-xs uppercase">${t('iv_yield')}</span>
                <span class="font-bold text-emerald-600">+${totalAutoProfit.toLocaleString()} ${t('currency')}</span>
            </div>
            <div class="flex justify-between border-b border-[var(--border-subtle)] pb-2">
                <span class="text-slate-500 font-bold text-xs uppercase">${currentLang === 'ar' ? 'الصلاحية' : 'Role'}</span>
                <span class="font-bold">${u.role === 'admin' ? t('admin_panel') : t('investor_normal')}</span>
            </div>
            <div class="flex justify-between border-b border-[var(--border-subtle)] pb-2">
                <span class="text-slate-500 font-bold text-xs uppercase">${currentLang === 'ar' ? 'حالة العقوبات' : 'Penalty Status'}</span>
                <span class="font-bold">${isBanned}</span>
            </div>
            
            <div class="mt-2 bg-[var(--bg-app)] p-3 rounded-lg border border-[var(--border-subtle)] text-center">
                <p class="text-[10px] uppercase font-bold text-slate-400 mb-1">${t('statement_total')}</p>
                <div class="text-2xl font-black">${currentTotal.toLocaleString()} <span class="text-sm">${t('currency')}</span></div>
            </div>
        </div>
    `;

    document.getElementById('details-body').innerHTML = html;

    const modal = document.getElementById('details-modal');
    const content = document.getElementById('details-modal-content');

    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        content.classList.remove('scale-95');
    }, 10);

    // hide menus
    document.querySelectorAll('.action-menu').forEach(m => m.classList.remove('show'));
}

function closeDetailsModal() {
    const modal = document.getElementById('details-modal');
    const content = document.getElementById('details-modal-content');
    modal.classList.add('opacity-0');
    content.classList.add('scale-95');
    setTimeout(() => { modal.classList.add('hidden'); }, 300);
}

// ----------------------------------------------------
// Admin Data Triggers
// ----------------------------------------------------
// (Same as before but with slightly different dialogs)
function deleteAccount(n) { if (confirm(t('confirm_delete'))) { const u = getSecureBrokerData(); delete u[n]; saveSecureBrokerData(u); displayUsersForAdmin(); } }
function addFunds(n) { const a = prompt(`${t('prompt_funds')} ${n}:`); if (a && !isNaN(a)) { const u = getSecureBrokerData(); u[n].amt += parseInt(a); saveSecureBrokerData(u); displayUsersForAdmin(); } }
function addManualProfit(n) { const a = prompt(`${t('prompt_profit')} ${n}:`); if (a && !isNaN(a)) { const u = getSecureBrokerData(); u[n].manual_profit = (u[n].manual_profit || 0) + parseInt(a); saveSecureBrokerData(u); displayUsersForAdmin(); } }
function forceLogout(n) { const u = getSecureBrokerData(); u[n].session_token = Date.now(); saveSecureBrokerData(u); alert(t('force_logout_msg')); }
function showBanOptions(n) {
    const c = prompt(t('ban_options_prompt'));
    if (!c) return;
    let h = 0;
    if (c === '1') h = 24; else if (c === '2') h = 168; else if (c === '3') h = 720; else if (c === '4') h = 876000; else if (c === '5') { h = parseInt(prompt(t('ban_hours_prompt'))); if (!h) return; } else return;
    const u = getSecureBrokerData();
    u[n].ban_until = Date.now() + (h * 60 * 60 * 1000); u[n].session_token = Date.now();
    saveSecureBrokerData(u); displayUsersForAdmin();
}
function unbanUser(n) { const u = getSecureBrokerData(); delete u[n].ban_until; saveSecureBrokerData(u); displayUsersForAdmin(); }

// ----------------------------------------------------
// Edit Modal Overrides
// ----------------------------------------------------
function openEditModal(name) {
    const users = getSecureBrokerData();
    if (!users[name]) return;

    document.getElementById('edit-old-u').value = name;
    document.getElementById('edit-u').value = name;
    document.getElementById('edit-p').value = users[name].p;
    document.getElementById('edit-role').value = users[name].role || 'user';
    document.getElementById('edit-amt').value = users[name].amt;
    document.getElementById('edit-profit-amt').value = users[name].p_amt || 0;
    document.getElementById('edit-profit-interval').value = users[name].p_int || 0;

    const modal = document.getElementById('edit-user-modal');
    const content = document.getElementById('edit-modal-content');

    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        content.classList.remove('scale-95');
    }, 10);
    document.querySelectorAll('.action-menu.show').forEach(m => m.classList.remove('show'));
}

function closeEditModal() {
    const modal = document.getElementById('edit-user-modal');
    const content = document.getElementById('edit-modal-content');
    modal.classList.add('opacity-0');
    content.classList.add('scale-95');
    setTimeout(() => modal.classList.add('hidden'), 300);
}

function saveEditAccount() {
    const users = getSecureBrokerData();
    const oldName = sanitize(document.getElementById('edit-old-u').value);
    const newName = sanitize(document.getElementById('edit-u').value.trim());
    const newP = sanitize(document.getElementById('edit-p').value);
    const newRole = sanitize(document.getElementById('edit-role').value);
    const newAmt = sanitize(document.getElementById('edit-amt').value);
    const newPamt = sanitize(document.getElementById('edit-profit-amt').value);
    const newPint = sanitize(document.getElementById('edit-profit-interval').value);

    if (!newName || !newP || !newAmt) return alert(t('empty_fields'));
    if (newName === ADMIN.u) return alert(t('restricted_name'));
    if (newName !== oldName && users[newName]) return alert(t('account_exists'));

    const updatedData = {
        ...users[oldName],
        p: newP,
        role: newRole,
        amt: parseInt(newAmt),
        p_amt: parseInt(newPamt) || 0,
        p_int: parseInt(newPint) || 0,
        session_token: Date.now()
    };

    if (newName !== oldName) {
        users[newName] = updatedData;
        delete users[oldName];

        // Update saved sessions if needed
        let saved = JSON.parse(localStorage.getItem('saved_sessions'));
        if (saved.includes(oldName)) {
            saved[saved.indexOf(oldName)] = newName;
            localStorage.setItem('saved_sessions', JSON.stringify(saved));
        }
    } else {
        users[newName] = updatedData;
    }

    saveSecureBrokerData(users);
    alert(t('edit_success'));
    closeEditModal();
    displayUsersForAdmin();
}

// ----------------------------------------------------
// User Engine (Auto Profit Counter)
// ----------------------------------------------------
function startCounter(initial, startTime, profitAmount, profitIntervalHours, manualProfit = 0) {
    function update() {
        if (CURRENT_USER && CURRENT_USER !== ADMIN.u) {
            const users = getSecureBrokerData();
            const me = users[CURRENT_USER];
            if (!me || me.session_token !== MY_SESSION_TOKEN || (me.ban_until && me.ban_until > Date.now())) {
                alert(t('session_cut'));
                // Remove out-of-sync session
                localStorage.removeItem('active_session');
                location.reload();
                return;
            }
        }

        if (!profitAmount || !profitIntervalHours || profitIntervalHours <= 0) {
            document.getElementById('balance-txt').innerHTML = `${(initial + manualProfit).toLocaleString()} <span class="text-xl text-slate-500 font-bold">IQD</span>`;
            document.getElementById('profit-txt').innerHTML = `${manualProfit.toLocaleString()} <span class="text-xl text-slate-500 font-bold">IQD</span>`;
            if (typeof renderChart === 'function') {
                renderChart(initial, 0, 0, manualProfit);
            }
            return;
        }

        const diff = Date.now() - startTime;
        const intervalInMs = profitIntervalHours * 60 * 60 * 1000;
        const periods = Math.floor(diff / intervalInMs);

        const autoProfit = periods * profitAmount;
        let finalTotalProfit = (autoProfit > 0 ? autoProfit : 0) + manualProfit;

        document.getElementById('balance-txt').innerHTML = `${(initial + finalTotalProfit).toLocaleString()} <span class="text-xl text-slate-500 font-bold">IQD</span>`;
        document.getElementById('profit-txt').innerHTML = `${finalTotalProfit.toLocaleString()} <span class="text-xl text-slate-500 font-bold">IQD</span>`;

        renderChart(initial, profitAmount, periods, finalTotalProfit);
    }

    update();
    setInterval(update, 60000);
}

// ----------------------------------------------------
// Chart.js Visualization Engine
// ----------------------------------------------------
function renderChart(initialDeposit, profitPerPeriod, elapsedPeriods, totalProfitNow) {
    const ctx = document.getElementById('investorChart');
    if (!ctx) return;

    // Simulate last 6 periods for a nice visual curve
    let labels = [];
    let dataPoints = [];

    const cycleT = t('cycle_label');
    let simulatedPastPeriods = Math.max(0, elapsedPeriods - 6);
    for (let i = simulatedPastPeriods; i <= elapsedPeriods; i++) {
        labels.push(i === elapsedPeriods ? t('now') : `${cycleT} ${i}`);
        let pointProfit = (profitPerPeriod * i);
        dataPoints.push(initialDeposit + (pointProfit > 0 ? pointProfit : 0));
    }

    // If no past data, just show a flat line of current situation to prevent Chart API compression
    if (elapsedPeriods === 0 && !profitPerPeriod) {
        labels = [t('start_trade'), `${t('stage')} 1`, `${t('stage')} 2`, `${t('stage')} 3`, t('now')];
        dataPoints = [initialDeposit, initialDeposit, initialDeposit, initialDeposit, initialDeposit + totalProfitNow];
    }

    const isDarkMode = document.documentElement.classList.contains('dark');
    const gridColor = isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';
    const textColor = isDarkMode ? '#a1a1aa' : '#71717a';
    const primaryA = isDarkMode ? 'rgba(96, 165, 250, 1)' : 'rgba(59, 130, 246, 1)'; // blue-400 / blue-500
    const primaryBg = isDarkMode ? 'rgba(96, 165, 250, 0.2)' : 'rgba(59, 130, 246, 0.2)';

    // Update existing chart if already rendered
    if (investorChartInstance) {
        investorChartInstance.data.labels = labels;
        investorChartInstance.data.datasets[0].data = dataPoints;
        investorChartInstance.options.scales.x.grid.color = gridColor;
        investorChartInstance.options.scales.y.grid.color = gridColor;
        investorChartInstance.options.scales.x.ticks.color = textColor;
        investorChartInstance.options.scales.y.ticks.color = textColor;
        investorChartInstance.data.datasets[0].borderColor = primaryA;
        investorChartInstance.data.datasets[0].backgroundColor = primaryBg;
        investorChartInstance.update();
        return;
    }

    // Create new chart
    investorChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: t('assets_chart'),
                data: dataPoints,
                borderColor: primaryA,
                backgroundColor: primaryBg,
                borderWidth: 3,
                pointBackgroundColor: primaryA,
                pointBorderColor: isDarkMode ? '#0B0E14' : '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 5,
                pointHoverRadius: 7,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    rtl: true,
                    titleFont: { family: 'Cairo', size: 13 },
                    bodyFont: { family: 'Cairo', size: 14, weight: 'bold' },
                    padding: 12,
                    displayColors: false,
                    backgroundColor: isDarkMode ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.9)',
                    titleColor: isDarkMode ? '#e4e4e7' : '#52525b',
                    bodyColor: primaryA,
                    borderColor: gridColor,
                    borderWidth: 1
                }
            },
            scales: {
                x: {
                    grid: { color: gridColor, drawBorder: false },
                    ticks: { color: textColor, font: { family: 'Cairo' } }
                },
                y: {
                    grid: { color: gridColor, drawBorder: false },
                    ticks: {
                        color: textColor,
                        font: { family: 'Cairo' },
                        callback: function (val) { return val.toLocaleString(); }
                    },
                    beginAtZero: false
                }
            },
            interaction: {
                intersect: false,
                mode: 'index',
            },
        }
    });
}
