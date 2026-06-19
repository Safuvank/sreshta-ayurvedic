// export const HeroBackground = () => {
//   return (
//     <div className="absolute inset-0 -z-10 overflow-hidden">
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="absolute inset-0 h-full w-full object-cover"
//       >
//         <source src="/videos/hero-video.mp4" type="video/mp4" />
//       </video>

//       <div className="absolute inset-0 bg-black/70" />
//     </div>
//   );
// };



export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 bg-white overflow-hidden">
      {/* Premium Ultra-Soft Light Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#1F3D35]/5 rounded-full blur-[130px]" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#C9A86A]/10 rounded-full blur-[150px]" />
      
      {/* Subtle organic pattern overlay */}
      <div className="absolute inset-0 bg-[url('/images/pattern-overlay.png')] opacity-[0.015] pointer-events-none" />
    </div>
  );
};