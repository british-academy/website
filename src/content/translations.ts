export const languages = {
  en: "English",
  fr: "Français",
  ar: "العربية",
}

export const locales = ["en", "fr", "ar"]

export const direction = {
  en: "ltr",
  fr: "ltr",
  ar: "rtl",
}

export const defaultLocale = "en"

export const arabicToLatinMap = {
  ا: "a",
  ب: "b",
  ت: "t",
  ث: "th",
  ج: "j",
  ح: "h",
  خ: "kh",
  د: "d",
  ذ: "dh",
  ر: "r",
  ز: "z",
  س: "s",
  ش: "sh",
  ص: "s",
  ض: "d",
  ط: "t",
  ظ: "z",
  ع: "a",
  غ: "gh",
  ف: "f",
  ق: "q",
  ك: "k",
  ل: "l",
  م: "m",
  ن: "n",
  ه: "h",
  و: "w",
  ي: "y",
}

export const translations = {
  en: {
    "head.rss_feed": "RSS Feed",
    "hero.featured_on": "Featured on",
    "logo.alt": "Logo of the British Language Academy",
    "logo.text": "British Academy",
    "navbar.toggle.sr_only": "Open main menu",
    "themetoggle.sr_only": "Change color scheme",
    "video.unsupported": "Your browser does not support the video tag.",
  },

  fr: {
    "head.rss_feed": "Flux RSS",
    "hero.featured_on": "À l'honneur",
    "logo.alt": "Logo de l'académie des langues birmanes",
    "logo.text": "British Academy",
    "navbar.about": "À propos",
    "navbar.home": "Accueil",
    "navbar.toggle.sr_only": "Ouvrir le menu principal",
    "themetoggle.sr_only": "Modifier la palette de couleurs",
    "video.unsupported": "Votre navigateur ne prend pas en charge la balise vidéo.",
  },

  ar: {
    "head.rss_feed": "موجز RSS",
    "hero.featured_on": "تم التكريم في",
    "logo.alt": "شعار أكاديمية بيرتيش للغات",
    "logo.text": "الأكاديمية البريطانية",
    "navbar.about": "نبذة عنا",
    "navbar.home": "الرئيسية",
    "navbar.toggle.sr_only": "فتح القائمة الرئيسية",
    "themetoggle.sr_only": "تغيير نظام الألوان",
    "video.unsupported": "متصفحك لا يدعم علامة الفيديو.",
  },
} as const
