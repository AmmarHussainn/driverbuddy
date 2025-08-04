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
      value: 10,
      suffix: '+',
      label: 'Carriers Onboarded',
      icon: '🚛',
      description: 'Successfully integrated carriers'
    },
    {
      id: 'timeSaved',
      value: 75,
      suffix: '%',
      label: 'Time Saved',
      icon: '⚡',
      description: 'Reduction in manual outreach'
    },
    {
      id: 'calls',
      value: 24,
      suffix: '/7',
      label: 'Automated Calls',
      icon: '📞',
      description: 'Round-the-clock availability'
    },
    {
      id: 'efficiency',
      value: 95,
      suffix: '%',
      label: 'Success Rate',
      icon: '🎯',
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
    <div 
      ref={sectionRef} 
      className="relative py-20 overflow-hidden"
      style={{ backgroundColor: '#f9f9f9' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              backgroundColor: '#602fc9',
              opacity: 0.1,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 4 + 3}s`
            }}
          />
        ))}
        
        {/* Gradient orbs */}
        <div 
          className="absolute -top-24 -left-24 w-48 h-48 rounded-full mix-blend-multiply filter blur-xl animate-blob"
          style={{ backgroundColor: '#602fc9', opacity: 0.03 }}
        ></div>
        <div 
          className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"
          style={{ backgroundColor: '#faa61b', opacity: 0.03 }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div 
            className="inline-flex items-center px-6 py-3 rounded-full text-white text-sm font-semibold mb-6"
            style={{ backgroundColor: '#602fc9' }}
          >
            <svg className="w-4 h-4 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Real-Time Impact
          </div>
          
          <h2 
            className="text-4xl md:text-6xl font-black mb-4"
            style={{ color: '#252a31' }}
          >
            Numbers That{' '}
            <span style={{ color: '#faa61b' }}>Matter</span>
          </h2>
          
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ color: '#252a31', opacity: 0.7 }}
          >
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
              <div 
                className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-500 overflow-hidden border"
                style={{ borderColor: 'rgba(37, 42, 49, 0.1)' }}
              >
                {/* Background gradient overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl"
                  style={{ backgroundColor: index % 2 === 0 ? '#602fc9' : '#faa61b' }}
                ></div>
                
                {/* Floating icon background */}
                <div className="absolute -top-4 -right-4 text-6xl opacity-10 group-hover:opacity-20 transition-opacity duration-500 group-hover:rotate-12 transform transition-transform duration-500">
                  {stat.icon}
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div 
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: index % 2 === 0 ? '#602fc9' : '#faa61b' }}
                  >
                    <span className="text-3xl group-hover:animate-bounce">{stat.icon}</span>
                  </div>

                  {/* Number */}
                  <div 
                    className="text-5xl md:text-6xl font-black mb-2"
                    style={{ color: index % 2 === 0 ? '#602fc9' : '#faa61b' }}
                  >
                    {animatedValues[stat.id]}{stat.suffix}
                  </div>

                  {/* Label */}
                  <h3 
                    className="text-xl font-bold mb-3 group-hover:opacity-90 transition-opacity duration-300"
                    style={{ color: '#252a31' }}
                  >
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p 
                    className="text-sm group-hover:opacity-90 transition-opacity duration-300"
                    style={{ color: '#252a31', opacity: 0.7 }}
                  >
                    {stat.description}
                  </p>

                  {/* Animated progress bar */}
                  <div 
                    className="mt-6 w-full rounded-full h-2 overflow-hidden"
                    style={{ backgroundColor: 'rgba(37, 42, 49, 0.1)' }}
                  >
                    <div 
                      className="h-full rounded-full transition-all duration-2000 ease-out"
                      style={{ 
                        backgroundColor: index % 2 === 0 ? '#602fc9' : '#faa61b',
                        width: isVisible ? `${(animatedValues[stat.id] / stat.value) * 100}%` : '0%',
                        transitionDelay: `${index * 200 + 500}ms`
                      }}
                    ></div>
                  </div>
                </div>

                {/* Hover effect shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>

              {/* Floating particles on hover */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      backgroundColor: index % 2 === 0 ? '#602fc9' : '#faa61b',
                      left: `${20 + i * 20}%`,
                      top: `${10 + i * 25}%`,
                      animationDelay: `${i * 100}ms`
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
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