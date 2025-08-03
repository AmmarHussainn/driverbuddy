import { useState, useEffect, useRef } from 'react';

export default function Problem() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const [animatedValues, setAnimatedValues] = useState({
    hours: 0,
    opportunities: 0,
    growth: 0
  });
  const sectionRef = useRef(null);

  const problemData = [
    {
      id: 'hours',
      value: 15,
      suffix: '+',
      label: 'Hours Per Week',
      description: 'Wasted on manual calls and follow-ups that could be automated',
      icon: '⏰',
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-50',
      pain: 'high'
    },
    {
      id: 'opportunities',
      value: 40,
      suffix: '%',
      label: 'Lost Opportunities',
      description: 'Drivers slip away while you\'re stuck making repetitive calls',
      icon: '💸',
      color: 'from-orange-500 to-yellow-500',
      bgColor: 'bg-orange-50',
      pain: 'medium'
    },
    {
      id: 'growth',
      value: 0,
      suffix: '',
      displayValue: 'Limited',
      label: 'Growth Potential',
      description: 'Can\'t scale without hiring expensive sales staff',
      icon: '📉',
      color: 'from-yellow-500 to-red-600',
      bgColor: 'bg-yellow-50',
      pain: 'critical'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateNumbers();
          startCardRotation();
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
    problemData.forEach((problem) => {
      if (problem.value > 0) {
        let current = 0;
        const increment = problem.value / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= problem.value) {
            current = problem.value;
            clearInterval(timer);
          }
          setAnimatedValues(prev => ({
            ...prev,
            [problem.id]: Math.floor(current)
          }));
        }, 40);
      }
    });
  };

  const startCardRotation = () => {
    const interval = setInterval(() => {
      setActiveCard(prev => (prev + 1) % problemData.length);
    }, 3000);

    return () => clearInterval(interval);
  };

  return (
    <div ref={sectionRef} className="relative bg-gradient-to-br from-gray-50 via-red-50 to-orange-50 py-24 overflow-hidden">
      {/* Dramatic Background Elements */}
      <div className="absolute inset-0">
        {/* Warning particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-red-400 bg-opacity-20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
        
        {/* Dark gradient orbs for drama */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dramatic Header */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Warning Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-red-100 to-orange-100 text-red-800 text-sm font-bold mb-8 animate-pulse">
            <svg className="w-5 h-5 mr-2 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            CRITICAL BUSINESS PROBLEM
          </div>
          
          <h2 className="text-lg font-bold text-red-600 uppercase tracking-wider mb-4 animate-pulse">
            The $800B Industry Crisis
          </h2>
          
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 mb-8 leading-tight">
            Manual Driver Outreach
            <br />
            <span className="text-4xl md:text-6xl">Is Killing Your Profits </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            Dispatching agencies spend <span className="text-red-600 font-bold">endless hours</span> calling drivers, 
            chasing leads, and onboarding carriers. It's <span className="text-orange-600 font-bold">slow, costly, and crushing your growth</span>. 
            In the $800 billion trucking industry, <span className="text-yellow-600 font-bold">you can't afford to lag behind</span>.
          </p>
        </div>

        {/* Pain Points Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {problemData.map((problem, index) => (
            <div
              key={problem.id}
              className={`group relative transform transition-all duration-1000 hover:scale-105 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-20 opacity-0'
              } ${
                activeCard === index ? 'scale-105 shadow-2xl' : ''
              }`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              {/* Card with dramatic styling */}
              <div className={`relative ${problem.bgColor} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 ${
                problem.pain === 'critical' ? 'border-red-300' : 
                problem.pain === 'high' ? 'border-orange-300' : 'border-yellow-300'
              }`}>
                
                {/* Danger indicator */}
                <div className={`absolute top-4 right-4 w-4 h-4 rounded-full ${
                  problem.pain === 'critical' ? 'bg-red-500 animate-ping' :
                  problem.pain === 'high' ? 'bg-orange-500 animate-pulse' : 'bg-yellow-500 animate-bounce'
                }`}></div>

                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${problem.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Warning icon background */}
                <div className="absolute -bottom-8 -right-8 text-8xl opacity-5 group-hover:opacity-10 transition-opacity duration-500 group-hover:rotate-12 transform transition-transform duration-500">
                  {problem.icon}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with warning styling */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300 border-2 ${
                    problem.pain === 'critical' ? 'border-red-200' : 
                    problem.pain === 'high' ? 'border-orange-200' : 'border-yellow-200'
                  }`}>
                    <span className="text-3xl group-hover:animate-bounce">{problem.icon}</span>
                  </div>

                  {/* Number/Value */}
                  <div className={`text-6xl md:text-7xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r ${problem.color} ${
                    problem.pain === 'critical' ? 'animate-pulse' : ''
                  }`}>
                    {problem.displayValue || `${animatedValues[problem.id]}${problem.suffix}`}
                  </div>

                  {/* Label */}
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                    {problem.label}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                    {problem.description}
                  </p>

                  {/* Pain level indicator */}
                  <div className="mt-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Pain Level:</span>
                      <div className="flex space-x-1">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-3 h-3 rounded-full ${
                              (problem.pain === 'critical' && i < 3) ||
                              (problem.pain === 'high' && i < 2) ||
                              (problem.pain === 'medium' && i < 1)
                                ? 'bg-red-500'
                                : 'bg-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Dramatic Call-out */}
        <div className={`text-center transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="relative inline-block">
            
            
            {/* Floating elements around the call-out */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-red-400 rounded-full opacity-30 animate-ping"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-orange-400 rounded-full opacity-40 animate-pulse"></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-yellow-400 rounded-full opacity-50 animate-bounce"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}