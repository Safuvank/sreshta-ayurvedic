import Link from 'next/link';
import Image from 'next/image';



export const NavLogo = () => {
 
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/images/sreshta-logo.png"
        alt="Sreshta Ayurvedic Way of Advanced Care Logo"
        width={185}
        height={30}
        priority
      />
    </Link>
  );
};