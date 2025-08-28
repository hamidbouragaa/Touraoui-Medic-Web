import Header from '@/components/header';
import Footer from '@/components/footer';
import HeroLogo from '@/components/hero-logo';
import Services from '@/components/services';
import HealthResources from '@/components/health-resources';
import MapSection from '@/components/map-section';
import InquiryForm from '@/components/inquiry-form';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroLogo />
        <Services />
        <HealthResources />
        <MapSection />
        <InquiryForm />
      </main>
      <Footer />
    </div>
  );
}
