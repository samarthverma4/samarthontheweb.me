import MinimalNavigation from '@/components/MinimalNavigation'
import MinimalHero from '@/components/MinimalHero'
import WorkSection from '@/components/WorkSection'
import ExperimentsGrid from '@/components/ExperimentsGrid'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <MinimalNavigation />
      <MinimalHero />
      <WorkSection />
      <ExperimentsGrid />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
