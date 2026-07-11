// // import React from 'react'

// // const ContactForm = () => {
// //   return (
// //     <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
// //   {/* Row 1: Name & Treatment */}
// //   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //     <div className="space-y-2">
// //       <label className="text-sm font-semibold text-gray-700">Name</label>
// //       <input
// //         type="text"
// //         placeholder="Name"
// //         className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-black focus:outline-none focus:border-[#2F5D50] focus:ring-1 focus:ring-[#2F5D50] focus:bg-white transition-all font-light text-sm placeholder:text-gray-400"
// //       />
// //     </div>
// //     {/* <div className="space-y-2">
// //                   <label className="text-sm font-semibold text-gray-700">
// //                     Treatment
// //                   </label>
// //                   <select className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-black focus:outline-none focus:border-[#2F5D50] focus:ring-1 focus:ring-[#2F5D50] focus:bg-white transition-all font-light text-sm appearance-none">
// //                     <option value="" className="text-gray-400">
// //                       Select Treatment
// //                     </option>
// //                     <option value="panchakarma">Panchakarma</option>
// //                     <option value="orthopedic">Orthopedic Care</option>
// //                     <option value="rejuvenation">Rejuvenation</option>
// //                     <option value="other">Other</option>
// //                   </select>
// //                 </div> */}
// //   </div>

// //   {/* Row 2: Phone & Email */}
// //   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //     <div className="space-y-2">
// //       <label className="text-sm font-semibold text-gray-700">Phone</label>
// //       <input
// //         type="tel"
// //         placeholder="Phone"
// //         className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-black focus:outline-none focus:border-[#2F5D50] focus:ring-1 focus:ring-[#2F5D50] focus:bg-white transition-all font-light text-sm placeholder:text-gray-400"
// //       />
// //     </div>
// //     <div className="space-y-2">
// //       <label className="text-sm font-semibold text-gray-700">Email</label>
// //       <input
// //         type="email"
// //         placeholder="Email"
// //         className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-black focus:outline-none focus:border-[#2F5D50] focus:ring-1 focus:ring-[#2F5D50] focus:bg-white transition-all font-light text-sm placeholder:text-gray-400"
// //       />
// //     </div>
// //   </div>

// //   {/* Row 3: Subject */}
// //   <div className="space-y-2">
// //     <label className="text-sm font-semibold text-gray-700">Subject</label>
// //     <input
// //       type="text"
// //       placeholder="Subject"
// //       className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-black focus:outline-none focus:border-[#2F5D50] focus:ring-1 focus:ring-[#2F5D50] focus:bg-white transition-all font-light text-sm placeholder:text-gray-400"
// //     />
// //   </div>

// //   {/* Row 4: Message */}
// //   <div className="space-y-2">
// //     <label className="text-sm font-semibold text-gray-700">Message</label>
// //     <textarea
// //       rows={5}
// //       placeholder="Message"
// //       className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 text-black focus:outline-none focus:border-[#2F5D50] focus:ring-1 focus:ring-[#2F5D50] focus:bg-white transition-all font-light text-sm placeholder:text-gray-400 resize-none"
// //     ></textarea>
// //   </div>

// //   {/* Submit Button */}
// //   <div className="pt-2">
// //     <button
// //       type="submit"
// //       className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#2F5D50] px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-[#254A40] hover:shadow-lg"
// //     >
// //       Send
// //     </button>
// //   </div>
// // </form>

// //   )
// // }

// // export default ContactForm


// "use client";

// import React, { useState } from "react";
// import Joi from "joi";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     treatment: "",
//     symptoms: "",
//   });

//   // Type the errors state so TypeScript knows it's an object with string keys
//   const [errors, setErrors] = useState<Record<string, string | null>>({});

//   const schema = Joi.object({
//     name: Joi.string().trim().required().label("Name").messages({
//       "string.empty": "Please enter your name.",
//     }),
//     email: Joi.string()
//       .email({ tlds: { allow: false } })
//       .required()
//       .label("Email")
//       .messages({
//         "string.empty": "Please enter your email address.",
//         "string.email": "Please enter a valid email address.",
//       }),
//     phone: Joi.string()
//       .pattern(/^[0-9+\-\s()]+$/)
//       .required()
//       .label("Number")
//       .messages({
//         "string.empty": "Please enter your phone number.",
//         "string.pattern.base": "Please enter a valid phone number.",
//       }),
//     treatment: Joi.string().required().label("Treatment").messages({
//       "string.empty": "Please select a treatment.",
//     }),
//     symptoms: Joi.string().trim().required().label("Symptoms").messages({
//       "string.empty": "Please tell us about your symptoms.",
//     }),
//   });

