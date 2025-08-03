import { useState, useEffect, useRef } from 'react';

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({
    carriers: 0,
    timeSaved: 0,
    calls: 0,
    efficiency: 0
  });
  const sectionRef = useRef(null);

  const statsData = [
    {
      id: 'carriers',
      value: 150,
      suffix: '+',
      label: 'Carriers Onboarded',
      icon: '🚛',
      color: 'from-blue-600 to-cyan-500',
      bgColor: 'bg-blue-50',
      description: 'Successfully integrated carriers'
    },
    {
      id: 'timeSaved',
      value: 75,
      suffix: '%',
      label: 'Time Saved',
      icon: '⚡',
      color: 'from-green-500 to-emerald-400',
      bgColor: 'bg-green-50',
      description: 'Reduction in manual outreach'
    },
    {
      id: 'calls',
      value: 24,
      suffix: '/7',
      label: 'Automated Calls',
      icon: '📞',
      color: 'from-purple-600 to-pink-500',
      bgColor: 'bg-purple-50',
      description: 'Round-the-clock availability'
    },
    {
      id: 'efficiency',
      value: 95,
      suffix: '%',
      label: 'Success Rate',
      icon: '🎯',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      description: 'Driver conversion efficiency'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateNumbers();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateNumbers = () => {
    statsData.forEach((stat) => {
      let current = 0;
      const increment = stat.value / 60; // 60 frames for smooth animation
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timer);
        }
        setAnimatedValues(prev => ({
          ...prev,
          [stat.id]: Math.floor(current)
        }));
      }, 30);
    });
  };

  return (
    <div ref={sectionRef} className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-blue-200 bg-opacity-20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 4 + 3}s`
            }}
          />
        ))}
        
        {/* Gradient orbs */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-semibold mb-6">
            <svg className="w-4 h-4 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Real-Time Impact
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 mb-4">
            Numbers That Matter
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the measurable impact our AI solution delivers to dispatching agencies worldwide
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <div
              key={stat.id}
              className={`group relative transform transition-all duration-1000 hover:scale-105 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Card */}
              <div className={`relative ${stat.bgColor} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-500 overflow-hidden border border-white/50`}>
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Floating icon background */}
                <div className="absolute -top-4 -right-4 text-6xl opacity-10 group-hover:opacity-20 transition-opacity duration-500 group-hover:rotate-12 transform transition-transform duration-500">
                  {stat.icon}
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl group-hover:animate-bounce">{stat.icon}</span>
                  </div>

                  {/* Number */}
                  <div className={`text-5xl md:text-6xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>
                    {animatedValues[stat.id]}{stat.suffix}
                  </div>

                  {/* Label */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors duration-300">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {stat.description}
                  </p>

                  {/* Animated progress bar */}
                  <div className="mt-6 w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-2000 ease-out`}
                      style={{ 
                        width: isVisible ? `${(animatedValues[stat.id] / stat.value) * 100}%` : '0%',
                        transitionDelay: `${index * 200 + 500}ms`
                      }}
                    ></div>
                  </div>
                </div>

                {/* Hover effect shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>

              {/* Floating particles on hover */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-1 h-1 bg-gradient-to-r ${stat.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${10 + i * 20}%`,
                      animationDelay: `${i * 100}ms`
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center space-x-4 bg-white rounded-2xl p-6 shadow-xl">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-2 border-white flex items-center justify-center text-white font-bold text-sm"
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-gray-800">Join 150+ satisfied carriers</p>
              <p className="text-xs text-gray-600">Experience the AI difference today</p>
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Get Started →
            </button>
          </div>
        </div>
      </div>

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
      `}</style>
    </div>
  );
}