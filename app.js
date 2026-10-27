/* =========================================================
   SAS PROJECTS & TECH SOLUTIONS — APPLICATION CONTROLLER
   Founders: Sanket Bhende & Sakshi Patil
   ========================================================= */

let portalTheme = localStorage.getItem("sas_projects_theme") || localStorage.getItem("ss_projects_theme") || "light";
let portalUpiQr = null;
let personalStandQr = null;
let activeFounderForDrawer = "sanket";

document.addEventListener("DOMContentLoaded", () => {
  applyTheme(portalTheme);
  renderServices();
  renderPortfolio();
  initLucide();
  initAntiInspect();
  initAdPopup();
});

function initLucide() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// ---------------------------------------------------------
// Theme Management (Minimalist Studio Light vs Dark Mode)
// ---------------------------------------------------------
function applyTheme(theme) {
  portalTheme = theme;
  const body = document.body;
  const btnIcon = document.getElementById("theme-btn-icon");
  const btnText = document.getElementById("theme-btn-text");

  if (theme === "dark") {
    body.classList.remove("theme-light");
    body.classList.add("theme-dark");
    if (btnIcon) btnIcon.innerText = "☀️";
    if (btnText) btnText.innerText = "Light Mode";
  } else {
    body.classList.remove("theme-dark");
    body.classList.add("theme-light");
    if (btnIcon) btnIcon.innerText = "🌙";
    if (btnText) btnText.innerText = "Dark Mode";
  }
}

function togglePortalTheme() {
  const nextTheme = portalTheme === "light" ? "dark" : "light";
  localStorage.setItem("sas_projects_theme", nextTheme);
  applyTheme(nextTheme);
}

// ---------------------------------------------------------
// Render Services & Portfolio
// ---------------------------------------------------------
function renderServices() {
  const container = document.getElementById("services-container");
  if (!container) return;

  container.innerHTML = SERVICES_DATA.map(s => `
    <div class="portal-card p-3.5 rounded-2xl interactive-tap flex items-start gap-3.5">
      <div class="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
        <i data-lucide="${s.icon}" class="w-5 h-5"></i>
      </div>
      <div class="flex-1 min-w-0">
        <div class="flex items-center justify-between gap-2">
          <h4 class="font-bold text-xs text-primary-text">${s.title}</h4>
          <span class="text-[9px] font-bold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 uppercase tracking-wider">${s.badge}</span>
        </div>
        <p class="text-[11px] text-secondary-text mt-1 leading-relaxed">${s.desc}</p>
      </div>
    </div>
  `).join("");
}

function renderPortfolio() {
  const container = document.getElementById("portfolio-container");
  if (!container) return;

  container.innerHTML = PORTFOLIO_PROJECTS.map(p => `
    <div class="portal-card rounded-3xl overflow-hidden interactive-tap group">
      <div class="h-36 w-full overflow-hidden relative bg-slate-800">
        <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
        <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex items-end p-3 justify-between">
          <span class="text-[10px] font-extrabold uppercase tracking-wider text-white bg-blue-600/90 px-2 py-0.5 rounded-md">
            ${p.category}
          </span>
          <span class="text-[9px] font-mono text-emerald-300 bg-black/60 px-2 py-0.5 rounded-md backdrop-blur-sm">
            ${p.stats || "Cloudflare Live"}
          </span>
        </div>
      </div>
      <div class="p-3.5 space-y-2">
        <h4 class="font-bold text-sm text-primary-text">${p.title}</h4>
        <p class="text-[11px] text-secondary-text leading-relaxed">${p.description}</p>
        
        <div class="flex flex-wrap gap-1.5 pt-1">
          ${p.tags.map(t => `<span class="text-[10px] font-medium portal-pill px-2 py-0.5 rounded-md">${t}</span>`).join("")}
        </div>

        <div class="flex gap-2 pt-2">
          <button onclick="openLiveEmbed('${p.id}')" class="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 active:scale-95 text-white font-bold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-md shadow-blue-500/20">
            <i data-lucide="play" class="w-3.5 h-3.5 fill-current"></i>
            <span>Interactive Preview</span>
          </button>
          <a href="${p.liveUrl}" target="_blank" class="portal-pill hover:bg-slate-200 dark:hover:bg-white/10 font-bold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1 transition-colors">
            <span>Direct</span>
            <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
          </a>
        </div>
      </div>
    </div>
  `).join("");
}

