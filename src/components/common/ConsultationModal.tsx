// "use client";

// import React, { useState } from "react";
// import Joi from "joi";
// import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";

// interface ConsultationModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// interface FormData {
//   name: string;
//   email: string;
//   phone: string;
//   treatment: string;
//   message: string;
// }

// // 1. Define the initial state as a constant so we can reuse it to reset the form
// const INITIAL_FORM_DATA: FormData = {
//   name: "",
//   email: "",
//   phone: "",
//   treatment: "General Consultation",
//   message: "",
// };

// export default function ConsultationModal({
//   isOpen,
//   onClose,
// }: ConsultationModalProps) {
//   // 2. Use the constant for initial state
//   const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
//   const [errors, setErrors] = useState<Record<string, string | null>>({});

//   const schema = Joi.object({
//     name: Joi.string()
//       .required()
//       .messages({ "string.empty": "Full name is required" }),
//     email: Joi.string()
//       .email({ tlds: { allow: false } })
//       .required()
//       .messages({
//         "string.empty": "Email is required",
//         "string.email": "Please enter a valid email",
//       }),
//     phone: Joi.string().required().messages({
//       "string.empty": "Phone number is required",
//       "any.required": "Phone number is required",
//     }),
//     treatment: Joi.string().required(),
//     message: Joi.string().allow("").optional(),
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
//   };

//   const handlePhoneChange = (value?: string) => {
//     setFormData((prev) => ({ ...prev, phone: value || "" }));
//     if (errors.phone) setErrors((prev) => ({ ...prev, phone: null }));
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const { error } = schema.validate(formData, { abortEarly: false });

//     if (error) {
//       const newErrors: Record<string, string> = {};
//       error.details.forEach((detail) => {
//         newErrors[detail.path[0] as string] = detail.message;
//       });
//       setErrors(newErrors);
//     } else {
//       setErrors({});
//       console.log("Form Submitted:", formData);

//       // 3. Reset the form data back to empty/default values
//       setFormData(INITIAL_FORM_DATA);

//       // 4. Show the success message
//       alert("Thank you! Your consultation request has been received.");

//       // 5. Close the modal
//       onClose();
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6">
//       <div className="relative w-full max-w-[480px] bg-[#24483E] rounded-xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors z-20 text-2xl"
//         >
//           ✕
//         </button>

//         <div className="p-6 sm:p-8 overflow-y-auto">
//           <div className="text-center mb-6 sm:mb-8">
//             <h2 className="text-2xl sm:text-[34px] leading-tight font-serif text-white mb-3">
//               Schedule Your Free Consultation
//             </h2>
//           </div>

//           <form
//             onSubmit={handleSubmit}
//             className="flex flex-col gap-4 sm:gap-5"
//           >
//             <div>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Full name*"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className={`w-full bg-[#1A362E] text-white p-3 rounded-md border outline-none ${errors.name ? "border-red-500" : "border-transparent focus:border-[#458A77]"}`}
//               />
//               {errors.name && (
//                 <p className="text-red-400 text-[10px] mt-1 ml-1">
//                   {errors.name}
//                 </p>
//               )}
//             </div>

//             <div>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email*"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className={`w-full bg-[#1A362E] text-white p-3 rounded-md border outline-none ${errors.email ? "border-red-500" : "border-transparent focus:border-[#458A77]"}`}
//               />
//               {errors.email && (
//                 <p className="text-red-400 text-[10px] mt-1 ml-1">
//                   {errors.email}
//                 </p>
//               )}
//             </div>

//             <div>
//               <div
//                 className={`w-full bg-[#1A362E] text-white p-3 rounded-md border transition-colors ${
//                   errors.phone
//                     ? "border-red-500"
//                     : "border-transparent focus-within:border-[#458A77]"
//                 }`}
//               >
//                 <PhoneInput
//                   international
//                   defaultCountry="IN"
//                   value={formData.phone}
//                   onChange={handlePhoneChange}
//                   className="custom-phone-input outline-none"
//                 />
//               </div>
//               {errors.phone && (
//                 <p className="text-red-400 text-[10px] mt-1 ml-1">
//                   {errors.phone}
//                 </p>
//               )}
//             </div>

