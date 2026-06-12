const WHATSAPP_NUMBER = "REPLACE_WITH_YOUR_WHATSAPP_NUMBER";

const SUPPORTED_LANGUAGES = ["en", "fr", "ar"];

const translations = {
  en: {
    meta: {
      title: "Bayan Academy | Learn English with Confidence",
      description:
        "Bayan Academy helps students improve English with a free trial session, a level check, and a clear learning direction before chatting on WhatsApp.",
    },
    skipLink: "Skip to main content",
    brand: {
      name: "Bayan Academy",
    },
    nav: {
      sessions: "Sessions",
      freeSession: "Trial session",
      questionnaire: "Questionnaire",
      start: "Start",
    },
    aria: {
      mainNav: "Main navigation",
      home: "Bayan Academy home",
      languageModal: "Language selection",
      pageSections: "Page sections",
      siteLanguage: "Website language",
      sessionOptions: "Session options",
      freeSessionDetails: "Trial session details",
      pathChooser: "Grammar focus options",
      learningFocus: "Learning focus",
      sessionType: "Session type",
    },
    language: {
      title: "Choose your language",
      copy:
        "Select the language you prefer, then the full website will open in that language.",
    },
    hero: {
      imageAlt: "Notebook and laptop prepared for an online English lesson",
      eyebrow: "Your English journey starts here",
      title:
        "Speak English with clarity, comfort, and confidence.",
      copy:
        "Bayan Academy helps you understand English, use it naturally, and feel ready for real conversations. Start with a free trial session so your level is clear before your learning plan begins.",
      cta: "Start questionnaire",
    },
    programs: {
      eyebrow: "Choose your learning style",
      title:
        "Pick the environment where you learn best.",
      group: {
        title: "Group Sessions",
        copy:
          "Learn in an active space where you practise, ask questions, and improve with other motivated students.",
      },
      vip: {
        title: "VIP Specialized Sessions",
        copy:
          "Learn with personal attention, direct correction, and lessons adapted to your current level.",
      },
    },
    freeSession: {
      eyebrow: "Trial session",
      title: "Start with a free trial session.",
      copy:
        "The first trial session is free. It helps us test your English level, understand what you need, and guide you toward the right next step.",
      cta: "Ask for the trial session",
      points: {
        level: "Free trial session",
        recommendation: "Student level check",
        nextStep: "Personal recommendation",
      },
    },
    chooser: {
      eyebrow: "Choose your focus",
      title: "What do you want to strengthen first?",
      grammar: {
        title: "Grammar",
        copy:
          "Choose this if you want clearer rules, better sentence structure, and fewer mistakes.",
      },
      grammarVocabulary: {
        title: "Grammar + Vocabulary",
        copy:
          "Choose this if you want stronger grammar and more words to express yourself.",
      },
    },
    steps: {
      eyebrow: "Your first steps",
      title: "From confusion to a clearer English plan.",
      profile: {
        title: "Test your level",
        copy:
          "The trial session shows what you already know and where you need support.",
      },
      recommend: {
        title: "Find your focus",
        copy:
          "We decide whether grammar alone or grammar with vocabulary is the best start.",
      },
      start: {
        title: "Begin with confidence",
        copy:
          "You begin with a clear direction and lessons that match your English level.",
      },
    },
    form: {
      eyebrow: "Student profile",
      title: "Tell me what you want to improve.",
      contact: {
        legend: "Contact information",
        fullName: "Full name",
        phone: "WhatsApp number",
        email: "Email address",
        location: "Country or city",
      },
      session: {
        legend: "Session type",
        groupTitle: "Group sessions",
        groupCopy:
          "Learn in a shared space with guidance, practice, and support.",
        vipTitle: "VIP specialized sessions",
        vipCopy: "Learn privately with direct correction and personal attention.",
      },
      freeCheck: {
        legend: "Trial session",
        title: "I want the trial session first",
        copy:
          "The trial session is free and helps us test your level before you begin.",
      },
      focus: {
        legend: "Learning focus",
      },
      level: {
        label: "Current level",
        placeholder: "Select your level",
      },
      availability: {
        label: "Preferred time",
        placeholder: "Select availability",
      },
      goal: {
        label: "Main goal",
        placeholder:
          "Example: I want to speak more confidently at work and improve my grammar.",
      },
      consent:
        "I agree to send this information on WhatsApp so we can discuss the best plan privately.",
      noPrices:
        "No public prices. Details are discussed after your learning profile is reviewed.",
      submit: "Send on WhatsApp",
    },
    websiteLanguages: {
      en: "English",
      fr: "French",
      ar: "Arabic",
    },
    sessionTypes: {
      group: "Group sessions",
      vip: "VIP specialized sessions",
    },
    focus: {
      grammar: "Grammar",
      grammarVocabulary: "Grammar + Vocabulary",
    },
    levels: {
      beginner: "Beginner",
      elementary: "Elementary",
      intermediate: "Intermediate",
      upperIntermediate: "Upper intermediate",
      advanced: "Advanced",
      notSure: "Not sure",
    },
    availability: {
      morning: "Morning",
      afternoon: "Afternoon",
      evening: "Evening",
      weekend: "Weekend",
      flexible: "Flexible",
    },
    validation: {
      focusRequired: "Choose one learning focus.",
      whatsappMissing:
        "WhatsApp is ready, but the teacher number still needs to be configured.",
      opening: "Opening WhatsApp with your learning profile.",
      presetApplied:
        "I selected that focus in the questionnaire. You can adjust it below.",
      freeCheckApplied:
        "The trial session is selected in the questionnaire.",
    },
    message: {
      intro: "Hello, I would like to join your English program.",
      websiteLanguage: "Website language",
      name: "Name",
      phone: "Student WhatsApp",
      email: "Email",
      location: "Location",
      sessionType: "Session type",
      freeLevelCheck: "Trial session first",
      learningFocus: "Learning focus",
      currentLevel: "Current level",
      preferredTime: "Preferred time",
      mainGoal: "Main goal",
      yes: "Yes",
      no: "No",
      notProvided: "Not provided",
    },
  },
  fr: {
    meta: {
      title: "Bayan Academy | Apprendre l'anglais avec confiance",
      description:
        "Bayan Academy aide les étudiants à progresser en anglais avec une session d'essai gratuite, un test de niveau et une direction claire avant l'échange sur WhatsApp.",
    },
    skipLink: "Aller au contenu principal",
    brand: {
      name: "Bayan Academy",
    },
    nav: {
      sessions: "Sessions",
      freeSession: "Session d'essai",
      questionnaire: "Questionnaire",
      start: "Commencer",
    },
    aria: {
      mainNav: "Navigation principale",
      home: "Accueil Bayan Academy",
      languageModal: "Choix de la langue",
      pageSections: "Sections de la page",
      siteLanguage: "Langue du site",
      sessionOptions: "Options de sessions",
      freeSessionDetails: "Détails de la session d'essai",
      pathChooser: "Options de grammaire",
      learningFocus: "Objectif d'apprentissage",
      sessionType: "Type de session",
    },
    language: {
      title: "Choisissez votre langue",
      copy:
        "Sélectionnez la langue que vous préférez, puis le site complet s'ouvrira dans cette langue.",
    },
    hero: {
      imageAlt:
        "Cahier et ordinateur préparés pour une leçon d'anglais en ligne",
      eyebrow: "Votre parcours en anglais commence ici",
      title:
        "Parlez anglais avec clarté, aisance et confiance.",
      copy:
        "Bayan Academy vous aide à comprendre l'anglais, à l'utiliser naturellement et à vous sentir prêt pour de vraies conversations. Commencez par une session d'essai gratuite afin que votre niveau soit clair avant de commencer votre plan.",
      cta: "Commencer le questionnaire",
    },
    programs: {
      eyebrow: "Choisissez votre style d'apprentissage",
      title:
        "Choisissez l'environnement dans lequel vous apprenez le mieux.",
      group: {
        title: "Sessions de groupe",
        copy:
          "Apprenez dans un espace actif où vous pratiquez, posez des questions et progressez avec d'autres étudiants motivés.",
      },
      vip: {
        title: "Sessions VIP spécialisées",
        copy:
          "Apprenez avec une attention personnelle, des corrections directes et des leçons adaptées à votre niveau actuel.",
      },
    },
    freeSession: {
      eyebrow: "Session d'essai",
      title: "Commencez par une session d'essai gratuite.",
      copy:
        "La première session d'essai est gratuite. Elle permet de tester votre niveau d'anglais, de comprendre vos besoins et de vous guider vers la bonne étape.",
      cta: "Demander la session d'essai",
      points: {
        level: "Session d'essai gratuite",
        recommendation: "Test du niveau de l'étudiant",
        nextStep: "Recommandation personnalisée",
      },
    },
    chooser: {
      eyebrow: "Choisissez votre priorité",
      title: "Que voulez-vous renforcer en premier ?",
      grammar: {
        title: "Grammaire",
        copy:
          "Choisissez ceci si vous voulez des règles plus claires, de meilleures phrases et moins d'erreurs.",
      },
      grammarVocabulary: {
        title: "Grammaire + vocabulaire",
        copy:
          "Choisissez ceci si vous voulez une grammaire plus solide et plus de mots pour vous exprimer.",
      },
    },
    steps: {
      eyebrow: "Vos premiers pas",
      title: "De la confusion à un plan d'anglais plus clair.",
      profile: {
        title: "Testez votre niveau",
        copy:
          "La session d'essai montre ce que vous connaissez déjà et ce qui doit être renforcé.",
      },
      recommend: {
        title: "Trouvez votre priorité",
        copy:
          "Nous décidons si la grammaire seule ou la grammaire avec le vocabulaire est le meilleur départ.",
      },
      start: {
        title: "Commencez avec confiance",
        copy:
          "Vous commencez avec une direction claire et des leçons adaptées à votre niveau.",
      },
    },
    form: {
      eyebrow: "Profil étudiant",
      title: "Dites-moi ce que vous voulez améliorer.",
      contact: {
        legend: "Informations de contact",
        fullName: "Nom complet",
        phone: "Numéro WhatsApp",
        email: "Adresse e-mail",
        location: "Pays ou ville",
      },
      session: {
        legend: "Type de session",
        groupTitle: "Sessions de groupe",
        groupCopy:
          "Apprenez dans un espace partagé avec guidance, pratique et soutien.",
        vipTitle: "Sessions VIP spécialisées",
        vipCopy:
          "Apprenez en privé avec des corrections directes et une attention personnelle.",
      },
      freeCheck: {
        legend: "Session d'essai",
        title: "Je veux d'abord la session d'essai",
        copy:
          "La session d'essai est gratuite et permet de tester votre niveau avant de commencer.",
      },
      focus: {
        legend: "Objectif d'apprentissage",
      },
      level: {
        label: "Niveau actuel",
        placeholder: "Sélectionnez votre niveau",
      },
      availability: {
        label: "Moment préféré",
        placeholder: "Sélectionnez votre disponibilité",
      },
      goal: {
        label: "Objectif principal",
        placeholder:
          "Exemple : je veux parler avec plus de confiance au travail et améliorer ma grammaire.",
      },
      consent:
        "J'accepte d'envoyer ces informations sur WhatsApp afin que nous puissions discuter du meilleur plan en privé.",
      noPrices:
        "Aucun prix public. Les détails sont discutés après l'étude de votre profil.",
      submit: "Envoyer sur WhatsApp",
    },
    websiteLanguages: {
      en: "Anglais",
      fr: "Français",
      ar: "Arabe",
    },
    sessionTypes: {
      group: "Sessions de groupe",
      vip: "Sessions VIP spécialisées",
    },
    focus: {
      grammar: "Grammaire",
      grammarVocabulary: "Grammaire + vocabulaire",
    },
    levels: {
      beginner: "Débutant",
      elementary: "Élémentaire",
      intermediate: "Intermédiaire",
      upperIntermediate: "Intermédiaire avancé",
      advanced: "Avancé",
      notSure: "Je ne sais pas",
    },
    availability: {
      morning: "Matin",
      afternoon: "Après-midi",
      evening: "Soir",
      weekend: "Week-end",
      flexible: "Flexible",
    },
    validation: {
      focusRequired: "Choisissez un objectif d'apprentissage.",
      whatsappMissing:
        "WhatsApp est prêt, mais le numéro de l'enseignant doit encore être configuré.",
      opening: "Ouverture de WhatsApp avec votre profil.",
      presetApplied:
        "J'ai sélectionné cet objectif dans le questionnaire. Vous pouvez l'ajuster ci-dessous.",
      freeCheckApplied: "La session d'essai est sélectionnée dans le questionnaire.",
    },
    message: {
      intro: "Bonjour, je souhaite rejoindre votre programme d'anglais.",
      websiteLanguage: "Langue du site",
      name: "Nom",
      phone: "WhatsApp de l'étudiant",
      email: "E-mail",
      location: "Localisation",
      sessionType: "Type de session",
      freeLevelCheck: "Session d'essai d'abord",
      learningFocus: "Objectif d'apprentissage",
      currentLevel: "Niveau actuel",
      preferredTime: "Moment préféré",
      mainGoal: "Objectif principal",
      yes: "Oui",
      no: "Non",
      notProvided: "Non indiqué",
    },
  },
  ar: {
    meta: {
      title: "Bayan Academy | تعلم الإنجليزية بثقة",
      description:
        "تساعد Bayan Academy الطلاب على تطوير الإنجليزية عبر حصة تجريبية مجانية، اختبار مستوى، واتجاه تعليمي واضح قبل التواصل عبر واتساب.",
    },
    skipLink: "انتقل إلى المحتوى الرئيسي",
    brand: {
      name: "Bayan Academy",
    },
    nav: {
      sessions: "الحصص",
      freeSession: "حصة تجريبية",
      questionnaire: "الاستمارة",
      start: "ابدأ",
    },
    aria: {
      mainNav: "التنقل الرئيسي",
      home: "الصفحة الرئيسية Bayan Academy",
      languageModal: "اختيار اللغة",
      pageSections: "أقسام الصفحة",
      siteLanguage: "لغة الموقع",
      sessionOptions: "خيارات الحصص",
      freeSessionDetails: "تفاصيل الحصة التجريبية",
      pathChooser: "خيارات التركيز على القواعد",
      learningFocus: "هدف التعلم",
      sessionType: "نوع الحصة",
    },
    language: {
      title: "اختر لغتك",
      copy:
        "اختر اللغة التي تفضلها، وبعد ذلك سيظهر الموقع كاملا بهذه اللغة.",
    },
    hero: {
      imageAlt: "دفتر وحاسوب جاهزان لحصة إنجليزية عبر الإنترنت",
      eyebrow: "رحلتك في الإنجليزية تبدأ هنا",
      title: "تحدث الإنجليزية بوضوح وراحة وثقة.",
      copy:
        "تساعدك Bayan Academy على فهم الإنجليزية، استعمالها بشكل طبيعي، والاستعداد لمحادثات حقيقية. ابدأ بحصة تجريبية مجانية حتى نعرف مستواك قبل بداية خطتك التعليمية.",
      cta: "ابدأ الاستمارة",
    },
    programs: {
      eyebrow: "اختر أسلوب التعلم المناسب لك",
      title: "اختر البيئة التي تتعلم فيها بشكل أفضل.",
      group: {
        title: "حصص جماعية",
        copy:
          "تعلم في مساحة نشيطة للتدرب، طرح الأسئلة، والتقدم مع طلاب متحمسين.",
      },
      vip: {
        title: "حصص VIP متخصصة",
        copy:
          "تعلم باهتمام شخصي، تصحيح مباشر، ودروس مناسبة لمستواك الحالي.",
      },
    },
    freeSession: {
      eyebrow: "حصة تجريبية",
      title: "ابدأ بحصة تجريبية مجانية.",
      copy:
        "الحصة التجريبية الأولى مجانية. تساعدنا على اختبار مستواك في الإنجليزية، فهم احتياجك، وتوجيهك نحو الخطوة المناسبة.",
      cta: "اطلب الحصة التجريبية",
      points: {
        level: "حصة تجريبية مجانية",
        recommendation: "اختبار مستوى الطالب",
        nextStep: "اقتراح شخصي",
      },
    },
    chooser: {
      eyebrow: "اختر أولويتك",
      title: "ماذا تريد أن تقوي أولا؟",
      grammar: {
        title: "القواعد",
        copy: "اختر هذا إذا أردت قواعد أوضح، جملا أفضل، وأخطاء أقل.",
      },
      grammarVocabulary: {
        title: "القواعد والمفردات",
        copy:
          "اختر هذا إذا أردت قواعد أقوى وكلمات أكثر للتعبير عن نفسك.",
      },
    },
    steps: {
      eyebrow: "خطواتك الأولى",
      title: "من الحيرة إلى خطة إنجليزية أوضح.",
      profile: {
        title: "اختبر مستواك",
        copy: "الحصة التجريبية توضح ما تعرفه وما تحتاج إلى تقويته.",
      },
      recommend: {
        title: "حدد أولويتك",
        copy:
          "نحدد هل البداية الأفضل هي القواعد فقط أو القواعد مع المفردات.",
      },
      start: {
        title: "ابدأ بثقة",
        copy: "تبدأ باتجاه واضح ودروس مناسبة لمستواك في الإنجليزية.",
      },
    },
    form: {
      eyebrow: "ملف الطالب",
      title: "أخبرني بما تريد تحسينه.",
      contact: {
        legend: "معلومات التواصل",
        fullName: "الاسم الكامل",
        phone: "رقم واتساب",
        email: "البريد الإلكتروني",
        location: "البلد أو المدينة",
      },
      session: {
        legend: "نوع الحصة",
        groupTitle: "حصص جماعية",
        groupCopy: "تعلم في مساحة مشتركة فيها توجيه، تدريب، ودعم.",
        vipTitle: "حصص VIP متخصصة",
        vipCopy: "تعلم بشكل خاص مع تصحيح مباشر واهتمام شخصي.",
      },
      freeCheck: {
        legend: "حصة تجريبية",
        title: "أريد الحصة التجريبية أولا",
        copy:
          "الحصة التجريبية مجانية وتساعدنا على اختبار مستواك قبل البداية.",
      },
      focus: {
        legend: "هدف التعلم",
      },
      level: {
        label: "المستوى الحالي",
        placeholder: "اختر مستواك",
      },
      availability: {
        label: "الوقت المفضل",
        placeholder: "اختر وقتك المناسب",
      },
      goal: {
        label: "الهدف الرئيسي",
        placeholder:
          "مثال: أريد أن أتحدث بثقة أكبر في العمل وأن أحسن القواعد.",
      },
      consent:
        "أوافق على إرسال هذه المعلومات عبر واتساب حتى نناقش أفضل خطة بشكل خاص.",
      noPrices:
        "لا توجد أسعار منشورة. تتم مناقشة التفاصيل بعد مراجعة ملفك التعليمي.",
      submit: "أرسل عبر واتساب",
    },
    websiteLanguages: {
      en: "الإنجليزية",
      fr: "الفرنسية",
      ar: "العربية",
    },
    sessionTypes: {
      group: "حصص جماعية",
      vip: "حصص VIP متخصصة",
    },
    focus: {
      grammar: "القواعد",
      grammarVocabulary: "القواعد والمفردات",
    },
    levels: {
      beginner: "مبتدئ",
      elementary: "أساسي",
      intermediate: "متوسط",
      upperIntermediate: "متوسط متقدم",
      advanced: "متقدم",
      notSure: "لست متأكدا",
    },
    availability: {
      morning: "الصباح",
      afternoon: "بعد الظهر",
      evening: "المساء",
      weekend: "نهاية الأسبوع",
      flexible: "مرن",
    },
    validation: {
      focusRequired: "اختر هدف تعلم واحدا.",
      whatsappMissing:
        "واتساب جاهز، لكن رقم الأستاذة لم يتم إعداده بعد.",
      opening: "يتم فتح واتساب مع ملفك التعليمي.",
      presetApplied:
        "تم اختيار هذا التركيز في الاستمارة. يمكنك تعديله بالأسفل.",
      freeCheckApplied: "تم اختيار الحصة التجريبية في الاستمارة.",
    },
    message: {
      intro: "مرحبا، أريد الانضمام إلى برنامج الإنجليزية.",
      websiteLanguage: "لغة الموقع",
      name: "الاسم",
      phone: "واتساب الطالب",
      email: "البريد الإلكتروني",
      location: "الموقع",
      sessionType: "نوع الحصة",
      freeLevelCheck: "الحصة التجريبية أولا",
      learningFocus: "هدف التعلم",
      currentLevel: "المستوى الحالي",
      preferredTime: "الوقت المفضل",
      mainGoal: "الهدف الرئيسي",
      yes: "نعم",
      no: "لا",
      notProvided: "غير مذكور",
    },
  },
};