// ---------------------------------------------------------
// Founder Action Drawer Controller
// ---------------------------------------------------------
function openFounderDrawer(founderId) {
  activeFounderForDrawer = founderId;
  const isSanket = founderId === "sanket";
  
  const nameEl = document.getElementById("drawer-founder-name");
  const roleEl = document.getElementById("drawer-founder-role");
  const imgEl = document.getElementById("drawer-founder-img");
  const phoneDisplayEl = document.getElementById("drawer-phone-display");
  const whatsappBtn = document.getElementById("drawer-whatsapp-btn");
  const callBtn = document.getElementById("drawer-call-btn");
  const vcardBtn = document.getElementById("drawer-vcard-btn");
  const copyBtn = document.getElementById("drawer-copy-btn");
  const copyText = document.getElementById("drawer-copy-text");

  if (imgEl) {
    imgEl.src = isSanket ? "assets/sanket_bhende.jpeg" : "assets/sakshi_patil.jpg";
    imgEl.alt = isSanket ? "Sanket Bhende" : "Sakshi Patil";
  }

  if (isSanket) {
    nameEl.innerHTML = `Sanket Bhende <span class="bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold text-[9px] px-1.5 py-0.5 rounded uppercase ml-1">Founder</span>`;
    roleEl.innerText = "Founder & Web Architect • SAS Projects & Tech Solutions";
    phoneDisplayEl.innerText = "+91 98227 25265";
    whatsappBtn.href = "https://wa.me/919822725265?text=Hi%20Sanket,%20I%20visited%20SAS%20Projects%20and%20Tech%20Solutions%20portal%20and%20would%20like%20to%20discuss%20a%20project";
    callBtn.href = "tel:+919822725265";
  } else {
    nameEl.innerHTML = `Sakshi Patil <span class="bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold text-[9px] px-1.5 py-0.5 rounded uppercase ml-1">Co-Founder</span>`;
    roleEl.innerText = "Co-Founder & Tech Specialist • SAS Projects & Tech Solutions";
    phoneDisplayEl.innerText = "+91 95794 53006";
    whatsappBtn.href = "https://wa.me/919579453006?text=Hi%20Sakshi,%20I%20visited%20SAS%20Projects%20and%20Tech%20Solutions%20portal%20and%20would%20like%20to%20discuss%20a%20project";
    callBtn.href = "tel:+919579453006";
  }

  vcardBtn.onclick = () => downloadFounderVCard(founderId);
  copyBtn.onclick = () => copyFounderPhone(founderId);
  if (copyText) copyText.innerText = "Copy Phone Number";

  openSheet("founder-drawer");
  initLucide();
}

function closeFounderDrawer() {
  closeSheet("founder-drawer");
}

function copyFounderPhone(founderId) {
  const number = founderId === "sakshi" ? "9579453006" : "9822725265";
  const name = founderId === "sakshi" ? "Sakshi's" : "Sanket's";
  navigator.clipboard.writeText(number).then(() => {
    const copyText = document.getElementById("drawer-copy-text");
    const copyCheck = document.getElementById("drawer-copy-check");
    if (copyText) copyText.innerText = "Number Copied!";
    if (copyCheck) copyCheck.classList.remove("opacity-0");
    showPortalToast(`${name} number (+91 ${number}) copied!`);
    setTimeout(() => {
      if (copyText) copyText.innerText = "Copy Phone Number";
      if (copyCheck) copyCheck.classList.add("opacity-0");
    }, 2000);
  });
}

