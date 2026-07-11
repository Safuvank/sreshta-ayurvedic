"use client";

export default function WelcomeCard() {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-[#2F5D50] to-[#1a362e] p-6 text-white shadow-lg mb-6">
      <h3 className="mb-2 text-2xl font-serif leading-tight">
        Hello! 👋
        <br />
        How can we help?
      </h3>
      <p className="text-sm text-green-50/80 leading-relaxed">
        Welcome to Sreshta Ayurveda. Ask me anything about our treatments,
        doctors, or to schedule a visit.
      </p>
    </div>
  );
}
