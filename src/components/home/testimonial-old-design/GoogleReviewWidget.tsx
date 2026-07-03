"use client";

import Script from "next/script";

export const GoogleReviewsWidget = () => {
  return (
    <div className="w-full mt-20 lg:mt-32 relative z-10">
      {/* next/script handles the external script safely.
        strategy="lazyOnload" ensures it doesn't slow down your initial page load. 
      */}
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />

      {/* Elfsight Widget Container */}
      <div
        className="elfsight-app-bd048755-3fb6-4e28-8b9e-94aed047660f"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
};
