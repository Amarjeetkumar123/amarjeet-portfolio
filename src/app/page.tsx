"use client";

import { CertificationsSection } from "@/components/certifications-section";
import { ContactSection } from "@/components/contact-section";
import { ExperienceSection } from "@/components/experience-section";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SkillsSection } from "@/components/skills-section";
import { StickySocials } from "@/components/portfolio-ui";

function Divider() {
  return (
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <div className="divider" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <StickySocials />
      <SiteHeader />
      <HeroSection />
      <Divider />
      <ExperienceSection />
      <Divider />
      <ProjectsSection />
      <Divider />
      <SkillsSection />
      <Divider />
      <CertificationsSection />
      <Divider />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}