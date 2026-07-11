"use client";

import { Container } from "@/src/components/common/Container";
import { GoogleReviewsWidget } from "../../home/testimonial-old-design/GoogleReviewWidget";

export const GoogleReviewsSection = () => {
  return (
    <section className="py-8 lg:py-12 bg-[#FAFAFA] border-t border-gray-200 overflow-hidden">
      <Container>
        <div className="flex flex-col items-center text-center mb-12">
          {/* <Star className="w-10 h-10 text-[#C9A86A] fill-current mb-4" /> */}
          {/* <h2 className="text-3xl font-serif text-gray-900 mb-4">Verified Google Reviews</h2> */}
          {/* <p className="text-gray-600 max-w-2xl">
            See what our patients are saying about us on Google. We pride ourselves on transparency and exceptional care.
          </p> */}
        </div>
        
        <GoogleReviewsWidget />
      </Container>
    </section>
  );
};