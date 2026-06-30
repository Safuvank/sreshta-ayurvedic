// export const treatments = [
//   {
//     id: 1,
//     title: "Panchakarma",
//     description: "A complete Ayurvedic detoxification and rejuvenation therapy.",
//     image: "/images/treatments/panchakarma.png",
//     slug: "panchakarma",
//   },
//   {
//     id: 2,
//     title: "Abhyanga",
//     description: "Full body medicated oil massage for relaxation and healing.",
//     image: "/images/treatments/abyanga.jpg",
//     slug: "abhyanga",
//   },
//   {
//     id: 3,
//     title: "Shirodhara",
//     description: "Therapeutic oil flow treatment for stress and mental wellness.",
//     image: "/images/treatments/shirodhara.png",
//     slug: "shirodhara",
//   },
//   {
//     id: 4,
//     title: "Njavarakizhi",
//     description: "Traditional rejuvenation therapy using medicated rice bundles.",
//     image: "/images/treatments/njavarakizhi-therapy.png",
//     slug: "njavarakizhi",
//   },
//   {
//     id: 5,
//     title: "Njavarakizhi",
//     description: "Traditional rejuvenation therapy using medicated rice bundles.",
//     image: "/images/treatments/njavarakizhi-therapy.png",
//     slug: "njavarakizhi",
//   },
// ];




