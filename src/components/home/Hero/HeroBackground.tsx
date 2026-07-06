


"use client";

export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      
      {/* CHANGED: Removed h-[40svh] and made it w-full h-full on all screens */}
      <div className="absolute top-0 right-0 w-full h-full">
        
        {/* The pure background image */}
        <div 
          className="absolute inset-0 bg-[url('/images/hero/heroimg.png')] bg-no-repeat bg-[position:80%_center] lg:bg-center bg-cover" 
        />

        {/* Optional: Add a very slight dark overlay just to make the white text readable. 
            If your text is dark green (#1F3D35), you might want a light overlay (bg-white/30) instead. */}
        {/* <div className="absolute inset-0 bg-black/20" /> */}

      </div>

    </div>
  );
};