export interface Message {
  id: number | string;
  sender: "user" | "bot";
  text: string;
}

export interface ChatbotFAQ {
  id: number;
  keywords: string[];
  question: string;
  answer: string;
  relatedQuestions?: string[]; // Added relatedQuestions here
}

// --------------------------------------------------------
// UI CONFIGURATION DATA
// --------------------------------------------------------

export const quickQuestions = [
  {
    icon: "📅",
    text: "Book Appointment",
    query: "How can I book an appointment?",
  },
  {
    icon: "⏰",
    text: "Working Hours",
    query: "What are your consultation timings?",
  },
  { icon: "🌿", text: "Treatments", query: "What treatments do you provide?" },
  { icon: "📍", text: "Location", query: "Where is the hospital located?" },
];

export const defaultSuggestedQuestions = [
  "What is Panchakarma?",
  "Do you offer beauty therapies?",
  "Who are the doctors available?",
  "Do you have a pharmacy?",
];

// --------------------------------------------------------
// CHATBOT KNOWLEDGE BASE (FAQs)
// --------------------------------------------------------

export const chatbotFAQs: ChatbotFAQ[] = [
  {
    id: 0,
    question: "Greeting",
    keywords: [
      "hi", "hii", "hiii", "hello", "hey", "heyy", "hlo", "helo", "hai", "hy",
      "good morning", "good afternoon", "good evening", "sup", "wassup",
    ],
    answer:
      "Hello! 👋 Welcome to Sreshta Multispeciality Ayurveda Clinic. How can I help you today?\n\nYou can ask me about:\n• Booking an appointment\n• Consultation timings\n• Available doctors\n• Our treatments & Panchakarma\n• Clinic location",
    relatedQuestions: [
      "How can I book an appointment?",
      "What are your consultation timings?",
      "Where is the hospital located?",
    ],
  },
  {
    id: 1,
    question: "What are your consultation timings?",
    keywords: [
      "timing", "timings", "time", "hours", "working", "working hours",
      "consultation", "consult", "opening", "closing", "open", "close", "schedule",
    ],
    answer:
      "Our clinical hours are:\n• Monday to Thursday: 9:30 AM – 5:30 PM\n• Friday & Saturday: 9:00 AM – 5:30 PM\n• Sunday: Closed\n",
    relatedQuestions: [
      "How can I book an appointment?",
      "Where is the hospital located?",
      "Who are the doctors available?",
    ],
  },
  {
    id: 2,
    question: "How can I book an appointment?",
    keywords: [
      "appointment", "appointmnt", "booking", "book", "schedule", "consult",
      "reservation", "visit", "meet doctor", "register", "slot", "availability",
    ],
    answer:
      "Scheduling a visit is easy! You can book an appointment directly through our website, or you can call / WhatsApp our reception desk at +91 80758 70435.",
    relatedQuestions: [
      "What are your consultation timings?",
      "What diseases and conditions do you treat?",
      "How can I contact the hospital?",
    ],
  },
  {
    id: 3,
    question: "Where is the hospital located?",
    keywords: [
      "location", "address", "where", "map", "hospital", "clinic", "situated",
      "located", "directions", "route", "near", "reach", "direction",
    ],
    answer:
      "Sreshta Multispeciality Ayurveda Clinic is located at Pantheeramkavu P.O, Kozhikode, Kerala, India (673019).",
    relatedQuestions: [
      "How can I book an appointment?",
      "What are your consultation timings?",
      "How can I contact the hospital?",
    ],
  },
  {
    id: 4,
    question: "What diseases and conditions do you treat?",
    keywords: [
      "treatment", "treatments", "therapy", "services", "disease", "diseases",
      "condition", "illness", "disorder", "health issues", "cure", "specialization",
    ],
    answer:
      "We provide holistic Ayurvedic management for a wide range of conditions including:\n• Orthopedic Care (Joint/Back pain, Arthritis)\n• Lifestyle Diseases (Diabetes, Hypertension)\n• Neurological Issues (Paralysis, Sciatica)\n• Skin Conditions (Psoriasis, Eczema)\n• Gynecological & Respiratory Disorders",
    relatedQuestions: [
      "What therapies do you offer for back, joint, or neck pain?",
      "What is Panchakarma?",
      "Who are the doctors available?",
    ],
  },
  {
    id: 5,
    question: "How can I contact the hospital?",
    keywords: [
      "contact", "phone", "mobile", "number", "call", "telephone", "email",
      "mail", "whatsapp", "support", "help", "reach", "connect",
    ],
    answer:
      "We're always here to help. You can reach us via:\n📞 Phone / WhatsApp: +91 80758 70435\n✉️ Email: sreshtacalicut@gmail.com",
    relatedQuestions: [
      "Where is the hospital located?",
      "How can I book an appointment?",
      "What are your consultation timings?",
    ],
  },
  {
    id: 6,
    question: "Who are the doctors available at Sreshta?",
    keywords: [
      "doctor", "doctors", "physician", "specialist", "consultant",
      "medical team", "team", "staff", "expert", "who is", "available doctor",
    ],
    answer:
      "Our expert medical team includes:\n• Dr. Nanditha M (Chief Consultant Physician - Panchakarma & Cosmetology)\n• Dr. Shaheema Shamsudeen (Gynecology Specialist)\n• Dr. Madhavikutty M (Counselor)\n• Mr. Nandakishore M (Yoga Instructor)",
    relatedQuestions: [
      "How can I book an appointment?",
      "Do you offer beauty therapies or cosmetology?",
      "Are there yoga classes available?",
    ],
  },
  {
    id: 7,
    question: "What is Panchakarma?",
    keywords: [
      "panchakarma", "detox", "detoxification", "purification", "cleanse",
      "cleansing", "ayurvedic detox", "rejuvenation", "five therapies",
    ],
    answer:
      "Panchakarma is Ayurveda's supreme detoxification and rejuvenation program. It deeply cleanses the body of toxins through specialized therapies like Vamanam, Virechanam, Basthi, Nasyam, and Raktamokshana, helping to restore your natural balance and vitality.",
    relatedQuestions: [
      "What diseases and conditions do you treat?",
      "What therapies do you offer for back, joint, or neck pain?",
      "How can I book an appointment?",
    ],
  },
  {
    id: 8,
    question: "Do you offer beauty therapies or cosmetology?",
    keywords: [
      "beauty", "cosmetology", "cosmetic", "facial", "skin care", "hair care",
      "pimple", "acne", "melasma", "pigmentation", "anti aging", "glow", "spa",
    ],
    answer:
      "Yes! Under the guidance of Dr. Nanditha M, we offer purely herbal and chemical-free Ayurvedic cosmetology. Our services include Herbal Facials, Hair Spas, Protein Treatments, and specialized care for Acne and Melasma.",
    relatedQuestions: [
      "Who are the doctors available?",
      "Do you have an in-house pharmacy?",
      "How can I book an appointment?",
    ],
  },
  {
    id: 9,
    question: "Do you provide pregnancy or postnatal care?",
    keywords: [
      "pregnancy", "pregnant", "prenatal", "antenatal", "postnatal", "postpartum",
      "maternity", "delivery", "mother care", "sutika", "douhrda", "garbhini",
    ],
    answer:
      "Absolutely. We offer specialized wellness packages:\n• 'Douhrda' (Antenatal Care): Focusing on healthy fetal development and maternal strength.\n• 'Sutika' (Postnatal Care): Designed to heal the mother's body, restore energy, and support proper lactation.",
    relatedQuestions: [
      "Who are the doctors available?",
      "Are there yoga classes available?",
      "Do you offer counselling or mental health support?",
    ],
  },
  {
    id: 10,
    question: "Are there yoga classes available?",
    keywords: [
      "yoga", "meditation", "asana", "pranayama", "breathing", "fitness",
      "instructor", "trainer", "classes", "sessions", "exercise", "mindfulness",
    ],
    answer:
      "Yes! Our specialized Yoga Instructor, Mr. Nandakishore M, conducts both online and offline sessions. We offer General Yoga, Therapeutic Yoga tailored for specific medical conditions, Pranayama (breathwork), and Meditation.",
    relatedQuestions: [
      "Who are the doctors available?",
      "Do you offer counselling or mental health support?",
      "How can I book an appointment?",
    ],
  },
  {
    id: 11,
    question: "Do you offer counselling or mental health support?",
    keywords: [
      "counselling", "counseling", "mental", "stress", "anxiety", "depression",
      "psychology", "psychologist", "therapy", "therapist", "marital", "family",
    ],
    answer:
      "Yes, mental well-being is a core part of holistic health. Our Counselor, Dr. Madhavikutty M, provides expert support for stress, anxiety, postpartum depression, marital issues, and childhood learning disabilities.",
    relatedQuestions: [
      "Are there yoga classes available?",
      "Do you provide pregnancy or postnatal care?",
      "Who are the doctors available?",
    ],
  },
  {
    id: 12,
    question: "Do you have an in-house pharmacy?",
    keywords: [
      "pharmacy", "medicine", "medicines", "medication", "drugs", "herbal",
      "ayurvedic medicine", "products", "shop", "store", "buy", "dispensary",
    ],
    answer:
      "We do. Our fully-stocked authentic Ayurvedic pharmacy provides Kashayas, Arishtams, Lehyas, Choornas, Tailas, and premium herbal cosmetics. All our medicines are sourced from highly trusted, traditional manufacturers.",
    relatedQuestions: [
      "What diseases and conditions do you treat?",
      "Do you offer beauty therapies or cosmetology?",
      "How can I contact the hospital?",
    ],
  },
  {
    id: 13,
    question: "What therapies do you offer for back, joint, or neck pain?",
    keywords: [
      "back pain", "joint pain", "knee pain", "neck pain", "shoulder pain",
      "arthritis", "spondylosis", "slipped disc", "muscle pain", "massage", "kizhi", "orthopedic",
    ],
    answer:
      "We offer highly effective, targeted Ayurvedic therapies for pain relief, including Abhyangam (therapeutic massage), Janu Basti (for knees), Kati Basti (lower back), Greeva Vasti (neck), and various Kizhi (herbal pouch) treatments.",
    relatedQuestions: [
      "What is Panchakarma?",
      "How can I book an appointment?",
      "Who are the doctors available?",
    ],
  },
  {
    id: 14,
    question: "Thanks",
    keywords: [
      "thanks", "thank you", "thankyou", "thx", "tnx", "great", "awesome", "perfect",
    ],
    answer:
      "You're very welcome! 😊 If you have any other questions or if you'd like to schedule a visit, just let me know.",
    relatedQuestions: [
      "How can I book an appointment?",
      "What are your consultation timings?",
      "Where is the hospital located?",
    ],
  },
  {
    id: 15,
    question: "Goodbye",
    keywords: [
      "bye", "goodbye", "see you", "take care", "exit", "quit", "close", "later",
    ],
    answer:
      "Thank you for reaching out to Sreshta Multispeciality Ayurveda Clinic. Have a wonderful, healthy day! 🌿",
    relatedQuestions: [
      "How can I book an appointment?",
      "What treatments do you provide?",
      "Where is the hospital located?",
    ],
  },
];