export const treatments = [
  {
    id: 1,
    title: "Panchakarma",
    description:
      "The supreme detoxification and rejuvenation therapy in Ayurveda. The word 'Panchakarma' means 'five therapeutic actions' designed to eliminate deep-rooted toxins from the body.",
    longDescription:
      "Panchakarma is not just a treatment but a structured medical process that includes Preparation of the body (Poorvakarma), Main detox procedures (Pradhana Karma), and Post-therapy rejuvenation (Paschatkarma).",
    usedFor: [
      "Chronic diseases",
      "Hormonal imbalance",
      "Postnatal recovery",
      "Stress & fatigue",
      "Lifestyle disorders",
      "Preventive health and rejuvenation",
    ],
    category: "Detoxification & Rejuvenation",
    image: "/images/treatments/panchakarma2.png",
    slug: "panchakarma",
  },
  {
    id: 2,
    title: "Poorvakarma",
    description:
      "The preparatory phase of Panchakarma. Without proper preparation, toxins cannot be mobilized effectively from deep tissues.",
    longDescription:
      "Poorvakarma consists of two main components: Snehana (Oleation Therapy) involving internal and external application of medicated oils and ghee, and Swedana (Sudation Therapy / Heat Therapy) to induce therapeutic sweating.",
    purpose: [
      "Loosen toxins from tissues",
      "Prepare the body for elimination therapies",
      "Bring toxins to the gastrointestinal tract",
      "Enhance treatment effectiveness",
    ],
    mainComponents: [
      "Snehana (Oleation Therapy)",
      "Swedana (Sudation Therapy / Heat Therapy)",
    ],
    category: "Pre-Purification",
    image: "/images/treatments/poorvakarma.png",
    slug: "poorvakarma",
  },
  {
    id: 3,
    title: "Snehapanam",
    description:
      "Internal Oleation Therapy involving systematic intake of medicated ghee or oil in gradually increasing dosage.",
    longDescription:
      "Snehapanam softens and mobilizes accumulated toxins for easy elimination. It prepares the body for cleansing procedures like Vamanam and Virechanam, and improves digestive strength (Agni) and supports healthy metabolism.",
    benefits: [
      "Useful for chronic dryness, joint pains, skin disorders, and digestive disorders",
      "Promotes healthy skin glow",
      "Mental clarity",
      "Hormonal balance",
    ],
    category: "Oleation Therapy",
    image: "/images/treatments/snehapanam.png",
    slug: "snehapanam",
  },
  {
    id: 4,
    title: "Abhyangam",
    description:
      "A traditional Ayurvedic full body massage that uses warm medicated herbal oil to promote body wellness.",
    longDescription:
      "Abhyangam is also done in medical conditions. It is believed to reduce stress and stuffiness, improve skin health, enhance sleep and is often used as a preparatory procedure for other Ayurvedic detoxification treatments.",
    benefits: [
      "Reduces stress and mental tension",
      "Relieves body pain",
      "Improves skin health",
      "Enhances sleep quality",
      "Preparatory procedure for Panchakarma detox therapies",
    ],
    category: "Massage Therapy",
    image: "/images/treatments/abyanga.jpg",
    slug: "abhyangam",
  },
  {
    id: 5,
    title: "Padaabhyangam",
    description:
      "The traditional Ayurvedic therapeutic massage of the feet using warm medicated oils.",
    longDescription:
      "In Ayurveda, the feet are considered one of the most vital energy centers of the body because they contain numerous nerve endings connected to internal organs. This therapy is not just a foot massage — it is a deeply calming, rejuvenating, and therapeutic procedure that balances the body and mind.",
    benefits: [
      "Improves sleep quality",
      "Reduces stress and anxiety",
      "Relieves leg pain & heel pain",
      "Reduces burning sensation in feet",
      "Improves eyesight (according to classical Ayurveda)",
      "Nourishes dry and cracked feet",
      "Calms the nervous system",
      "Highly beneficial in Vata disorders",
    ],
    category: "Massage Therapy",
    image: "/images/treatments/Padaabhyangam.png",
    slug: "padaabhyangam",
  },
  {
    id: 6,
    title: "Shiroabhyangam",
    description:
      "A classical Ayurvedic therapeutic oil massage of the head, scalp, neck, and shoulders performed using warm medicated oils.",
    longDescription:
      "Also known as Shiro Abhyanga, this is an Ayurvedic Head Oil Therapy. In Ayurveda, the head (Shiras) is considered the seat of the mind, senses, and nervous system, making this therapy deeply rejuvenating and calming. It is an essential part of Ayurvedic rejuvenation (Rasayana) and daily routine (Dinacharya).",
    benefits: [
      "Relieves stress and mental fatigue",
      "Improves sleep quality (insomnia relief)",
      "Reduces headache & migraine tendency",
      "Promotes hair growth and scalp nourishment",
      "Enhances memory and concentration",
      "Calms anxiety and mood swings",
      "Prevents hair fall & dryness",
      "Strengthens sense organs",
    ],
    category: "Head Therapy",
    image: "/images/treatments/Shiroabhyangam.png",
    slug: "shiroabhyangam",
  },
  {
    id: 7,
    title: "Shiropichu",
    description:
      "A classical Ayurvedic therapy in which a sterile cotton pad soaked in warm medicated oil is placed and retained over the crown of the head.",
    longDescription:
      "Also called Shiro Pichu, this is an Ayurvedic Oil Retention Therapy for the Head. The oil is retained over the Brahmarandhra region for a specific duration. It is a gentle yet deeply calming treatment primarily used to pacify aggravated Vata and Pitta doshas affecting the mind and nervous system.",
    usedFor: [
      "Ayurvedic rejuvenation",
      "Stress management",
      "Neurological care",
      "Postnatal treatments",
    ],
    category: "Head Therapy",
    image: "/images/treatments/shiropichu.png",
    slug: "shiropichu",
  },
  {
    id: 8,
    title: "Bashpa Sweda",
    description:
      "A classical Ayurvedic sudation (sweating) therapy in which the body is exposed to medicated herbal steam after oleation (Abhyanga).",
    longDescription:
      "Bashpa Sweda is one of the most important procedures under Poorvakarma (preparatory therapy) of Panchakarma, used to liquefy and mobilize toxins (Ama) for effective elimination. This therapy induces therapeutic sweating that opens body channels (Srotas) and promotes deep detoxification and rejuvenation.",
    benefits: [
      "Relieves body stiffness and pain",
      "Reduces muscle spasm and joint discomfort",
      "Improves circulation",
      "Eliminates toxins through sweat",
      "Reduces heaviness and lethargy",
      "Improves flexibility of body",
      "Supports weight management therapies",
      "Enhances effectiveness of Panchakarma detox",
    ],
    category: "Steam Therapy",
    image: "/images/treatments/Bashpa Sweda.png",
    slug: "bashpa-sweda",
  },
  {
    id: 9,
    title: "Nadi Sweda",
    description:
      "A classical Ayurvedic sudation therapy where medicated herbal steam is directed to a specific part of the body through a tube (Nadi).",
    longDescription:
      "Unlike Bashpa Sweda (full body steam), Nadi Sweda is a localized steam treatment, mainly used for pain, stiffness, and musculoskeletal disorders. It is an important procedure under Swedana and commonly performed as part of Poorvakarma before Panchakarma detox therapies.",
    benefits: [
      "Relieves localized pain and stiffness",
      "Reduces muscle spasm",
      "Improves joint mobility",
      "Enhances blood circulation",
      "Reduces inflammation",
      "Softens contracted tissues",
      "Prepares body for deeper detox therapies",
    ],
    category: "Steam Therapy",
    image: "/images/treatments/Nadi Sweda.png",
    slug: "nadi-sweda",
  },
  {
    id: 10,
    title: "Podikizhi",
    description:
      "An Ayurvedic therapy in which medicated powders are tied into poultices, heated and used to massage and foment a specific area or the full body.",
    longDescription:
      "The treatment is primarily used to relieve pain, stiffness, swelling and inflammation associated with musculoskeletal and neurological conditions.",
    category: "Kizhi Therapy",
    image: "/images/treatments/podikkizhi.png",
    slug: "podikizhi",
  },
  {
    id: 11,
    title: "Narangakizhi",
    description:
      "A specialized Ayurvedic therapy that uses warm poultices filled with lemon and a blend of medicinal herbs and other ingredients.",
    longDescription:
      "The warm pouches are massaged over the body to induce therapeutic sweating and provide relief.",
    category: "Kizhi Therapy",
    image: "/images/treatments/Narangakizhi.png",
    slug: "narangakizhi",
  },
  {
    id: 12,
    title: "Njavarakizhi",
    description:
      "A traditional Ayurvedic massage therapy that uses warm boluses of Njavara rice cooked in milk and herbal decoctions to massage the body.",
    longDescription:
      "Njavarakizhi strengthens muscles and alleviates general weakness. It nourishes the body, reduces fatigue, and helps in overall rejuvenation.",
    benefits: [
      "Strengthens muscles",
      "Alleviates general weakness",
      "Nourishes the body",
      "Reduces fatigue",
      "Promotes rejuvenation",
    ],
    category: "Kizhi Therapy",
    image: "/images/treatments/njavarakizhi-therapy.png",
    slug: "njavarakizhi",
  },
  {
    id: 13,
    title: "Dhanyamla Dara",
    description:
      "An Ayurvedic treatment that involves pouring warm, fermented herbal liquid called Dhanyamla over the body in a rhythmic stream.",
    longDescription:
      "The name breaks down to 'dhanya' and 'amla', with the liquid prepared from cereals like rice or millet and medicinal herbs. This practice is used to treat inflammation, joint pain and for rejuvenation.",
    usedFor: ["Inflammation", "Joint pain", "Rejuvenation"],
    category: "Dara Therapy",
    image: "/images/treatments/danyamala-dhara.png",
    slug: "dhanyamla-dara",
  },
  {
    id: 14,
    title: "Elakizhi",
    description:
      "A traditional Ayurvedic sudation therapy in which heated herbal leaves tied in boluses (Kizhi) are applied over the body with medicated oils.",
    longDescription:
      "Also known as Patra Pinda Sweda, Elakizhi is a form of Swedana (sudation therapy) widely used for pain relief, stiffness, inflammation, and rejuvenation. In classical Ayurveda, it is a highly effective therapy for Vata and Kapha disorders affecting muscles, joints, and soft tissues.",
    category: "Kizhi Therapy",
    image: "/images/treatments/elakkizhi.png",
    slug: "elakizhi",
  },
  {
    id: 15,
    title: "Kati Basti",
    description:
      "A classical Ayurvedic localized oil pooling therapy specially designed for the lower back region.",
    longDescription:
      "In Kati Basti, warm medicated oil is retained over the lumbar spine within a specially prepared herbal dough ring. It is one of the most effective Ayurvedic therapies for low back pain, disc problems, and Vata disorders affecting the spine.",
    usedFor: [
      "Low back pain",
      "Disc problems",
      "Vata disorders affecting the spine",
    ],
    category: "Basti Therapy",
    image: "/images/treatments/kati-basti.png",
    slug: "kati-basti",
  },
  {
    id: 16,
    title: "Janu Basti",
    description:
      "A classical Ayurvedic localized therapy in which warm medicated oil is retained over the knee joint within a ring made of herbal dough.",
    longDescription:
      "Janu Basti provides deep nourishment, lubrication, and strengthening to the knee structures and is highly effective in Vata-related knee disorders. It is widely used in Ayurvedic pain management, rejuvenation therapies, and postnatal musculoskeletal care.",
    category: "Basti Therapy",
    image: "/images/treatments/janu-basti.png",
    slug: "janu-basti",
  },
  {
    id: 17,
    title: "Shiro Basti",
    description:
      "A specialized Ayurvedic therapy in which warm medicated oil is retained over the head for a fixed duration using a leather or specially designed cap.",
    longDescription:
      "Shiro Basti is one of the most profound therapies for neurological, psychological, and Vata-Pitta disorders affecting the head and mind. Among all head therapies, it is considered more intensive and deeper acting than Shiroabhyangam, Shiropichu, and Shirodhara.",
    category: "Head Therapy",
    image: "/images/treatments/shiro-basti.png",
    slug: "shiro-basti",
  },
  {
    id: 18,
    title: "Vamanam",
    description:
      "A Panchakarma detox procedure (Therapeutic Emesis) that induces controlled vomiting to expel toxins.",
    longDescription:
      "Vamanam removes excess Kapha from the stomach, lungs, and respiratory system. It is performed after internal oleation and steam therapy to loosen toxins.",
    benefits: [
      "Enhances respiratory function",
      "Improves digestion and metabolism",
      "Beneficial for chronic colds, sinusitis, bronchial asthma, allergies, psoriasis, and obesity",
      "Restores lightness, clarity of mind, and energy",
    ],
    category: "Pradhana Karma (Main Panchakarma)",
    image: "/images/treatments/vamanam2.png",
    slug: "vamanam",
  },
  {
    id: 19,
    title: "Virechanam",
    description:
      "Therapeutic Purgation — controlled cleansing through herbal purgatives to eliminate excess Pitta.",
    longDescription:
      "Virechanam clears toxins from the small intestine, liver, gallbladder, and blood. It improves skin health and reduces internal inflammation.",
    benefits: [
      "Effective for jaundice, migraine, gastritis, hyperacidity, dermatitis, and piles",
      "Enhances digestion",
      "Promotes healthy appetite",
      "Supports liver function",
      "Helps regulate hormones",
      "Improves complexion",
    ],
    category: "Pradhana Karma (Main Panchakarma)",
    image: "/images/treatments/virechana.png",
    slug: "virechanam",
  },
  {
    id: 20,
    title: "Basthi",
    description:
      "Medicated Enema Therapy — one of the most important Panchakarma treatments, administered through the rectum.",
    longDescription:
      "Basthi uses herbal decoctions (Niruha/Asthapana Basthi) or medicated oils/ghee (Anuvasana Basthi). It deeply nourishes tissues, strengthens nerves, and balances Vata dosha.",
    benefits: [
      "Improves lubrication of joints, mobility, and muscular strength",
      "Highly beneficial for arthritis, spondylitis, back pain, sciatica, neurological issues, infertility, constipation, and geriatric care",
      "Enhances immunity, vitality, and overall rejuvenation",
    ],
    types: [
      "Niruha Basthi (Asthapana Basthi) — herbal decoction enema",
      "Anuvasana Basthi — medicated oil/ghee enema",
    ],
    category: "Pradhana Karma (Main Panchakarma)",
    image: "/images/treatments/basti.png",
    slug: "basthi",
  },
  {
    id: 21,
    title: "Nasyam",
    description:
      "An Ayurvedic therapy that involves the nasal administration of medicated oils or herbal juice.",
    longDescription:
      "The nose is considered the gateway to the head and Nasyam therapy aims to clean, purify and nourish the head, sinuses and respiratory system.",
    benefits: [
      "Improves brain health",
      "Relieves sinus issues",
      "Enhances memory and sleep",
    ],
    category: "Pradhana Karma (Main Panchakarma)",
    image: "/images/treatments/nasyam.png",
    slug: "nasyam",
  },
  {
    id: 22,
    title: "Raktamokshana",
    description:
      "Ayurvedic Bloodletting Therapy — one of the five principal procedures of Panchakarma, involving the controlled removal of vitiated blood.",
    longDescription:
      "Raktamokshana eliminates toxins and restores doshic balance. It is a specialized detoxification therapy primarily used in disorders related to impure blood (Dushta Rakta) and aggravated Pitta and Rakta Dosha. This therapy is mentioned in classical Ayurvedic texts as an effective method for purification and disease management when blood vitiation is a major causative factor.",
    category: "Pradhana Karma (Main Panchakarma)",
    image: "/images/treatments/raktamoshana.png",
    slug: "raktamokshana",
  },
  {
    id: 23,
    title: "Paschatkarma",
    description:
      "Post-Purification Care — the post-treatment phase focused on recovery, nourishment, and rejuvenation.",
    longDescription:
      "After detoxification, the body becomes sensitive and requires careful restoration. Paschatkarma includes Samsarjana Krama (Gradual Diet Plan), Rasayana Therapy (Rejuvenation Medicines), and Lifestyle and Mind Care.",
    keyAspects: [
      {
        name: "Samsarjana Krama (Gradual Diet Plan)",
        description:
          "A scientifically structured diet protocol starting from rice gruel (Kanji), light soups, easily digestible foods, and gradual return to regular diet. Restores digestive fire (Agni), prevents toxin reformation, and strengthens metabolism.",
      },
      {
        name: "Rasayana Therapy (Rejuvenation Medicines)",
        description:
          "Herbal formulations and therapies to rebuild tissues and immunity. Improves strength and stamina, enhances skin glow, boosts immunity, and slows ageing.",
      },
      {
        name: "Lifestyle and Mind Care",
        description:
          "Includes proper sleep, gentle yoga, meditation, and stress management.",
      },
    ],
    category: "Post-Purification Care",
    image: "/images/treatments/pashchatkarma.png",
    slug: "paschatkarma",
  },
  {
    id: 24,
    title: "Nethrasekam / Nethradhara",
    description:
      "Eye Cleansing Therapy — a continuous gentle stream of medicated decoction or milk poured over closed eyes.",
    longDescription:
      "Nethrasekam relieves eye strain caused by excessive screen time, heat, dust, and dryness. It improves circulation to eye tissues and nourishes the optic nerves.",
    benefits: [
      "Reduces burning sensation, redness, infections, and watering",
      "Useful for conjunctivitis, early cataract, glaucoma, allergies, and computer vision syndrome",
      "Enhances clarity of vision and relaxation",
    ],
    category: "Eye Therapy",
    image: "/images/treatments/Nethrasekam.png",
    slug: "nethrasekam",
  },
  {
    id: 25,
    title: "Dhoopanam",
    description:
      "Medicated Fumigation — traditional fumigation using smoke of herbal resins, leaves, and aromatic substances.",
    longDescription:
      "Dhoopanam has strong disinfectant and anti-microbial action for wound care and infection prevention. Used in postpartum care, post-surgical dressing, and room sterilization.",
    benefits: [
      "Reduces foul odor, swelling, and inflammation in wounds",
      "Helpful in respiratory infections, sinus congestion, ENT problems, and environmental purification",
      "Creates a purified, soothing, healing environment",
    ],
    category: "Supportive Care",
    image: "/images/treatments/doopanam.png",
    slug: "dhoopanam",
  },
  {
    id: 26,
    title: "Thalam",
    description:
      "A simple Ayurvedic procedure where a medicinal herbal paste or oil is applied directly to the center of the head.",
    longDescription:
      "Thalam helps to cool and calm the entire nervous system. It is highly effective in balancing doshas and provides mental relaxation.",
    benefits: [
      "Relieves stress and anxiety",
      "Treats insomnia",
      "Beneficial for chronic headaches and migraines",
      "Improves focus and mental clarity",
    ],
    category: "Head Therapy",
    image: "/images/treatments/thalam.png",
    slug: "thalam",
  },
  {
    id: 27,
    title: "Facial Marma Massage",
    description:
      "An Ayurvedic therapeutic facial technique that stimulates specific marma points (vital energy points) on the face.",
    longDescription:
      "Facial Marma Massage enhances circulation, rejuvenates skin, calms the mind, and balances doshas — especially Vata and Pitta. It is commonly used in rejuvenation (Rasayana) therapies, beauty treatments (Mukha Lepa + Abhyanga), and stress-relief protocols.",
    benefits: [
      "Skin Rejuvenation (Mukha Kanti) — improves blood circulation, enhances natural glow, reduces dullness and pigmentation",
      "Anti-Aging Effect — reduces fine lines and wrinkles, improves skin elasticity, tones facial muscles naturally",
      "Stress & Mental Relaxation — relieves tension headaches, reduces anxiety and mental fatigue, promotes better sleep",
      "Lymphatic Drainage & Detox — reduces facial puffiness, improves lymphatic flow, detoxifies skin tissues",
      "Dosha Balancing — Vata: nourishes dryness & aging skin; Pitta: cools inflammation & sensitivity; Kapha: reduces heaviness & puffiness",
    ],
    category: "Beauty & Rejuvenation",
    image: "/images/treatments/facial-marma.png",
    slug: "facial-marma-massage",
  },
  {
    id: 28,
    title: "Yoni Prakshalanam",
    description:
      "A classical Ayurvedic procedure involving gentle cleansing of the vaginal canal and external genital region using medicated herbal decoctions (Kashaya), oils, or warm sterile liquids.",
    longDescription:
      "Yoni Prakshalanam is mainly used in Stri Roga Chikitsa (Ayurvedic gynecology) for maintaining vaginal hygiene, treating infections, and promoting reproductive health.",
    benefits: [
      "Cleansing & Antimicrobial Action — removes excessive discharge, reduces odor and infection risk, maintains vaginal hygiene",
      "Dosha Balancing — pacifies Kapha (excess discharge, heaviness), reduces Pitta (burning, inflammation)",
      "Tissue Healing (Ropana) — supports healing of vaginal mucosa, improves local circulation",
      "Postnatal Recovery — helps tone vaginal tissues, reduces discomfort and inflammation",
    ],
    category: "Women's Health",
    image: "/images/treatments/yoni prakshalanam.png",
    slug: "yoni-prakshalanam",
  },
  {
    id: 29,
    title: "Yoni Pichu",
    description:
      "A classical Ayurvedic local therapy in which a sterile cotton swab or tampon soaked in medicated oil or ghee is gently placed inside the vaginal canal for a specific duration.",
    longDescription:
      "Yoni Pichu is widely used in Stri Roga Chikitsa (Ayurvedic gynecology) for healing, lubrication, and strengthening of the yoni and reproductive tissues.",
    benefits: [
      "Lubrication & Moisturization — reduces dryness and irritation, nourishes vaginal tissues",
      "Healing & Tissue Repair (Ropana) — promotes healing of cervical and vaginal mucosa, supports epithelial regeneration",
      "Dosha Balancing — pacifies Vata (dryness, pain, discomfort), reduces Pitta (burning, inflammation)",
      "Strengthening of Yoni & Pelvic Tissues — improves tone and elasticity, helpful in postnatal recovery",
    ],
    category: "Women's Health",
    image: "/images/treatments/yoni-pichu.png",
    slug: "yoni-pichu",
  },
  {
    id: 30,
    title: "Yoni Abhyangam",
    description:
      "A specialized Ayurvedic external oleation therapy in which medicated oils are gently massaged over the external genital region (yoni pradesha) to nourish tissues, balance doshas, and support women's reproductive health.",
    longDescription:
      "Yoni Abhyangam is a part of Stri Roga Chikitsa and is commonly included in postnatal care, infertility support, and rejuvenation therapies.",
    benefits: [
      "Vata Pacification — reduces dryness, pain, and discomfort; improves lubrication naturally",
      "Tissue Nourishment (Dhatu Poshana) — strengthens local muscles and tissues, enhances elasticity of perineal region",
      "Pain Relief & Relaxation — relieves pelvic tension, supports better comfort in daily activities",
      "Postnatal Healing — supports recovery of perineal tissues, improves circulation and healing after delivery",
      "Hormonal & Reproductive Support — enhances local blood circulation, supports healthy reproductive function",
    ],
    category: "Women's Health",
    image: "/images/treatments/yoni-abyangam.png",
    slug: "yoni-abhyangam",
  },
  {
    id: 31,
    title: "Uttarabasti",
    description:
      "A specialized Ayurvedic Panchakarma procedure in which medicated oil (Taila) or ghee (Ghrita) is administered into the uterine cavity (in females) or urinary bladder/urethra (in males & females) through a sterile catheter under strict medical supervision.",
    longDescription:
      "Uttarabasti is considered one of the most powerful local therapies in Stri Roga (gynecology) and Mutra Roga (urinary disorders).",
    benefits: [
      "Improves uterine nourishment",
      "Enhances endometrial thickness",
      "Regulates Apana Vata",
      "Supports conception",
      "Reduces menstrual pain",
      "Strengthens reproductive tissues",
    ],
    category: "Women's Health",
    image: "/images/treatments/Uttarabasti.png",
    slug: "uttarabasti",
  },
];
