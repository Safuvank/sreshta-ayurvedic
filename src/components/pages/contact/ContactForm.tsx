"use client";

import { Send } from "lucide-react";

export const ContactForm = () => {
  return (
    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-gray-100/50 border border-gray-100">
      <h3 className="font-serif text-3xl text-gray-900 mb-2">Book a Consultation</h3>
      <p className="text-gray-500 mb-8">Fill out the form below and our team will get back to you shortly.</p>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Full Name</label>
            <input 
              type="text" 
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2F5D50] focus:bg-white transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Phone Number</label>
            <input 
              type="tel" 
              placeholder="+91 XXXXX XXXXX"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2F5D50] focus:bg-white transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Email Address</label>
          <input 
            type="email" 
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2F5D50] focus:bg-white transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Treatment Interested In</label>
          <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2F5D50] focus:bg-white transition-all text-gray-700 appearance-none">
            <option value="">Select a treatment...</option>
            <option value="panchakarma">Panchakarma Detox</option>
            <option value="orthopedic">Orthopedic Care</option>
            <option value="lifestyle">Lifestyle Disease Management</option>
            <option value="rejuvenation">Rejuvenation Therapy</option>
            <option value="other">General Consultation / Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Your Message</label>
          <textarea 
            rows={4}
            placeholder="Tell us briefly about your condition or inquiry..."
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2F5D50] focus:bg-white transition-all resize-none"
          ></textarea>
        </div>

        <button 
          type="submit"
          className="w-full group flex items-center justify-center gap-2 rounded-full bg-[#2F5D50] px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-[#24483E] hover:shadow-lg"
        >
          Submit Request
          <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </form>
    </div>
  );
};