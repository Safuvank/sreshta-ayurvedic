// import Link from 'next/link';
// import Image from 'next/image';



// export const NavLogo = () => {
 
//   return (
//     <Link href="/" className="flex items-center gap-2">
//       <Image
//         src="/images/sreshta-logo.png"
//         alt="Sreshta Ayurvedic Way of Advanced Care Logo"
//         width={160}
//         height={30}
//         priority
//       />
//     </Link>
//   );
// };








import Link from 'next/link';
import Image from 'next/image';

export const NavLogo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 relative z-10">
      <Image
        src="/images/sreshta-logo-color.png"
        alt="Sreshta Ayurvedic Hospital Logo"
        width={160}
        height={40}
        priority
        className="object-contain"
      />
    </Link>
  );
};