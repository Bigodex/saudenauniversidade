import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { AboutSection } from "@/components/landing/about-section"
import { ResultsSection } from "@/components/landing/results-section"
import { InsightsSection } from "@/components/landing/insights-section"
import { EducationSection } from "@/components/landing/education-section"
import { TipsSection } from "@/components/landing/tips-section"
import { ImpactSection } from "@/components/landing/impact-section"
import { ConclusionSection } from "@/components/landing/conclusion-section"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <ResultsSection />
      <InsightsSection />
      <EducationSection />
      <TipsSection />
      <ImpactSection />
      <ConclusionSection />
      <Footer />
    </main>
  )
}
