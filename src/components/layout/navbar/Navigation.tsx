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
        // Replaced href with children array for the nested dropdown
        children: [
          { label: "Orthopedic Disease", href: "/our-core/orthopedic-disease" },
          {
            label: "Gastrointestinal Diseases",
            href: "/our-core/gastrointestinal-diseases",
          },
          { label: "Lifestyle Diseases", href: "/our-core/lifestyle-diseases" },
        ],
      },
      {
        label: "Services",
        // Replaced href with children array for the nested dropdown
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
