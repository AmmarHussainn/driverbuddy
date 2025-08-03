import { useState } from 'react';
import Footer from './components/Footer';
import FeaturesBanner from './components/FeaturesBanner';
import CTA from './components/CTA';
import Pricing from './components/Pricing';
import TestimonialSection from './components/TestimonialSection';
import Demo from './components/Demo';
import Solution from './components/Solution';
import Problem from './components/Problem';
import Stats from './components/Stats';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-50 font-sans">
      {/* Navigation */}
      <Navbar/>

      {/* Hero Section */}
     <Hero/>

      {/* Stats Section */}
    <Stats/>

      {/* Problem Section */}
       <Problem/>

      {/* Solution Section */}
     
      <Solution />

      {/* Demo Section */}
     <Demo/>

      {/* Testimonial Section */}
     <TestimonialSection/>

      {/* Pricing Section */}
     <Pricing/>

      {/* CTA Section */}
     <CTA/>

      {/* Features Banner */}
     <FeaturesBanner/>

      {/* Footer */}
     <Footer/>
    </div>
  );
}