const valueGroups = {
  websiteLanguage: "websiteLanguages",
  sessionType: "sessionTypes",
  focus: "focus",
  level: "levels",
  availability: "availability",
};

const form = document.querySelector("#intakeForm");
const focusError = document.querySelector("#focusError");
const formStatus = document.querySelector("#formStatus");
const chooserStatus = document.querySelector("#chooserStatus");
const languageModal = document.querySelector("#languageModal");
const selectableControls = document.querySelectorAll(
  ".choice-card input, .choice-pill input"
);
const languageButtons = document.querySelectorAll("[data-language]");
const presetButtons = document.querySelectorAll("[data-preset]");
const freeCheckTriggers = document.querySelectorAll("[data-free-check-trigger]");

const savedLanguage = getSavedLanguage();
let currentLanguage = savedLanguage || "en";

const presetMap = {
  grammar: {
    focus: ["grammar"],
  },
  grammarVocabulary: {
    focus: ["grammarVocabulary"],
  },
};

function getSavedLanguage() {
  try {
    const savedLanguage = localStorage.getItem("siteLanguage");
    return SUPPORTED_LANGUAGES.includes(savedLanguage) ? savedLanguage : null;
  } catch {
    return null;
  }
}

function saveLanguage(language) {
  try {
    localStorage.setItem("siteLanguage", language);
  } catch {
    // The site still works if browser storage is unavailable.
  }
}

