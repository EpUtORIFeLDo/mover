import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { DarkModeProvider } from './context/DarkModeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import PriceCalculator from './components/PriceCalculator';
import TrackingSection from './components/TrackingSection';
import Testimonials from './components/Testimonials';
import BookingBanner from './components/BookingBanner';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <DarkModeProvider>
        <div className="min-h-screen bg-white dark:bg-primary transition-colors duration-200">
          <Header />
          <main>
            <Hero />
            <Features />
            <HowItWorks />
            <PriceCalculator />
            <TrackingSection />
            <Testimonials />
            <BookingBanner />
            <ContactForm />
          </main>
          <Footer />
        </div>
      </DarkModeProvider>
    </Router>
  );
}

export default App;