// ---------------------------------------------------------
// 1-Tap Save Founder Contact to Phone (.vcf vCard Generator)
// ---------------------------------------------------------
function downloadFounderVCard(founderId) {
  let vcard = "";
  let filename = "";

  if (founderId === "sanket") {
    vcard = 
`BEGIN:VCARD
VERSION:3.0
N:Bhende;Sanket;;;
FN:Sanket Bhende
ORG:SAS Projects & Tech Solutions
TITLE:Founder & Web Architect
TEL;TYPE=CELL,VOICE;TYPE=pref:+919822725265
EMAIL;TYPE=INTERNET,PREF:sanketbhende0@gmail.com
URL:https://sanket-portfolio-211.pages.dev/
X-SOCIALPROFILE;type=linkedin:https://www.linkedin.com/in/mrsankya/
X-SOCIALPROFILE;type=instagram:https://www.instagram.com/sankya.ai
ADR;TYPE=WORK:;;Maharashtra;;;India
NOTE:Founder at SAS Projects & Tech Solutions. High-Conversion 3D Websites, Smart QR Systems & Modern Tech Solutions.
END:VCARD`;
    filename = "Sanket_Bhende_SAS_Projects.vcf";
  } else {
    vcard = 
`BEGIN:VCARD
VERSION:3.0
N:Patil;Sakshi;;;
FN:Sakshi Patil
ORG:SAS Projects & Tech Solutions
TITLE:Co-Founder & Tech Specialist
TEL;TYPE=CELL,VOICE;TYPE=pref:+919579453006
URL:https://www.linkedin.com/in/sakshipatil-cse
X-SOCIALPROFILE;type=linkedin:https://www.linkedin.com/in/sakshipatil-cse
ADR;TYPE=WORK:;;Maharashtra;;;India
NOTE:Co-Founder at SAS Projects & Tech Solutions. Computer Science Engineering & Software Architecture.
END:VCARD`;
    filename = "Sakshi_Patil_SAS_Projects.vcf";
  }

  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  if (window.confetti) {
    window.confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.3 }
    });
  }

  showPortalToast(`Saved contact for ${founderId === 'sanket' ? 'Sanket Bhende' : 'Sakshi Patil'}!`);
}

// ---------------------------------------------------------
// UPI Payment Generator & Drawer
// ---------------------------------------------------------
function openPaymentDrawer() {
  openSheet("payment-modal");
  updatePortalUpiQR();
}

function closePaymentDrawer() {
  closeSheet("payment-modal");
}

function setAmount(val) {
  document.getElementById("portal-amount-input").value = val;
  updatePortalUpiQR();
}

