import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import VideoCarousel from "@/components/home/VideoCarousel";
import QuickActions from "@/components/home/QuickActions";
import SpecialtiesSection from "@/components/home/SpecialtiesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import DoctorsPreview from "@/components/home/DoctorsPreview";
import FacilitiesSection from "@/components/home/FacilitiesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />

      {/* Video Section */}
      <section className="w-full bg-black overflow-hidden relative">
        <div className="w-full aspect-video h-[500px] md:h-[700px]">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/test.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </section>

      <VideoCarousel />
      <QuickActions />
      <SpecialtiesSection />
      <WhyChooseUs />
      <DoctorsPreview />
      <FacilitiesSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
