'use client';

import {
  AboutSection,
  ClientsSection,
  ContactSection,
  Footer,
  HeroSection,
  PHONE_NUMBER,
  ResonixNavbar,
  ReviewsSection,
  ServicesSection,
  TeamSection,
  WorksSection,
  useContactForm,
} from '@/features/resonix';

export default function ResonixPage() {
  // Contact form logic
  const { form, isSubmitting, submitStatus, handleSubmit } = useContactForm();

  const handleRequestDemo = () => {
    const message = encodeURIComponent(
      "Hey, I'm looking to get software developed for my business. Are you available to discuss?"
    );

    window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, '_blank');
  };

  const handleViewWork = () => {
    const element = document.querySelector('#works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Navigation */}
      <ResonixNavbar onRequestDemo={handleRequestDemo} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection onRequestDemo={handleRequestDemo} onViewWork={handleViewWork} />

        {/* About Section */}
        <AboutSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Works/Portfolio Section */}
        <WorksSection />

        {/* Clients Section */}
        <ClientsSection />

        {/* Reviews/Testimonials Section */}
        <ReviewsSection />

        {/* Team Section */}
        <TeamSection />

        {/* Contact Section */}
        <ContactSection
          form={form}
          isSubmitting={isSubmitting}
          submitStatus={submitStatus}
          onSubmit={handleSubmit}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
