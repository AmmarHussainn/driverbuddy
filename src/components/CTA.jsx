import { useState, useEffect } from 'react';

export default function CTA() {
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
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen flex items-center"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-1000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]"></div>
        
        {/* Interactive Light Effect */}
        <div 
          className="absolute w-96 h-96 rounded-full pointer-events-none transition-all duration-300 ease-out"
          style={{
            background: `radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)`,
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30 backdrop-blur-sm mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            🚀 AI-Powered Growth Engine
          </div>

          {/* Main Heading with Gradient Text */}
          <h1 className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-200 leading-tight mb-8 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Ready to 
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                10X
              </span>
              <span className="absolute -top-2 -right-2 text-2xl">⚡</span>
            </span>
            <br />Your Growth?
          </h1>

          {/* Subtitle */}
          <p className={`text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Join <span className="text-blue-400 font-semibold">2,500+</span> agencies using AI to 
            <span className="relative inline-block mx-2">
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent font-bold">revolutionize</span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-blue-500"></span>
            </span>
            driver outreach. See results within 24 hours or your money back.
          </p>

          {/* Stats */}
          <div className={`grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">300%</div>
              <div className="text-sm text-gray-400">ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">24h</div>
              <div className="text-sm text-gray-400">Setup Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">99.8%</div>
              <div className="text-sm text-gray-400">Uptime</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center max-w-lg mx-auto transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold rounded-xl shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              <span className="relative flex items-center justify-center">
                🎯 Book Demo Now
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 -z-10"></div>
            </button>

            <button className="group relative w-full sm:w-auto px-8 py-4 bg-gray-800/50 hover:bg-gray-700/70 text-white font-bold rounded-xl border-2 border-gray-600 hover:border-gray-500 backdrop-blur-sm transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              <span className="relative flex items-center justify-center">
                ⚡ Start Free Trial
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </button>
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