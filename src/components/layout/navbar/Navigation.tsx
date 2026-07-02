export const navigation = [
  {
    label: "We Offer",
    children: [
      {
        label: "Treatments",
        href: "/treatments",
      },
      {
        label: "Our Core",
        // Added the complete list of core specializations
        children: [
          {
            label: "Orthopaedic Diseases",
            href: "/our-core/orthopaedic-diseases",
          },
          {
            label: "Gastrointestinal Diseases",
            href: "/our-core/gastrointestinal-diseases",
          },
          {
            label: "Life Style Diseases",
            href: "/our-core/life-style-diseases",
          },
          {
            label: "Urological Diseases",
            href: "/our-core/urological-diseases",
          },
          {
            label: "Neurological Diseases",
            href: "/our-core/neurological-diseases",
          },
          { label: "Skin Diseases", href: "/our-core/skin-diseases" },
          {
            label: "Gynecological Diseases",
            href: "/our-core/gynecological-diseases",
          },
          {
            label: "Respiratory Diseases",
            href: "/our-core/respiratory-diseases",
          },
          { label: "Eye Diseases", href: "/our-core/eye-diseases" },
          { label: "ENT Diseases", href: "/our-core/ent-diseases" },
        ],
      },
      {
        label: "Services",
        children: [
          { label: "Ayurveda Therapies", href: "/services/ayurveda-therapies" },
          { label: "Beauty Therapies", href: "/services/beauty-therapies" },
          { label: "Yoga", href: "/services/yoga" },
          { label: "Counselling", href: "/services/counselling" },
          { label: "Pharmacy", href: "/services/pharmacy" },
        ],
      },
    ],
  },
  {
    label: "Testimonials",
    href: "/testimonials",
  },
  {
    label: "Support",
    children: [
      { label: "Contact", href: "/contact" },
      { label: "Our Doctors", href: "/doctors" },
    ],
  },
  {
    label: "Company",
    children: [
      { label: "About", href: "/about" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
];
