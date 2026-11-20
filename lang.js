const translations = {
  ru: {
    title: "Спасательный Live-дистрибутив в оперативной памяти",
    subtitle: "На базе свежей Fedora. Загружается целиком в RAM, работает без флешки и заряжен инструментами для ремонта ПК, дисков и смартфонов.",
    std_desc: "Полная версия для любого современного и старого железа. Включает проприетарные драйверы и linux-firmware (Wi-Fi, GPU, NVMe) для мгновенного запуска из коробки.",
    libre_desc: "Редакция без проприетарных блобов и несвободной прошивки. Создана для сторонников философии GNU и максимально чистого свободного софта.",
    dl_std: "Скачать ISO (v0.1 Alpha)",
    dl_libre: "Скачать Libre ISO (v0.1 Alpha)"
  },
  uk: {
    title: "Рятівний Live-дистрибутив в оперативній пам'яті",
    subtitle: "На базі свіжої Fedora. Завантажується цілком у RAM, працює без флешки та заряджений інструментами для ремонту ПК, дисків і смартфонів.",
    std_desc: "Повна версія для будь-якого сучасного та старого заліза. Включає пропрієтарні драйвери та linux-firmware (Wi-Fi, GPU, NVMe) для миттєвого запуску з коробки.",
    libre_desc: "Редакція без пропрієтарних блобів та невільних прошивок. Створена для прихильників філософії GNU та максимально чистого вільного софту.",
    dl_std: "Завантажити ISO (v0.1 Alpha)",
    dl_libre: "Завантажити Libre ISO (v0.1 Alpha)"
  },
  en: {
    title: "RAM-Loaded Rescue Live Distribution",
    subtitle: "Based on fresh Fedora. Boots entirely into RAM, runs without a USB stick, and comes packed with tools for PC, disk, and smartphone recovery.",
    std_desc: "Full edition for any modern or legacy hardware. Includes proprietary drivers and linux-firmware (Wi-Fi, GPU, NVMe) to work straight out of the box.",
    libre_desc: "Edition stripped of proprietary blobs and non-free firmware. Built for GNU philosophy supporters seeking 100% free software.",
    dl_std: "Download ISO (v0.1 Alpha)",
    dl_libre: "Download Libre ISO (v0.1 Alpha)"
  }
};

function setLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
  document.querySelectorAll(".lang-switch button").forEach(btn => btn.classList.remove("active"));
  document.getElementById("btn-" + lang).classList.add("active");
  localStorage.setItem("sd_lang", lang);
}

const saved = localStorage.getItem("sd_lang") || "uk";
setLang(saved);
