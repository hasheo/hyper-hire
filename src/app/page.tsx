import LogoWhite from '@/components/atoms/LogoWhite';
import Footer from '@/components/organisms/Footer';
import HeroSection from '@/components/organisms/HeroSection';
import Navbar from '@/components/organisms/Navbar';

export default function Home() {
  return (
    <div className="container bg-gradient-to-br from-[#26C2B9] from-20% to-[#288BE7] to-90% md:max-w-full">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}
