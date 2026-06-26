"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { contactInfo } from "@/src/data/contact";
import { Container } from "../../common/Container";

export const ContactSplitBlock = () => {
  return (
    <section className="bg-white pb-24 lg:pb-32">
      <Container>
        {/* Main Unified Card */}
        <div className="flex flex-col lg:flex-row bg-white rounded-2xl lg:rounded-2xl border border-gray-300 overflow-hidden">
          
          {/* LEFT COLUMN: Contact Information */}
          <div className="w-full lg:w-5/12 bg-[#F8F5EF] p-10 md:p-14 lg:p-16 flex flex-col">
            <h3 className="font-serif text-3xl md:text-4xl text-[#2F5D50] mb-4">
              Get in touch
            </h3>
            <p className="text-gray-600 font-light mb-10 leading-relaxed">
              Reach out to our specialists. We are here to listen, guide, and help you start your authentic healing journey.
            </p>

            <div className="space-y-8 flex-1">
              {/* Head Office */}
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-full bg-[#2F5D50] flex items-center justify-center text-white shrink-0 shadow-md">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Head Office</h4>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">
                    {contactInfo.hospitalName}<br />
                    {contactInfo.address}
                  </p>
                </div>
              </div>

              {/* Email Us */}
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-full bg-[#2F5D50] flex items-center justify-center text-white shrink-0 shadow-md">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email Us</h4>
                  <p className="text-gray-600 font-light text-sm">{contactInfo.email}</p>
                </div>
              </div>

              {/* Call Us */}
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-full bg-[#2F5D50] flex items-center justify-center text-white shrink-0 shadow-md">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Call Us</h4>
                  <p className="text-gray-600 font-light text-sm">Phone : {contactInfo.phone}</p>
                  <p className="text-gray-600 font-light text-sm">WhatsApp : {contactInfo.whatsapp}</p>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="mt-12 pt-8 border-t border-gray-200/60">
              <h4 className="font-bold text-gray-900 mb-4">Follow our social media</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-[#2F5D50] flex items-center justify-center text-white hover:bg-[#C9A86A] transition-colors shadow-sm">
                  <FaFacebookF className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#2F5D50] flex items-center justify-center text-white hover:bg-[#C9A86A] transition-colors shadow-sm">
                  <FaInstagram className="w-[18px] h-[18px]" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#2F5D50] flex items-center justify-center text-white hover:bg-[#C9A86A] transition-colors shadow-sm">
                  <FaTwitter className="w-[18px] h-[18px]" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#2F5D50] flex items-center justify-center text-white hover:bg-[#C9A86A] transition-colors shadow-sm">
                  <FaYoutube className="w-[18px] h-[18px]" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <div className="w-full lg:w-7/12 p-10 md:p-14 lg:p-16 bg-white">
            <h3 className="font-serif text-3xl md:text-4xl text-[#2F5D50] mb-8">
              Send us a message
            </h3>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {/* Row 1: Name & Treatment */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Name</label>
                  <input 
                    type="text" 
                    placeholder="Name"
                    className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-black focus:outline-none focus:border-[#2F5D50] focus:ring-1 focus:ring-[#2F5D50] focus:bg-white transition-all font-light text-sm placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Treatment</label>
                  <select className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-black focus:outline-none focus:border-[#2F5D50] focus:ring-1 focus:ring-[#2F5D50] focus:bg-white transition-all font-light text-sm appearance-none">
                    <option value="" className="text-gray-400">Select Treatment</option>
                    <option value="panchakarma">Panchakarma</option>
                    <option value="orthopedic">Orthopedic Care</option>
                    <option value="rejuvenation">Rejuvenation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Row 2: Phone & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Phone</label>
                  <input 
                    type="tel" 
                    placeholder="Phone"
                    className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-black focus:outline-none focus:border-[#2F5D50] focus:ring-1 focus:ring-[#2F5D50] focus:bg-white transition-all font-light text-sm placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Email</label>
                  <input 
                    type="email" 
                    placeholder="Email"
                    className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-black focus:outline-none focus:border-[#2F5D50] focus:ring-1 focus:ring-[#2F5D50] focus:bg-white transition-all font-light text-sm placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Row 3: Subject */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Subject</label>
                <input 
                  type="text" 
                  placeholder="Subject"
                  className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-black focus:outline-none focus:border-[#2F5D50] focus:ring-1 focus:ring-[#2F5D50] focus:bg-white transition-all font-light text-sm placeholder:text-gray-400"
                />
              </div>

              {/* Row 4: Message */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Message</label>
                <textarea 
                  rows={5}
                  placeholder="Message"
                  className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 text-black focus:outline-none focus:border-[#2F5D50] focus:ring-1 focus:ring-[#2F5D50] focus:bg-white transition-all font-light text-sm placeholder:text-gray-400 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button 
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#2F5D50] px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-[#254A40] hover:shadow-lg"
                >
                  Send
                </button>
              </div>
            </form>

          </div>
        </div>
      </Container>
    </section>
  );
};