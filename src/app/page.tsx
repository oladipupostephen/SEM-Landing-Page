import Navbar from "@/Components/Navbar";
import HeroSection from "@/Components/HeroSection";
import VisibilityChallenge from "@/Components/VisibilityChallenge";
import MissionVision from "@/Components/MissionVision";
import WaitlistForm from "@/Components/WaitlistForm";
import Footer from "@/Components/Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <VisibilityChallenge />
      <MissionVision />
      <WaitlistForm />
      <Footer />
    </main>
  );
}
