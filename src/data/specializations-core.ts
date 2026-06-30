export interface Condition {
  en: string;
  ml: string;
}

export interface OurCoreCategory {
  id: number;
  title: string;
  mlTitle: string;
  slug: string;
  description: string;
  image: string; // Placeholder path for your Next.js Image component
  conditions: Condition[];
}

export const ourCoreData: OurCoreCategory[] = [
  {
    id: 1,
    title: "Orthopaedic Diseases",
    mlTitle: "സന്ധിരോഗങ്ങൾ",
    slug: "orthopaedic-diseases",
    description:
      "Ayurvedic management and therapies for joint, bone, and muscular disorders, focusing on pain relief and restoring mobility.",
    image: "/images/orthopaedic.jpg",
    conditions: [
      { en: "Joint Pain", ml: "സന്ധി വേദന" },
      { en: "Knee Joint Pain", ml: "കാൽ മുട്ടു വേദന" },
      { en: "Degenerative Disease", ml: "തേയ്‌മാനം" },
      { en: "Disc Prolapse / IVDP", ml: "ഡിസ്ക് പ്രൊലാപ്‌സ്" },
      { en: "Back Pain", ml: "നടു വേദന" },
      { en: "Neck Pain / Cervical Spondylosis", ml: "കഴുത്തു വേദന" },
      { en: "Calcaneal Spur", ml: "ഉപ്പൂറ്റി, മടമ്പ് വേദന" },
      { en: "Arthritis", ml: "വാതരോഗം / സന്ധിവാതം / രക്തവാദം / ആമവാതം" },
    ],
  },
  {
    id: 2,
    title: "Gastrointestinal Diseases",
    mlTitle: "ഉദരോഗങ്ങൾ, ഗുദരോഗങ്ങൾ",
    slug: "gastrointestinal-diseases",
    description:
      "Holistic treatments to correct digestive imbalances, improve gut health, and treat chronic gastrointestinal issues naturally.",
    image: "/images/gastrointestinal.jpg",
    conditions: [
      { en: "Acidity", ml: "അസിഡിറ്റി" },
      { en: "Stomach Bloating", ml: "വയറുവീർപ്പ്" },
      { en: "Constipation", ml: "മലബന്ധം" },
      { en: "Piles", ml: "പൈൽസ്" },
      { en: "Fistula", ml: "ഫിസ്റ്റുല" },
      { en: "Loss of Appetite", ml: "വിശപ്പില്ലായ്‌മ" },
      { en: "Indigestion", ml: "ദഹനക്കുറവ്" },
      { en: "Fisher", ml: "ഫിഷർ" },
    ],
  },
  {
    id: 3,
    title: "Life Style Diseases",
    mlTitle: "ജീവിതശൈലി രോഗങ്ങൾ",
    slug: "lifestyle-diseases",
    description:
      "Comprehensive lifestyle and dietary interventions alongside authentic Ayurvedic therapies to manage metabolic and stress-related conditions.",
    image: "/images/lifestyle.jpg",
    conditions: [
      { en: "Diabetes", ml: "പ്രമേഹം" },
      { en: "Blood Pressure", ml: "രക്തസമ്മർദ്ദം" },
      { en: "Cholesterol", ml: "കൊളസ്‌ട്രോൾ" },
      { en: "Obesity", ml: "അമിതവണ്ണം" },
      { en: "Mental Stress", ml: "മാനസിക സമ്മർദ്ദം" },
      { en: "Insomnia", ml: "ഉറക്കമില്ലായ്‌മ" },
    ],
  },
  {
    id: 4,
    title: "Urological Diseases",
    mlTitle: "മൂത്രാശയരോഗങ്ങൾ",
    slug: "urological-diseases",
    description:
      "Natural remedies and specific therapies to support kidney function and treat urinary tract disorders.",
    image: "/images/urological.jpg",
    conditions: [
      { en: "Urinary Incontinence", ml: "മൂത്രം പിടിച്ചു വെയ്ക്കാൻ കഴിയായിക" },
      { en: "Urinary Stone", ml: "മൂത്രക്കല്ല്" },
      { en: "Kidney Stone", ml: "കിഡ്‌നി സ്റ്റോൺ" },
    ],
  },
  {
    id: 5,
    title: "Neurological Diseases",
    mlTitle: "നാഡീരോഗങ്ങൾ",
    slug: "neurological-diseases",
    description:
      "Specialized Panchakarma treatments aimed at strengthening the nervous system and supporting rehabilitation for neurological conditions.",
    image: "/images/neurological.jpg",
    conditions: [
      { en: "Paralysis", ml: "പക്ഷാഘാതം" },
      { en: "Facial Palsy", ml: "ഫേഷ്യൽ പാൽസി" },
      { en: "Parkinsonism", ml: "പാർക്കിൻസൺസ് രോഗം" },
      { en: "Sciatica", ml: "സയാറ്റിക്ക" },
    ],
  },
  {
    id: 6,
    title: "Skin Diseases",
    mlTitle: "ചർമ്മ രോഗങ്ങൾ",
    slug: "skin-diseases",
    description:
      "Blood purification therapies and herbal applications to treat chronic skin conditions and restore a healthy complexion.",
    image: "/images/skin.jpg",
    conditions: [
      { en: "Psoriasis", ml: "സോറിയാസിസ്" },
      { en: "Dandruff", ml: "താരൻ" },
      { en: "Fungal Infection", ml: "ഫംഗസ് ബാധ" },
      { en: "Karappan", ml: "കരപ്പൻ" },
      { en: "Eczema", ml: "എക്സീമ" },
      { en: "Pimples", ml: "മുഖക്കുരു" },
      { en: "Vitiligo", ml: "വെള്ളപ്പാണ്ട്" },
    ],
  },
  {
    id: 7,
    title: "Gynecological Diseases",
    mlTitle: "സ്ത്രീരോഗങ്ങൾ",
    slug: "gynecological-diseases",
    description:
      "Safe and effective Ayurvedic approaches for women's reproductive health, hormonal balance, and menstrual disorders.",
    image: "/images/gynecological.jpg",
    conditions: [
      { en: "Uterine Ovarian Tumors", ml: "ഗർഭാശയ അണ്ഡാശയ മുഴകൾ" },
      { en: "Menstrual Disorders", ml: "ആർത്തവക്രമക്കേടുകൾ" },
      { en: "White Discharge", ml: "അസ്ഥി ഉരുക്കം" },
    ],
  },
  {
    id: 8,
    title: "Respiratory Diseases",
    mlTitle: "ശ്വാസകോശ രോഗങ്ങൾ",
    slug: "respiratory-diseases",
    description:
      "Therapies to clear respiratory channels, boost immunity, and provide long-term relief from chronic breathing issues.",
    image: "/images/respiratory.jpg",
    conditions: [
      { en: "Chronic Cough", ml: "വിട്ടുമാറാത്ത ചുമ" },
      { en: "Cold", ml: "ജലദോഷം" },
      { en: "Asthma", ml: "ആസ്ത്മ" },
    ],
  },
  {
    id: 9,
    title: "Eye Diseases",
    mlTitle: "നേത്രരോഗം",
    slug: "eye-diseases",
    description:
      "Traditional Ayurvedic eye care treatments to improve vision clarity and treat strain and infections.",
    image: "/images/eye.jpg",
    conditions: [],
  },
  {
    id: 10,
    title: "ENT Diseases",
    mlTitle: "ഇ എൻ ടി രോഗങ്ങൾ",
    slug: "ent-diseases",
    description:
      "Specialized care focusing on ailments related to the ear, nose, and throat using natural herbal formulations.",
    image: "/images/ent.jpg",
    conditions: [],
  },
];