//             <div className="relative bg-[#1A362E] rounded-md border border-transparent focus-within:border-[#458A77]">
//               <select
//                 name="treatment"
//                 value={formData.treatment}
//                 onChange={handleChange}
//                 className="w-full bg-transparent text-gray-300 p-3 outline-none appearance-none cursor-pointer"
//               >
//                 <option
//                   className="bg-[#1A362E] text-white"
//                   value="General Consultation"
//                 >
//                   General Consultation
//                 </option>
//                 <option className="bg-[#1A362E] text-white" value="Weight Loss">
//                   Weight Loss
//                 </option>
//                 <option
//                   className="bg-[#1A362E] text-white"
//                   value="Diabetes Care"
//                 >
//                   Diabetes Care
//                 </option>
//                 <option
//                   className="bg-[#1A362E] text-white"
//                   value="Arthritis Care"
//                 >
//                   Arthritis Care
//                 </option>
//               </select>
//             </div>

//             <input
//               type="text"
//               name="message"
//               placeholder="Tell us about your symptoms (optional)"
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full bg-[#1A362E] text-white p-3 rounded-md border border-transparent outline-none focus:border-[#458A77]"
//             />

//             <button
//               type="submit"
//               className="bg-[#336658] hover:bg-[#3D7A69] text-white font-medium py-3 px-8 rounded-full transition-colors w-full mt-2"
//             >
//               Request a Free Consultation
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useState, useEffect } from "react"; // Added useEffect
import { createPortal } from "react-dom"; // Added createPortal
import Joi from "joi";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

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

export default function ConsultationModal({
  isOpen,
  onClose,
}: ConsultationModalProps) {
  // --- Portal Hydration Fix ---
  // Next.js needs to know the component has mounted on the client before using 'document'
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<Record<string, string | null>>({});

  const schema = Joi.object({
    name: Joi.string()
      .required()
      .messages({ "string.empty": "Full name is required" }),
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
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
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
      alert("Thank you! Your consultation request has been received.");
      onClose();
    }
  };

  // If not mounted yet (SSR) or not open, return null
  if (!mounted || !isOpen) return null;

  // Render the modal directly into the document body
  return createPortal(
    // Changed z-50 to z-[9999] for maximum priority
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6">
      <div className="relative w-full max-w-[480px] bg-[#24483E] rounded-xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors z-20 text-2xl"
        >
          ✕
        </button>

        <div className="p-6 sm:p-8 overflow-y-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-[34px] leading-tight font-serif text-white mb-3">
              Schedule Your Free Consultation
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 sm:gap-5"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full name*"
                value={formData.name}
                onChange={handleChange}
                className={`w-full bg-[#1A362E] text-white p-3 rounded-md border outline-none ${errors.name ? "border-red-500" : "border-transparent focus:border-[#458A77]"}`}
              />
              {errors.name && (
                <p className="text-red-400 text-[10px] mt-1 ml-1">
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
                className={`w-full bg-[#1A362E] text-white p-3 rounded-md border outline-none ${errors.email ? "border-red-500" : "border-transparent focus:border-[#458A77]"}`}
              />
              {errors.email && (
                <p className="text-red-400 text-[10px] mt-1 ml-1">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <div
                className={`w-full bg-[#1A362E] text-white p-3 rounded-md border transition-colors ${
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
                  className="custom-phone-input outline-none"
                />
              </div>
              {errors.phone && (
                <p className="text-red-400 text-[10px] mt-1 ml-1">
                  {errors.phone}
                </p>
              )}
            </div>

            <div className="relative bg-[#1A362E] rounded-md border border-transparent focus-within:border-[#458A77]">
              <select
                name="treatment"
                value={formData.treatment}
                onChange={handleChange}
                className="w-full bg-transparent text-gray-300 p-3 outline-none appearance-none cursor-pointer"
              >
                <option
                  className="bg-[#1A362E] text-white"
                  value="General Consultation"
                >
                  General Consultation
                </option>
                <option className="bg-[#1A362E] text-white" value="Weight Loss">
                  Weight Loss
                </option>
                <option
                  className="bg-[#1A362E] text-white"
                  value="Diabetes Care"
                >
                  Diabetes Care
                </option>
                <option
                  className="bg-[#1A362E] text-white"
                  value="Arthritis Care"
                >
                  Arthritis Care
                </option>
              </select>
            </div>

            <input
              type="text"
              name="message"
              placeholder="Tell us about your symptoms (optional)"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-[#1A362E] text-white p-3 rounded-md border border-transparent outline-none focus:border-[#458A77]"
            />

            <button
              type="submit"
              className="bg-[#336658] hover:bg-[#3D7A69] text-white font-medium py-3 px-8 rounded-full transition-colors w-full mt-2"
            >
              Request a Free Consultation
            </button>
          </form>
        </div>
      </div>
    </div>,
    document.body, // This physically attaches the modal to the very end of the HTML body
  );
}
