'use client';

import { useEffect } from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import ProblemSection from './ProblemSection';
import EngagementFeatures from './EngagementFeatures';
import OperationalFeatures from './OperationalFeatures';
import RevenueModel from './RevenueModel';
import Advantages from './Advantages';
import Testimonials from './Testimonials';
import FinalCTA from './FinalCTA';
import Footer from './Footer';

export default function LandingPage() {
  useEffect(() => {
    // GA4 Event Tracking
    const trackScrollDepth = () => {
      const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollDepth >= 25 && scrollDepth < 50) {
        gtag('event', 'scroll_depth', {
          event_category: 'engagement',
          event_label: '25%',
          value: 25
        });
      } else if (scrollDepth >= 50 && scrollDepth < 75) {
        gtag('event', 'scroll_depth', {
          event_category: 'engagement',
          event_label: '50%',
          value: 50
        });
      } else if (scrollDepth >= 75) {
        gtag('event', 'scroll_depth', {
          event_category: 'engagement',
          event_label: '75%',
          value: 75
        });
      }
    };

    const handleScroll = () => {
      requestAnimationFrame(trackScrollDepth);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCTAClick = (ctaType) => {
    gtag('event', 'cta_click', {
      event_category: 'conversion',
      event_label: ctaType,
      value: 1
    });
  };

  const handleFormSubmit = (formType) => {
    gtag('event', 'form_submit', {
      event_category: 'conversion',
      event_label: formType,
      value: 1
    });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header onCTAClick={handleCTAClick} />
      <main>
        <HeroSection onCTAClick={handleCTAClick} />
        <ProblemSection />
        <EngagementFeatures />
        <OperationalFeatures />
        <RevenueModel />
        <Advantages />
        <Testimonials />
        <FinalCTA onCTAClick={handleCTAClick} onFormSubmit={handleFormSubmit} />
      </main>
      <Footer />
    </div>
  );
}
