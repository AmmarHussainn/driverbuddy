import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const words = ['Automate', 'Accelerate', 'Amplify', 'Achieve'];
  
  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#f9f9f9' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              backgroundColor: '#602fc9',
              opacity: 0.1,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
        
        {/* Gradient Orbs */}
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl animate-blob"
          style={{ backgroundColor: '#602fc9', opacity: 0.05 }}
        ></div>
        <div 
          className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"
          style={{ backgroundColor: '#faa61b', opacity: 0.05 }}
        ></div>
        <div 
          className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"
          style={{ backgroundColor: '#252a31', opacity: 0.03 }}
        ></div>
      </div>

      {/* Interactive Cursor Trail */}
      <div 
        className="fixed w-4 h-4 rounded-full pointer-events-none z-50 transition-transform duration-150"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          backgroundColor: '#602fc9',
          opacity: 0.6,
          transform: 'scale(0.8)'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto py-20 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div 
            className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-medium text-white mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ backgroundColor: '#602fc9' }}
          >
            <svg className="w-4 h-4 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            AI-Powered Driver Outreach
          </div>

          {/* Main Headline with Word Animation */}
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="inline-block">
              <span 
                className="animate-pulse"
                style={{ color: '#252a31' }}
              >
                {words[currentWord]}
              </span>
            </span>
            <br />
            <span 
              className="text-4xl md:text-6xl lg:text-7xl"
              style={{ color: '#faa61b' }}
            >
              Driver Outreach
            </span>
            <br />
            <span 
              className="text-3xl md:text-5xl lg:text-6xl"
              style={{ color: '#602fc9' }}
            >
              with AI Magic ✨
            </span>
          </h1>

          {/* Subtitle with Typewriter Effect */}
          <div className={`text-2xl md:text-3xl font-light mb-6 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span 
              className="inline-block border-r-2 animate-pulse"
              style={{ 
                color: '#252a31', 
                borderColor: '#faa61b' 
              }}
            >
              Save Time, Win More Loads
            </span>
          </div>

          {/* Description */}
          <p 
            className={`text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-12 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ color: '#252a31' }}
          >
            Our revolutionary AI voice agent{' '}
            <span className="font-semibold" style={{ color: '#faa61b' }}>
              calls, pitches, and onboards
            </span>{' '}
            truck drivers for dispatching agencies,{' '}
            <span className="font-semibold" style={{ color: '#602fc9' }}>
              cutting outreach time by 50%
            </span>{' '}
            while delivering results you never thought possible.
          </p>

          {/* Stats Row */}
          <div className={`flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-12 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {[
              { number: '50%', label: 'Time Saved' },
              { number: '300+', label: 'Happy Clients' },
              { number: '24/7', label: 'AI Availability' }
            ].map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div 
                  className="text-3xl md:text-4xl font-bold group-hover:scale-110 transition-transform duration-300"
                  style={{ color: '#faa61b' }}
                >
                  {stat.number}
                </div>
                <div 
                  className="text-sm uppercase tracking-wide"
                  style={{ color: '#252a31', opacity: 0.7 }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row justify-center items-center gap-6 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button 
              className="group relative px-12 py-4 text-white text-lg font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              style={{ 
                backgroundColor: '#602fc9',
                boxShadow: '0 25px 50px -12px rgba(96, 47, 201, 0.25)'
              }}
            >
              <span className="relative z-10 flex items-center">
                <svg className="w-5 h-5 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Try It Free - No Risk
              </span>
              <div className="absolute inset-0 bg-white bg-opacity-20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </button>
            
            <button 
              className="group px-12 py-4 bg-transparent border-2 text-lg font-bold rounded-full transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              style={{ 
                borderColor: '#252a31',
                color: '#252a31'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#252a31';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#252a31';
              }}
            >
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Watch Demo
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: `linear-gradient(to top, #f9f9f9, transparent)`
        }}
      ></div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}