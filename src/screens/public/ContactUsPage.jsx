import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ContactPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
    <Navbar/>
    
    <div className="relative min-h-screen bg-[#f9f9f9] overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#252a31] text-white mb-6">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Schedule a Meeting
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#252a31] mb-4">
            Let's Talk AI Solutions
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Book time directly with our team to explore how we can transform your driver outreach
          </p>
        </div>

        {/* Calendly Container */}
        <div className={`bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="p-1 h-[700px]">
            <iframe
              src="https://calendly.com/ahmedrazasst/30min"
              className="w-full h-full rounded-xl border-0"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>

        {/* Alternative Contact */}
        <div className={`mt-16 text-center transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-xl font-medium text-[#252a31] mb-4">Prefer another way to connect?</h3>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="tel:(602) 529-6927" 
              className="flex items-center px-6 py-3 bg-[#602fc9] hover:bg-[#5028b0] text-white rounded-full transition-all duration-300 group"
            >
              <svg className="w-5 h-5 mr-2 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (602) 529-6927
            </a>
            
            <a 
              href="mailto:dispatch@haulnova.com" 
              className="flex items-center px-6 py-3 bg-[#faa61b] hover:bg-[#e09516] text-white rounded-full transition-all duration-300 group"
            >
              <svg className="w-5 h-5 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              dispatch@haulnova.com
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Cursor Trail */}
      <div 
        className="fixed w-6 h-6 bg-[#602fc9] rounded-full pointer-events-none z-50 transition-transform duration-150"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: 'scale(0.8)',
          opacity: 0.7
        }}
      />
    </div>
    <Footer/>
    </>
  );
}