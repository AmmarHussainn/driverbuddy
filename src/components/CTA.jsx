import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CTA() {
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      className="relative overflow-hidden min-h-screen flex items-center"
      style={{ background: 'linear-gradient(135deg, #252a31, #1a1f25)' }}
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{ backgroundColor: '#602fc9' }}></div>
        <div className="absolute top-40 right-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-1000" style={{ backgroundColor: '#faa61b' }}></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000" style={{ backgroundColor: '#602fc9' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{ 
          backgroundImage: 'linear-gradient(rgba(250,166,27,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(250,166,27,0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 100%)'
        }}></div>
        
        {/* Interactive Light Effect */}
        <div 
          className="absolute w-96 h-96 rounded-full pointer-events-none transition-all duration-300 ease-out"
          style={{
            background: `radial-gradient(circle, rgba(96, 47, 201, 0.15) 0%, transparent 70%)`,
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{ 
            background: 'linear-gradient(135deg, rgba(96, 47, 201, 0.2), rgba(250, 166, 27, 0.2))',
            color: '#faa61b',
            border: '1px solid rgba(96, 47, 201, 0.3)'
          }}>
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: '#faa61b' }}></span>
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: '#faa61b' }}></span>
            </span>
            🚀 AI-Powered Growth Engine
          </div>

          {/* Main Heading with Gradient Text */}
          <h1 className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight mb-8 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{ color: '#f9f9f9' }}>
            Ready to 
            <span className="relative inline-block">
              <span className="animate-pulse" style={{ 
                background: 'linear-gradient(135deg, #602fc9, #faa61b)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                10X
              </span>
              <span className="absolute -top-2 -right-2 text-2xl">⚡</span>
            </span>
            <br />Your Growth?
          </h1>

          {/* Subtitle */}
          <p className={`text-xl sm:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{ color: '#f9f9f9' }}>
           Join us and use  AI to 
            <span className="relative inline-block mx-2">
              <span className="font-bold" style={{ 
                background: 'linear-gradient(135deg, #faa61b, #602fc9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>revolutionize</span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5" style={{ background: 'linear-gradient(135deg, #faa61b, #602fc9)' }}></span>
            </span>
            driver outreach. See results within 24 hours or your money back.
          </p>

          {/* Stats */}
          <div className={`grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1" style={{ color: '#f9f9f9' }}>300%</div>
              <div className="text-sm" style={{ color: '#f9f9f9', opacity: 0.7 }}>ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1" style={{ color: '#f9f9f9' }}>24h</div>
              <div className="text-sm" style={{ color: '#f9f9f9', opacity: 0.7 }}>Setup Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1" style={{ color: '#f9f9f9' }}>99.8%</div>
              <div className="text-sm" style={{ color: '#f9f9f9', opacity: 0.7 }}>Uptime</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center max-w-lg mx-auto transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button
             onClick={() => navigate('/contactus')}
            
            className="group relative cursor-pointer w-full sm:w-auto px-8 py-4 font-bold rounded-xl shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            style={{ 
              background: 'linear-gradient(135deg, #602fc9, #faa61b)',
              color: 'white',
              boxShadow: '0 25px 50px -12px rgba(96, 47, 201, 0.25)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'linear-gradient(135deg, #7c3aed, #fb923c)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'linear-gradient(135deg, #602fc9, #faa61b)';
            }}>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, #8b5cf6, #fbbf24)' }}></span>
              <span className="relative flex items-center justify-center">
                🎯 Book Demo Now
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 -z-10" style={{ background: 'linear-gradient(135deg, #602fc9, #faa61b)' }}></div>
            </button>

            <button
            onClick={() => navigate('/contactus')}
            className="group relative w-full cursor-pointer sm:w-auto px-8 py-4 font-bold rounded-xl backdrop-blur-sm transform hover:-translate-y-1 transition-all duration-300 overflow-hidden border-2"
            style={{ 
              backgroundColor: 'rgba(249, 249, 249, 0.1)',
              color: '#f9f9f9',
              borderColor: '#602fc9'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(96, 47, 201, 0.2)';
              e.target.style.borderColor = '#faa61b';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'rgba(249, 249, 249, 0.1)';
              e.target.style.borderColor = '#602fc9';
            }}>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, #602fc9, #faa61b)' }}></span>
              <span className="relative flex items-center justify-center">
                ⚡ Start Free Trial
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </button>
          </div>

          {/* Trust indicators */}
          <div className={`mt-12 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-sm mb-4" style={{ color: '#f9f9f9', opacity: 0.7 }}>
              ✅ No setup fees • ✅ Cancel anytime • ✅ 30-day money-back guarantee
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-xs font-semibold" style={{ color: '#f9f9f9' }}>TRUSTED BY</div>
              <div className="flex space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">
                    <span className="text-xs font-bold" style={{ color: '#faa61b' }}>★</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}