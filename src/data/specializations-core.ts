export interface Condition {
  en: string;
  ml: string;
  image?: string; // Added optional image property
}

export interface OurCoreCategory {
  id: number;
  title: string;
  mlTitle: string;
  slug: string;
  description: string;
  image: string;
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
    image: "/images/core/orthopediac-deseases.png",
    conditions: [
      {
        en: "Joint Pain",
        ml: "സന്ധി വേദന",
        image: "/images/core/Orthopaedic/joint-pain.png",
      },
      {
        en: "Knee Joint Pain",
        ml: "കാൽ മുട്ടു വേദന",
        image: "/images/core/Orthopaedic/knee-pain.png",
      },
      {
        en: "Degenerative Disease",
        ml: "തേയ്‌മാനം",
        image: "/images/core/Orthopaedic/degenerative.png",
      },
      {
        en: "Disc Prolapse / IVDP",
        ml: "ഡിസ്ക് പ്രൊലാപ്‌സ്",
        image: "/images/core/Orthopaedic/disc.png",
      },
      {
        en: "Back Pain",
        ml: "നടു വേദന",
        image: "/images/core/Orthopaedic/back-pain.png",
      },
      {
        en: "Neck Pain / Cervical Spondylosis",
        ml: "കഴുത്തു വേദന",
        image: "/images/core/Orthopaedic/neck-pain.png",
      },
      {
        en: "Calcaneal Spur",
        ml: "ഉപ്പൂറ്റി, മടമ്പ് വേദന",
        image: "/images/core/Orthopaedic/calcaneal-spur.png",
      },
      {
        en: "Arthritis",
        ml: "വാതരോഗം / സന്ധിവാതം / രക്തവാദം / ആമവാതം",
        image: "/images/core/Orthopaedic/arthritis.png",
      },
    ],
  },
  {
    id: 2,
    title: "Gastrointestinal Diseases",
    mlTitle: "ഉദരോഗങ്ങൾ, ഗുദരോഗങ്ങൾ",
    slug: "gastrointestinal-diseases",
    description:
      "Holistic treatments to correct digestive imbalances, improve gut health, and treat chronic gastrointestinal issues naturally.",
    image: "/images/core/gastrointestinal-diseases.png",
    conditions: [
      {
        en: "Acidity",
        ml: "അസിഡിറ്റി",
        image: "/images/core/gas/acidity.png",
      },
      {
        en: "Stomach Bloating",
        ml: "വയറുവീർപ്പ്",
        image: "/images/core/gas/stomach-bloating.png",
      },
      {
        en: "Constipation",
        ml: "മലബന്ധം",
        image: "/images/core/gas/constipation.png",
      },
      { en: "Piles", ml: "പൈൽസ്", image: "/images/core/gas/piles1.png" },
      {
        en: "Fistula",
        ml: "ഫിസ്റ്റുല",
        image: "/images/core/gas/fistula.png",
      },
      {
        en: "Loss of Appetite",
        ml: "വിശപ്പില്ലായ്‌മ",
        image: "/images/core/gas/loss-of-appetite.png",
      },
      {
        en: "Indigestion",
        ml: "ദഹനക്കുറവ്",
        image: "/images/core/gas/indigestion.png",
      },
      { en: "Fisher", ml: "ഫിഷർ", image: "/images/core/gas/anal-fissure.png" },
    ],
  },
  {
    id: 3,
    title: "Life Style Diseases",
    mlTitle: "ജീവിതശൈലി രോഗങ്ങൾ",
    slug: "lifestyle-diseases",
    description:
      "Comprehensive lifestyle and dietary interventions alongside authentic Ayurvedic therapies to manage metabolic and stress-related conditions.",
    image: "/images/core/life.png",
    conditions: [
      {
        en: "Diabetes",
        ml: "പ്രമേഹം",
        image: "/images/core/conditions/diabetes.jpg",
      },
      {
        en: "Blood Pressure",
        ml: "രക്തസമ്മർദ്ദം",
        image: "/images/core/conditions/blood-pressure.jpg",
      },
      {
        en: "Cholesterol",
        ml: "കൊളസ്‌ട്രോൾ",
        image: "/images/core/conditions/cholesterol.jpg",
      },
      {
        en: "Obesity",
        ml: "അമിതവണ്ണം",
        image: "/images/core/conditions/obesity.jpg",
      },
      {
        en: "Mental Stress",
        ml: "മാനസിക സമ്മർദ്ദം",
        image: "/images/core/conditions/mental-stress.jpg",
      },
      {
        en: "Insomnia",
        ml: "ഉറക്കമില്ലായ്‌മ",
        image: "/images/core/conditions/insomnia.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Urological Diseases",
    mlTitle: "മൂത്രാശയരോഗങ്ങൾ",
    slug: "urological-diseases",
    description:
      "Natural remedies and specific therapies to support kidney function and treat urinary tract disorders.",
    image: "/images/core/rological.png",
    conditions: [
      {
        en: "Urinary Incontinence",
        ml: "മൂത്രം പിടിച്ചു വെയ്ക്കാൻ കഴിയായിക",
        image: "/images/core/conditions/urinary-incontinence.jpg",
      },
      {
        en: "Urinary Stone",
        ml: "മൂത്രക്കല്ല്",
        image: "/images/core/conditions/urinary-stone.jpg",
      },
      {
        en: "Kidney Stone",
        ml: "കിഡ്‌നി സ്റ്റോൺ",
        image: "/images/core/conditions/kidney-stone.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Neurological Diseases",
    mlTitle: "നാഡീരോഗങ്ങൾ",
    slug: "neurological-diseases",
    description:
      "Specialized Panchakarma treatments aimed at strengthening the nervous system and supporting rehabilitation for neurological conditions.",
    image: "/images/core/neurological.png",
    conditions: [
      {
        en: "Paralysis",
        ml: "പക്ഷാഘാതം",
        image: "/images/core/conditions/paralysis.jpg",
      },
      {
        en: "Facial Palsy",
        ml: "ഫേഷ്യൽ പാൽസി",
        image: "/images/core/conditions/facial-palsy.jpg",
      },
      {
        en: "Parkinsonism",
        ml: "പാർക്കിൻസൺസ് രോഗം",
        image: "/images/core/conditions/parkinsonism.jpg",
      },
      {
        en: "Sciatica",
        ml: "സയാറ്റിക്ക",
        image: "/images/core/conditions/sciatica.jpg",
      },
    ],
  },
  {
    id: 6,
    title: "Skin Diseases",
    mlTitle: "ചർമ്മ രോഗങ്ങൾ",
    slug: "skin-diseases",
    description:
      "Blood purification therapies and herbal applications to treat chronic skin conditions and restore a healthy complexion.",
    image: "/images/core/skin.png",
    conditions: [
      {
        en: "Psoriasis",
        ml: "സോറിയാസിസ്",
        image: "/images/core/skin/psoriasis.png",
      },
      {
        en: "Dandruff",
        ml: "താരൻ",
        image: "/images/core/skin/dandruff.png",
      },
      {
        en: "Fungal Infection",
        ml: "ഫംഗസ് ബാധ",
        image: "/images/core/skin/fungal-infection.png",
      },
      {
        en: "Karappan",
        ml: "കരപ്പൻ",
        image: "/images/core/skin/karappan.png",
      },
      {
        en: "Eczema",
        ml: "എക്സീമ",
        image: "/images/core/skin/eczema.png",
      },
      {
        en: "Pimples",
        ml: "മുഖക്കുരു",
        image: "/images/core/skin/pimples.png",
      },
      {
        en: "Vitiligo",
        ml: "വെള്ളപ്പാണ്ട്",
        image: "/images/core/skin/vitiligo.png",
      },
    ],
  },
  {
    id: 7,
    title: "Gynecological Diseases",
    mlTitle: "സ്ത്രീരോഗങ്ങൾ",
    slug: "gynecological-diseases",
    description:
      "Safe and effective Ayurvedic approaches for women's reproductive health, hormonal balance, and menstrual disorders.",
    image: "/images/core/gynecological.png",
    conditions: [
      {
        en: "Uterine Ovarian Tumors",
        ml: "ഗർഭാശയ അണ്ഡാശയ മുഴകൾ",
        image: "/images/core/conditions/uterine-tumors.jpg",
      },
      {
        en: "Menstrual Disorders",
        ml: "ആർത്തവക്രമക്കേടുകൾ",
        image: "/images/core/conditions/menstrual-disorders.jpg",
      },
      {
        en: "White Discharge",
        ml: "അസ്ഥി ഉരുക്കം",
        image: "/images/core/conditions/white-discharge.jpg",
      },
    ],
  },
  {
    id: 8,
    title: "Respiratory Diseases",
    mlTitle: "ശ്വാസകോശ രോഗങ്ങൾ",
    slug: "respiratory-diseases",
    description:
      "Therapies to clear respiratory channels, boost immunity, and provide long-term relief from chronic breathing issues.",
    image: "/images/core/respiratory1.png",
    conditions: [
      {
        en: "Chronic Cough",
        ml: "വിട്ടുമാറാത്ത ചുമ",
        image: "/images/core/conditions/chronic-cough.jpg",
      },
      { en: "Cold", ml: "ജലദോഷം", image: "/images/core/conditions/cold.jpg" },
      {
        en: "Asthma",
        ml: "ആസ്ത്മ",
        image: "/images/core/conditions/asthma.jpg",
      },
    ],
  },
  {
    id: 9,
    title: "Eye Diseases",
    mlTitle: "നേത്രരോഗം",
    slug: "eye-diseases",
    description:
      "Traditional Ayurvedic eye care treatments to improve vision clarity and treat strain and infections.",
    image: "/images/core/eye.png",
    conditions: [],
  },
  {
    id: 10,
    title: "ENT Diseases",
    mlTitle: "ഇ എൻ ടി രോഗങ്ങൾ",
    slug: "ent-diseases",
    description:
      "Specialized care focusing on ailments related to the ear, nose, and throat using natural herbal formulations.",
    image: "/images/core/ent.png",
    conditions: [],
  },
];
