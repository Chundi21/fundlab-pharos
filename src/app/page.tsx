"use client"
import HeroSection from '@/components/hero-section';
import FeaturesSection from '@/components/features';
import CampaignsSection from "@/components/CampaignsSection"
import AboutSection from '@/components/about';
import HowItWorksComponent from '@/components/HowItWorks'

export default function Home() {
  return (
    <main className="bg-[url('/assets/Campaign.jpg')] bg-cover bg-center min-h-screen">
        <HeroSection/>
        <FeaturesSection/>
        <CampaignsSection/>
        <HowItWorksComponent/>
        <AboutSection/>
    </main>
  );
}