//   // 1. Fix: Add TypeScript types for the onChange event
//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));

//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: null }));
//     }
//   };

//   // 2. Fix: Add TypeScript types for the form submission event
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const { error } = schema.validate(formData, { abortEarly: false });

//     if (error) {
//       // 3. Fix: Tell TypeScript this object will use string keys and string values
//       const validationErrors: Record<string, string> = {};
      
//       error.details.forEach((item) => {
//         // item.path[0] is typed as string | number by Joi, so we convert to string
//         const key = String(item.path[0]);
//         validationErrors[key] = item.message;
//       });
//       setErrors(validationErrors);
//     } else {
//       setErrors({});
//       console.log("Form Submitted Successfully:", formData);
//     }
//   };

//   const getInputClasses = (fieldName: string) => {
//     const baseClasses =
//       "w-full px-5 py-3.5 rounded-xl bg-gray-50 border text-black focus:outline-none transition-all font-light text-sm placeholder:text-gray-400";
//     const errorClasses = errors[fieldName]
//       ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 bg-red-50/30"
//       : "border-gray-200 focus:border-[#2F5D50] focus:ring-1 focus:ring-[#2F5D50] focus:bg-white";

//     return `${baseClasses} ${errorClasses}`;
//   };

//   return (
//     <form className="space-y-6" onSubmit={handleSubmit} noValidate>
//       {/* Row 1: Name & Email */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="space-y-2">
//           <label className="text-sm font-semibold text-gray-700">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="John Doe"
//             className={getInputClasses("name")}
//           />
//           {errors.name && (
//             <p className="text-red-500 text-xs mt-1">{errors.name}</p>
//           )}
//         </div>

//         <div className="space-y-2">
//           <label className="text-sm font-semibold text-gray-700">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="john@example.com"
//             className={getInputClasses("email")}
//           />
//           {errors.email && (
//             <p className="text-red-500 text-xs mt-1">{errors.email}</p>
//           )}
//         </div>
//       </div>

//       {/* Row 2: Phone & Treatment */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="space-y-2">
//           <label className="text-sm font-semibold text-gray-700">Number</label>
//           <input
//             type="tel"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             placeholder="+1 (555) 000-0000"
//             className={getInputClasses("phone")}
//           />
//           {errors.phone && (
//             <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
//           )}
//         </div>

//         <div className="space-y-2">
//           <label className="text-sm font-semibold text-gray-700">
//             Treatment
//           </label>
//           <div className="relative">
//             <select
//               name="treatment"
//               value={formData.treatment}
//               onChange={handleChange}
//               className={`${getInputClasses(
//                 "treatment"
//               )} appearance-none cursor-pointer`}
//             >
//               <option value="" disabled>
//                 Select a Treatment
//               </option>
//               <option value="panchakarma">Panchakarma</option>
//               <option value="orthopedic">Orthopedic Care</option>
//               <option value="rejuvenation">Rejuvenation</option>
//               <option value="other">Other</option>
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
//               <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
//                 <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
//               </svg>
//             </div>
//           </div>
//           {errors.treatment && (
//             <p className="text-red-500 text-xs mt-1">{errors.treatment}</p>
//           )}
//         </div>
//       </div>

//       {/* Row 3: Symptoms */}
//       <div className="space-y-2">
//         <label className="text-sm font-semibold text-gray-700">
//           Tell us about your symptoms
//         </label>
//         <textarea
//           name="symptoms"
//           value={formData.symptoms}
//           onChange={handleChange}
//           rows={5}
//           placeholder="Please describe what you are experiencing..."
//           className={`${getInputClasses("symptoms")} resize-none`}
//         ></textarea>
//         {errors.symptoms && (
//           <p className="text-red-500 text-xs mt-1">{errors.symptoms}</p>
//         )}
//       </div>

//       {/* Submit Button */}
//       <div className="pt-4">
//         <button
//           type="submit"
//           className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#2F5D50] px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-[#254A40] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
//         >
//           Submit Request
//         </button>
//       </div>
//     </form>
//   );
// };

