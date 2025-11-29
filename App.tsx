
import React, { useState, useEffect, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { CustomCursor } from './components/ui/CustomCursor';
import { Preloader } from './components/Preloader';
import { ScrollToTop } from './components/ui/ScrollToTop';

// Lazy Load Components
const About = React.lazy(() => import('./components/Features').then(module => ({ default: module.About })));
const Services = React.lazy(() => import('./components/Features').then(module => ({ default: module.Services })));
const WhyChooseUs = React.lazy(() => import('./components/Features').then(module => ({ default: module.WhyChooseUs })));
const Integrations = React.lazy(() => import('./components/Integrations').then(module => ({ default: module.Integrations })));
const FeaturesDetail = React.lazy(() => import('./components/FeaturesDetail').then(module => ({ default: module.FeaturesDetail })));
const Process = React.lazy(() => import('./components/Process').then(module => ({ default: module.Process })));
const Pricing = React.lazy(() => import('./components/Testimonials').then(module => ({ default: module.Pricing })));
const Testimonials = React.lazy(() => import('./components/Testimonials').then(module => ({ default: module.Testimonials })));
const FAQ = React.lazy(() => import('./components/Footer').then(module => ({ default: module.FAQ })));
const Blog = React.lazy(() => import('./components/Footer').then(module => ({ default: module.Blog })));
const Footer = React.lazy(() => import('./components/Footer').then(module => ({ default: module.Footer })));
const Login = React.lazy(() => import('./components/Login').then(module => ({ default: module.Login })));
const Signup = React.lazy(() => import('./components/Signup').then(module => ({ default: module.Signup })));

type PageState = 'home' | 'login' | 'signup';

function App() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<PageState>('home');

  // Scroll to top on refresh and manage body scroll
  useEffect(() => {
    window.scrollTo(0, 0);
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      // Use empty string to remove inline style and revert to CSS file rules
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [loading]);

  useEffect(() => {
    // Reset scroll when changing pages
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleNavigation = (page: string) => {
    setCurrentPage(page as PageState);
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white overflow-x-hidden selection:bg-accent selection:text-black">
      <CustomCursor />

      <AnimatePresence mode="wait">
        {loading && (
          <Preloader onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {/* Render Pages based on state */}
      <Suspense fallback={
        <div className="h-screen w-full flex items-center justify-center bg-[#050505]">
          <div className="w-10 h-10 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
        </div>
      }>
        {currentPage === 'home' && (
          <>
            <Navbar onNavigate={handleNavigation} />
            <main>
              <Hero />
              <Marquee />
              <About />
              <Services />
              <WhyChooseUs />
              <Integrations />
              <FeaturesDetail />
              <Process />
              <Pricing />
              <Testimonials />
              <FAQ />
              <Blog />
            </main>
            <Footer />
            <ScrollToTop />
          </>
        )}

        {currentPage === 'login' && (
          <Login onNavigate={handleNavigation} />
        )}

        {currentPage === 'signup' && (
          <Signup onNavigate={handleNavigation} />
        )}
      </Suspense>

    </div>
  );
}

export default App;