function t(path, fallback = path) {
  return path.split(".").reduce((value, key) => value?.[key], translations[currentLanguage]) ?? fallback;
}

function showLanguageModal() {
  if (!languageModal) {
    return;
  }

  languageModal.hidden = false;
  document.body.classList.add("language-modal-open");

  const activeButton =
    languageModal.querySelector(`[data-language="${currentLanguage}"]`) ||
    languageModal.querySelector("[data-language]");
  activeButton?.focus();
}

function hideLanguageModal() {
  if (!languageModal) {
    return;
  }

  languageModal.hidden = true;
  document.body.classList.remove("language-modal-open");
}

function applyLanguage(language, options = {}) {
  const { persist = true, closeModal = true } = options;
  currentLanguage = SUPPORTED_LANGUAGES.includes(language) ? language : "en";
  const isArabic = currentLanguage === "ar";

  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = isArabic ? "rtl" : "ltr";
  document.title = t("meta.title");
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", t("meta.description"));

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n, element.textContent);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute(
      "placeholder",
      t(element.dataset.i18nPlaceholder, element.getAttribute("placeholder") || "")
    );
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute(
      "aria-label",
      t(element.dataset.i18nAriaLabel, element.getAttribute("aria-label") || "")
    );
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.setAttribute("alt", t(element.dataset.i18nAlt, element.getAttribute("alt") || ""));
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  focusError.textContent = "";
  formStatus.textContent = "";
  chooserStatus.textContent = "";

  if (persist) {
    saveLanguage(currentLanguage);
  }

  if (closeModal) {
    hideLanguageModal();
  }
}

