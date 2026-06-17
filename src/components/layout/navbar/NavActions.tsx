// import { Button } from "../../common/Button";

// export const NavActions = () => {
//   return (
//     <div className="hidden lg:flex items-center gap-4">
//       <Button 
//         className="group relative overflow-hidden rounded-xl border border-white bg-transparent px-8 py-3 text-white transition-colors duration-300 hover:text-black cursor-pointer"
//       >
//         {/* Animated Background (Starts pushed down below the button, slides up on hover) */}
//         <span className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 ease-out group-hover:translate-y-0" />
        
//         {/* Button Text (Relative z-index keeps it layered above the white background) */}
//         <span className="relative z-10 font-medium">
//           Book Consultation
//         </span>
//       </Button>
//     </div>
//   );
// };







import { Button } from "../../common/Button";

export const NavActions = () => {
  return (
    <div className="hidden lg:flex items-center gap-4">
      <Button 
        className="group relative overflow-hidden rounded-xl border border-white bg-transparent px-8 py-3 text-white transition-colors duration-300 hover:text-[#1F3D35] cursor-pointer"
      >
        {/* Animated Fill Background */}
        <span className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 ease-out group-hover:translate-y-0" />
        
        {/* Text */}
        <span className="relative z-10 font-medium">
          Book Consultation
        </span>
      </Button>
    </div>
  );
};