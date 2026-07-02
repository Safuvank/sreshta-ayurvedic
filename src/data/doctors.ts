export interface Doctor {
  id: number;
  name: string;
  designation: string;
  specialization: string;
  experience: string;
  qualifications: string;
  description: string;
  image: string;
}

export const doctorsDetails = [
  {
    id: 1,
    name: "Dr. Shaheema Shamsudeen",
    designation: "Gynaecology Specialist (Stree Roga Vibhaaga)",
    specialization: "Gynaecological Disorders & Infertility",
    experience: "Experienced",
    qualifications:
      "UG (Vishnu Ayurveda College), Certificate in Gynaecological Diseases",
    description:
      "Dr. Shaheema Shamsudeen deals with the stree roga vibhaaga (gynaecology wing) of Sreshta. She has completed her UG from Vishnu Ayurveda College Shornur and a certificate course on Gynaecological diseases and Ayurvedic management. She is well experienced in treating gynaecological disorders as well as infertility cases. Her pleasing and consoling nature makes patients feel better.",
    image: "/images/doctors/dr_shaheema.jpg",
  },
  {
    id: 2,
    name: "Dr. Madhavikutty M",
    designation: "Counselor",
    specialization: "Guidance, Counseling & Postpartum Depression",
    experience: "Experienced",
    qualifications:
      "PG Diploma in Guidance and Counseling (Annamalai University)",
    description:
      "Dr. Madhavikutty M deals with the guidance and counseling wing of Sreshta. She completed her Post graduate diploma in guidance and counseling from Annamalai University, Chennai. She is well experienced in treating cases like postpartum depression, premarital and postmarital issues, child counseling etc. Her calm and pleasing personality ensures the patients benefits from the sittings.",
    image: "/images/doctors/dr_Madhavikutty.jpg",
  },
  {
    id: 3,
    name: "Mr. Nandakishore M",
    designation: "Yoga Instructor",
    specialization: "Yoga Therapy, Asanas & Pranayamas",
    experience: "Experienced",
    qualifications:
      "MSc Health and Yoga Therapy (Zamorins Guruvayurappan College)",
    description:
      "Mr. Nandakishore M is the Yoga instructor at Sreshta. He completed his PG in Msc Health and Yoga Therapy from Zamorins Guruvayurappan college Calicut. He undergoes online and offline classes of yoga at Sreshta. He handles asanas, pranayamas, meditation sessions and even disease oriented yoga sessions. His calm and quiet nature itself adds on to his yogic carrier.",
    image: "/images/doctors/Nandakishore.jpg",
  },
  {
    id: 4,
    name: "Dr. Nanditha M",
    designation: "Chief Consultant Physician",
    specialization: "Panchakarma, Cosmetology & Diet Planning",
    experience: "Experienced",
    qualifications:
      "UG (Vishnu Ayurveda), PG in Dravyagunavijnana (Amrita School), PG Diploma in Ayurvedic Cosmetology",
    description:
      "Dr. Nanditha M, the chief consultant physician at Sreshta completed her UG from Vishnu Ayurveda College Shornur and PG in Dravyagunavijnana from Amrita School of Ayurveda, Kollam. She has also done a Post graduate diploma in Ayurvedic Cosmetology. Her calm and pleasing personality has earned acceptance from her patients. She handles cases focused on Ayurvedic principles. She is well aware of Panchakarma therapies, beauty treatments and guiding patients in following diet and lifestyle changes.",
    image: "/images/doctors/dr_Nanditha.jpg",
  },
];
