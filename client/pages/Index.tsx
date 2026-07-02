import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import CategoryVideos from "@/components/CategoryVideos";
import FeaturedSlider from "@/components/FeaturedSlider";
import PopularEventsSection from "@/components/PopularEventsSection";
import KnockoutGamesSection from "@/components/KnockoutGamesSection";
import HybridSliderSection from "@/components/HybridSliderSection";

export default function Index() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header />
      <HeroSection />
      <CategoryVideos />
      <FeaturedSlider />
      <PopularEventsSection />
      <KnockoutGamesSection />
      <HybridSliderSection />
      <Footer />
    </div>
  );
}
