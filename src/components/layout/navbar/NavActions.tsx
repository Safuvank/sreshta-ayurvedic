// import { Button } from "../../common/Button";

// export const NavActions = () => {
//   return (
//     <div className="hidden lg:flex items-center gap-4">
//       <Button
//         // Changed hover:text-[#1F3D35] to hover:text-white
//         className="group relative overflow-hidden rounded-xl border border-[#1F3D35] bg-transparent px-8 py-3 text-[#1F3D35] transition-colors duration-300 hover:text-white cursor-pointer"
//       >
//         {/* Animated Fill Background: Changed from bg-white to your solid brand green */}
//         <span className="absolute inset-0 translate-y-full bg-[#1F3D35] transition-transform duration-300 ease-out group-hover:translate-y-0" />

//         {/* Text */}
//         <span className="relative z-10 font-medium">Book Consultation</span>
//       </Button>
//     </div>
//   );
// };


"use client";

import { useState } from "react";
import { Button } from "../../common/Button";
// Adjust the import path below based on where you saved the modal component
import ConsultationModal from "../../common/ConsultationModal";

export const NavActions = () => {
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="hidden lg:flex items-center gap-4">
      <Button
        // Add onClick handler to open the modal
        onClick={() => setIsModalOpen(true)}
        // Changed hover:text-[#1F3D35] to hover:text-white
        className="group relative overflow-hidden rounded-xl border border-[#1F3D35] bg-transparent px-8 py-3 text-[#1F3D35] transition-colors duration-300 hover:text-white cursor-pointer"
      >
        {/* Animated Fill Background: Changed from bg-white to your solid brand green */}
        <span className="absolute inset-0 translate-y-full bg-[#1F3D35] transition-transform duration-300 ease-out group-hover:translate-y-0" />

        {/* Text */}
        <span className="relative z-10 font-medium">Book Consultation</span>
      </Button>

      {/* Render the modal component and pass the state and close function */}
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};