function updatePortalUpiQR() {
  const upiId = PORTAL_CONFIG.upiId;
  const name = PORTAL_CONFIG.upiName;
  const amountVal = document.getElementById("portal-amount-input").value;
  const amount = parseFloat(amountVal) || 0;

  let upiString = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(name)}&cu=INR`;
  if (amount > 0) {
    upiString += `&am=${amount.toFixed(2)}`;
  }

  const container = document.getElementById("portal-upi-qrcode");
  if (!container) return;
  container.innerHTML = "";

  portalUpiQr = new QRCode(container, {
    text: upiString,
    width: 170,
    height: 170,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.M
  });

  const intentLink = document.getElementById("portal-upi-intent-link");
  if (intentLink) {
    intentLink.href = upiString;
  }
}

function copyUpiId() {
  navigator.clipboard.writeText(PORTAL_CONFIG.upiId).then(() => {
    const label = document.getElementById("copy-upi-label");
    if (label) label.innerText = "Copied!";
    showPortalToast("UPI ID copied to clipboard!");
    setTimeout(() => {
      if (label) label.innerText = "Copy";
    }, 2000);
  });
}

// ---------------------------------------------------------
// SAS Projects & Tech Solutions Digital QR Card Generator
// ---------------------------------------------------------
function openPersonalQrModal() {
  const portalUrl = PORTAL_CONFIG.livePortalUrl || window.location.href;
  const container = document.getElementById("personal-qrcode-container");
  if (!container) return;
  container.innerHTML = "";
  personalStandQr = new QRCode(container, {
    text: portalUrl,
    width: 160,
    height: 160,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
  openSheet("personal-qr-modal");
}

function closePersonalQrModal() {
  closeSheet("personal-qr-modal");
}

function copyPortalLink() {
  const portalUrl = PORTAL_CONFIG.livePortalUrl || window.location.href;
  navigator.clipboard.writeText(portalUrl).then(() => {
    const copyText = document.getElementById("copy-portal-text");
    if (copyText) copyText.innerText = "Link Copied!";
    showPortalToast("SAS Projects & Tech Solutions portal link copied!");
    setTimeout(() => {
      if (copyText) copyText.innerText = "Copy Link";
    }, 2000);
  });
}

function openShareModal() {
  const portalUrl = PORTAL_CONFIG.livePortalUrl || window.location.href;
  if (navigator.share) {
    navigator.share({
      title: "SAS Projects & Tech Solutions — Founders Portal & Smart QR",
      text: "Connect with Sanket Bhende & Sakshi Patil • SAS Projects & Tech Solutions 3D Web & Digital Agency",
      url: portalUrl
    }).catch(() => {});
  } else {
    copyPortalLink();
  }
}

// ---------------------------------------------------------
// Popup Ad Banner Modal (SAS Projects & Tech Solutions)
// Always shows every time the website is opened or refreshed
// ---------------------------------------------------------
function initAdPopup() {
  // Always open ad modal and lock scroll on every page load/refresh
  openAdPopup();

  // Also handle bfcache / back-forward restore or re-navigation
  window.addEventListener("pageshow", () => {
    openAdPopup();
  });

  // Close ad modal when Escape key is pressed
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAdPopup();
    }
  });
}

function openAdPopup() {
  const modal = document.getElementById("ad-popup-modal");
  if (!modal) return;
  modal.classList.remove("hidden-ad");
  document.body.style.overflow = "hidden";
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function closeAdPopup() {
  const modal = document.getElementById("ad-popup-modal");
  if (!modal) return;
  modal.classList.add("hidden-ad");
  document.body.style.overflow = "";
}

// ---------------------------------------------------------
// Sheet Helpers & Toast
// ---------------------------------------------------------
function openSheet(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.remove("hidden-sheet");
    document.body.style.overflow = "hidden";
  }
}

function closeSheet(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.add("hidden-sheet");
    document.body.style.overflow = "";
  }
}

document.querySelectorAll(".sheet-overlay").forEach(overlay => {
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.add("hidden-sheet");
      document.body.style.overflow = "";
    }
  });
});

let toastTimer = null;
function showPortalToast(msg) {
  const toast = document.getElementById("portal-toast");
  const msgEl = document.getElementById("portal-toast-msg");
  if (!toast || !msgEl) return;

  msgEl.innerText = msg;
  toast.classList.remove("opacity-0", "pointer-events-none", "-translate-y-2");
  toast.classList.add("opacity-100", "translate-y-0");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("opacity-100", "translate-y-0");
    toast.classList.add("opacity-0", "pointer-events-none", "-translate-y-2");
  }, 2200);
}

// ---------------------------------------------------------
// All Works Directory (10 Cloudflare Sites)
// ---------------------------------------------------------
let currentWorksFilter = "all";

function openAllWorksModal() {
  renderAllWorks(currentWorksFilter);
  openSheet("all-works-modal");
  initLucide();
}

function closeAllWorksModal() {
  closeSheet("all-works-modal");
}

function filterAllWorks(category) {
  currentWorksFilter = category;
  document.querySelectorAll(".filter-pill").forEach(btn => {
    if (btn.getAttribute("data-category") === category) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
  renderAllWorks(category);
}

function renderAllWorks(filterCategory) {
  const container = document.getElementById("all-works-list");
  if (!container) return;

  const filtered = filterCategory === "all"
    ? ALL_PROJECTS_DATA
    : ALL_PROJECTS_DATA.filter(p => p.category === filterCategory);

  container.innerHTML = filtered.map(p => `
    <div class="portal-card p-3 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all">
      <div class="flex items-center gap-3 min-w-0">
        <div class="w-14 h-14 rounded-xl overflow-hidden bg-slate-800 flex-shrink-0 relative">
          <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover">
        </div>
        <div class="min-w-0">
          <div class="flex items-center gap-1.5 flex-wrap">
            <h4 class="font-bold text-xs text-primary-text truncate">${p.title}</h4>
            <span class="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400">
              ${p.stats || p.category}
            </span>
          </div>
          <p class="text-[10px] text-secondary-text mt-0.5 line-clamp-1">${p.description}</p>
          <div class="flex items-center gap-1 mt-1">
            ${p.tags.slice(0, 3).map(t => `<span class="text-[9px] portal-pill px-1.5 py-0.2 rounded font-medium">${t}</span>`).join("")}
          </div>
        </div>
      </div>

      <div class="flex items-center gap-2 w-full sm:w-auto flex-shrink-0 pt-1 sm:pt-0">
        <button onclick="openLiveEmbed('${p.id}')" class="flex-1 sm:flex-none bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all">
          <i data-lucide="play" class="w-3 h-3 fill-current"></i>
          <span>Live Preview</span>
        </button>
        <a href="${p.liveUrl}" target="_blank" class="portal-pill hover:bg-slate-200 dark:hover:bg-white/10 font-bold text-xs py-2 px-3 rounded-xl flex items-center justify-center gap-1 transition-colors">
          <span>Open</span>
          <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
        </a>
      </div>
    </div>
  `).join("");

  initLucide();
}

// ---------------------------------------------------------
// Live Interactive Embed Simulator Viewer
// ---------------------------------------------------------
let currentEmbedProject = null;

function openLiveEmbed(projectId) {
  const project = ALL_PROJECTS_DATA.find(p => p.id === projectId);
  if (!project) return;

  currentEmbedProject = project;

  const modal = document.getElementById("live-embed-modal");
  const titleEl = document.getElementById("embed-title");
  const domainEl = document.getElementById("embed-domain");
  const iframe = document.getElementById("embed-iframe");
  const loader = document.getElementById("embed-loader");

  if (titleEl) titleEl.innerText = project.title;
  if (domainEl) domainEl.innerText = project.liveUrl;
  if (loader) loader.classList.remove("opacity-0", "pointer-events-none");

  // Load live site
  if (iframe) {
    iframe.src = project.liveUrl;
  }

  // Open modal
  if (modal) {
    modal.classList.remove("hidden-sheet");
    document.body.style.overflow = "hidden";
  }

  initLucide();
}

function closeLiveEmbed() {
  const modal = document.getElementById("live-embed-modal");
  const iframe = document.getElementById("embed-iframe");

  if (iframe) {
    iframe.src = "about:blank"; // stop background process
  }

  if (modal) {
    modal.classList.add("hidden-sheet");
    document.body.style.overflow = "";
  }
}

function hideEmbedLoader() {
  const loader = document.getElementById("embed-loader");
  if (loader) {
    loader.classList.add("opacity-0", "pointer-events-none");
  }
}

function setEmbedDevice(mode) {
  const container = document.getElementById("embed-device-container");
  const btnMobile = document.getElementById("btn-device-mobile");
  const btnDesktop = document.getElementById("btn-device-desktop");

  if (!container) return;

  if (mode === "desktop") {
    container.classList.remove("device-frame-mobile");
    container.classList.add("device-frame-desktop");
    if (btnDesktop) {
      btnDesktop.classList.add("bg-blue-600", "text-white");
      btnDesktop.classList.remove("hover:text-white");
    }
    if (btnMobile) {
      btnMobile.classList.remove("bg-blue-600", "text-white");
      btnMobile.classList.add("hover:text-white");
    }
  } else {
    container.classList.remove("device-frame-desktop");
    container.classList.add("device-frame-mobile");
    if (btnMobile) {
      btnMobile.classList.add("bg-blue-600", "text-white");
      btnMobile.classList.remove("hover:text-white");
    }
    if (btnDesktop) {
      btnDesktop.classList.remove("bg-blue-600", "text-white");
      btnDesktop.classList.add("hover:text-white");
    }
  }
}

function refreshEmbedIframe() {
  const iframe = document.getElementById("embed-iframe");
  const loader = document.getElementById("embed-loader");
  if (loader) loader.classList.remove("opacity-0", "pointer-events-none");
  if (iframe && currentEmbedProject) {
    iframe.src = currentEmbedProject.liveUrl;
  }
}

function openEmbedInNewTab() {
  if (currentEmbedProject && currentEmbedProject.liveUrl) {
    window.open(currentEmbedProject.liveUrl, "_blank");
  }
}

// ---------------------------------------------------------
// Anti-Inspect & DevTools Lock
// ---------------------------------------------------------
function initAntiInspect() {
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    return false;
  }, { capture: true });

  document.addEventListener("keydown", (e) => {
    if (e.key === "F12" || e.keyCode === 123) {
      e.preventDefault();
      return false;
    }
    const isCtrl = e.ctrlKey || e.metaKey;
    const isShift = e.shiftKey;
    const k = (e.key || "").toLowerCase();

    if (isCtrl && isShift && (k === "i" || k === "j" || k === "c")) {
      e.preventDefault();
      return false;
    }
    if (isCtrl && (k === "u" || k === "s")) {
      e.preventDefault();
      return false;
    }
  }, { capture: true });

  setInterval(() => {
    if (window.console && window.console.clear) {
      // Periodic log suppression
    }
  }, 2000);
}
