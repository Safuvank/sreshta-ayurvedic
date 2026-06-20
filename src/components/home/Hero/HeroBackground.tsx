// export const HeroBackground = () => {
//   return (
//     <div className="absolute inset-0 -z-10 bg-white overflow-hidden">
//       {/* Premium Ultra-Soft Light Glows */}
//       <div className="absolute top-[-10%] left-[-10%] w-150 h-150 bg-[#1F3D35]/5 rounded-full blur-[130px]" />
//       <div className="absolute bottom-[-10%] right-[-5%] w-125 h-125 bg-[#C9A86A]/10 rounded-full blur-[150px]" />

//       {/* Subtle organic pattern overlay */}
//       <div className="absolute inset-0 bg-[url('/images/pattern-overlay.png')] opacity-[0.015] pointer-events-none" />
//     </div>
//   );
// };


export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 bg-white overflow-hidden">
      {/* MOBILE ONLY BACKGROUND IMAGE */}
      {/* Replace '/images/your-mobile-bg.jpg' with your actual image path */}
      {/* md:hidden ensures it disappears on tablets and desktops */}
      <div className="absolute inset-0 bg-[url('/images/hero/mobile-only-hero.png')] bg-cover bg-center md:hidden" />

      {/* Premium Ultra-Soft Light Glows */}
      {/* (You might want to add md:block to these if you want to hide the glows on mobile) */}
      <div className="absolute top-[-10%] left-[-10%] w-150 h-150 bg-[#1F3D35]/5 rounded-full blur-[130px]" />
      <div className="absolute bottom-[-10%] right-[-5%] w-125 h-125 bg-[#C9A86A]/10 rounded-full blur-[150px]" />

      {/* Subtle organic pattern overlay */}
      <div className="absolute inset-0 bg-[url('/images/pattern-overlay.png')] opacity-[0.015] pointer-events-none" />
    </div>
  );
};