function refreshChoiceStates() {
  selectableControls.forEach((control) => {
    control.closest("label").classList.toggle("is-selected", control.checked);
  });
}

function getCheckedValues(name) {
  return Array.from(form.querySelectorAll(`input[name="${name}"]:checked`)).map(
    (input) => input.value
  );
}

function getFormValue(formData, key, fallback = t("message.notProvided")) {
  const value = String(formData.get(key) || "").trim();
  return value || fallback;
}

function getValueLabel(group, value) {
  const translationGroup = valueGroups[group];
  return translationGroup ? t(`${translationGroup}.${value}`, value) : value;
}

function setRadioValue(name, value) {
  const control = form.querySelector(`input[name="${name}"][value="${value}"]`);
  if (control) {
    control.checked = true;
  }
}

function setCheckboxValue(name, value, checked) {
  const control = form.querySelector(`input[name="${name}"][value="${value}"]`);
  if (control) {
    control.checked = checked;
  }
}

function setFocusValues(values) {
  form.querySelectorAll('input[name="focus"]').forEach((control) => {
    control.checked = values.includes(control.value);
  });
}

function scrollToQuestionnaire() {
  document.querySelector("#questionnaire")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function applyPreset(presetName) {
  const preset = presetMap[presetName];
  if (!preset) {
    return;
  }

  if (preset.sessionType) {
    setRadioValue("sessionType", preset.sessionType);
  }
  setFocusValues(preset.focus);
  refreshChoiceStates();
  chooserStatus.textContent = t("validation.presetApplied");
  scrollToQuestionnaire();
}

function applyFreeCheck() {
  setCheckboxValue("freeLevelCheck", "yes", true);
  refreshChoiceStates();
  chooserStatus.textContent = t("validation.freeCheckApplied");
  scrollToQuestionnaire();
}

function buildMessage(formData) {
  const focusAreas = getCheckedValues("focus")
    .map((value) => getValueLabel("focus", value))
    .join(", ");
  const wantsFreeCheck = formData.get("freeLevelCheck") === "yes";

  return [
    t("message.intro"),
    "",
    `${t("message.websiteLanguage")}: ${getValueLabel("websiteLanguage", currentLanguage)}`,
    `${t("message.name")}: ${getFormValue(formData, "fullName")}`,
    `${t("message.phone")}: ${getFormValue(formData, "studentPhone")}`,
    `${t("message.email")}: ${getFormValue(formData, "email")}`,
    `${t("message.location")}: ${getFormValue(formData, "location")}`,
    `${t("message.sessionType")}: ${getValueLabel("sessionType", getFormValue(formData, "sessionType"))}`,
    `${t("message.freeLevelCheck")}: ${wantsFreeCheck ? t("message.yes") : t("message.no")}`,
    `${t("message.learningFocus")}: ${focusAreas}`,
    `${t("message.currentLevel")}: ${getValueLabel("level", getFormValue(formData, "level"))}`,
    `${t("message.preferredTime")}: ${getValueLabel("availability", getFormValue(formData, "availability"))}`,
    "",
    `${t("message.mainGoal")}: ${getFormValue(formData, "goal")}`,
  ].join("\n");
}

function isWhatsappConfigured() {
  return /^\d{8,15}$/.test(WHATSAPP_NUMBER);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.language, {
      closeModal: true,
      persist: true,
    });
  });
});

presetButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyPreset(button.dataset.preset);
  });
});

freeCheckTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    applyFreeCheck();
  });
});

selectableControls.forEach((control) => {
  control.addEventListener("change", refreshChoiceStates);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  focusError.textContent = "";
  formStatus.textContent = "";

  const focusAreas = getCheckedValues("focus");
  if (!focusAreas.length) {
    focusError.textContent = t("validation.focusRequired");
    form.querySelector('input[name="focus"]').focus();
    return;
  }

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  if (!isWhatsappConfigured()) {
    formStatus.textContent = t("validation.whatsappMissing");
    return;
  }

  const formData = new FormData(form);
  const message = buildMessage(formData);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  formStatus.textContent = t("validation.opening");
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});

applyLanguage(currentLanguage, {
  closeModal: Boolean(savedLanguage),
  persist: false,
});

if (!savedLanguage) {
  showLanguageModal();
}

refreshChoiceStates();