// export default ContactForm;




"use client";

import React, { useState } from "react";
import Joi from "joi";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface FormData {
  name: string;
  email: string;
  phone: string;
  treatment: string;
  message: string;
}

const INITIAL_FORM_DATA: FormData = {
  name: "",
  email: "",
  phone: "",
  treatment: "General Consultation",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<Record<string, string | null>>({});

  const schema = Joi.object({
    name: Joi.string().required().messages({
      "string.empty": "Full name is required",
    }),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .messages({
        "string.empty": "Email is required",
        "string.email": "Please enter a valid email",
      }),
    phone: Joi.string().required().messages({
      "string.empty": "Phone number is required",
      "any.required": "Phone number is required",
    }),
    treatment: Joi.string().required(),
    message: Joi.string().allow("").optional(),
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const handlePhoneChange = (value?: string) => {
    setFormData((prev) => ({ ...prev, phone: value || "" }));
    if (errors.phone) setErrors((prev) => ({ ...prev, phone: null }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { error } = schema.validate(formData, { abortEarly: false });

    if (error) {
      const newErrors: Record<string, string> = {};
      error.details.forEach((detail) => {
        newErrors[detail.path[0] as string] = detail.message;
      });
      setErrors(newErrors);
    } else {
      setErrors({});
      console.log("Form Submitted:", formData);
      setFormData(INITIAL_FORM_DATA);
      alert("Thank you! Your message has been received.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
      {/* Row 1: Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Full name*"
            value={formData.name}
            onChange={handleChange}
            className={`w-full bg-[#1A362E] text-white p-3.5 rounded-md border outline-none transition-colors ${
              errors.name
                ? "border-red-500"
                : "border-transparent focus:border-[#458A77]"
            }`}
          />
          {errors.name && (
            <p className="text-red-400 text-[11px] mt-1.5 ml-1">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            className={`w-full bg-[#1A362E] text-white p-3.5 rounded-md border outline-none transition-colors ${
              errors.email
                ? "border-red-500"
                : "border-transparent focus:border-[#458A77]"
            }`}
          />
          {errors.email && (
            <p className="text-red-400 text-[11px] mt-1.5 ml-1">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Phone & Treatment */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <div
            className={`w-full bg-[#1A362E] text-white p-3.5 rounded-md border transition-colors ${
              errors.phone
                ? "border-red-500"
                : "border-transparent focus-within:border-[#458A77]"
            }`}
          >
            <PhoneInput
              international
              defaultCountry="IN"
              value={formData.phone}
              onChange={handlePhoneChange}
              className="outline-none 
                [&_.PhoneInputInput]:bg-transparent 
                [&_.PhoneInputInput]:border-none 
                [&_.PhoneInputInput]:outline-none 
                [&_.PhoneInputInput]:text-white
                [&_.PhoneInputCountryIcon--border]:border-none
                [&_.PhoneInputCountryIcon]:shadow-none"
            />
          </div>
          {errors.phone && (
            <p className="text-red-400 text-[11px] mt-1.5 ml-1">
              {errors.phone}
            </p>
          )}
        </div>

        <div className="relative bg-[#1A362E] rounded-md border border-transparent focus-within:border-[#458A77] transition-colors">
          <select
            name="treatment"
            value={formData.treatment}
            onChange={handleChange}
            className="w-full h-full bg-transparent text-gray-300 p-3.5 outline-none appearance-none cursor-pointer"
          >
            <option className="bg-[#1A362E] text-white" value="General Consultation">
              General Consultation
            </option>
            <option className="bg-[#1A362E] text-white" value="Weight Loss">
              Weight Loss
            </option>
            <option className="bg-[#1A362E] text-white" value="Diabetes Care">
              Diabetes Care
            </option>
            <option className="bg-[#1A362E] text-white" value="Arthritis Care">
              Arthritis Care
            </option>
          </select>
          {/* Custom Dropdown Arrow for Dark Theme */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
            <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Row 3: Message / Symptoms */}
      <div>
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us about your symptoms (optional)"
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-[#1A362E] text-white p-3.5 rounded-md border border-transparent outline-none focus:border-[#458A77] transition-colors resize-none"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          className="bg-[#336658] hover:bg-[#3D7A69] text-white font-medium py-3.5 px-8 rounded-full transition-colors w-full sm:w-auto min-w-[200px]"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}