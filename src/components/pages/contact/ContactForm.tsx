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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
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
    // Reduced gap slightly since we are adding space for errors inside the rows
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
      {/* Row 1: Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
        <div className="flex flex-col">
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
          {/* Fixed height container for error to prevent layout shift */}
          <div className="h-6 pt-1">
            {errors.name && (
              <p className="text-red-400 text-[11px] ml-1">{errors.name}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col">
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
          <div className="h-6 pt-1">
            {errors.email && (
              <p className="text-red-400 text-[11px] ml-1">{errors.email}</p>
            )}
          </div>
        </div>
      </div>

      {/* Row 2: Phone & Treatment */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
        <div className="flex flex-col">
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
          <div className="h-6 pt-1">
            {errors.phone && (
              <p className="text-red-400 text-[11px] ml-1">{errors.phone}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="relative bg-[#1A362E] rounded-md border border-transparent focus-within:border-[#458A77] transition-colors">
            <select
              name="treatment"
              value={formData.treatment}
              onChange={handleChange}
              className="w-full bg-transparent text-gray-300 p-3.5 outline-none appearance-none cursor-pointer"
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
              <option className="bg-[#1A362E] text-white" value="Diabetes Care">
                Diabetes Care
              </option>
              <option
                className="bg-[#1A362E] text-white"
                value="Arthritis Care"
              >
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
          <div className="h-6 pt-1">
            {/* Empty space block to keep this column exactly the same height as the Phone column */}
          </div>
        </div>
      </div>

      {/* Row 3: Message / Symptoms */}
      <div className="flex flex-col">
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us about your symptoms (optional)"
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-[#1A362E] text-white p-3.5 rounded-md border border-transparent outline-none focus:border-[#458A77] transition-colors resize-none"
        />
        <div className="h-4 pt-1"></div> {/* Slight spacing before button */}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full bg-[#2F5D50] hover:bg-[#254A40] text-white font-medium py-4 px-8 rounded-xl cursor-pointer "
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
