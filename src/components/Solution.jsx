import { useState, useEffect, useRef } from 'react';

export default function Solution() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [animatedValues, setAnimatedValues] = useState({
    timeSaved: 0,
    callsHandled: 0,
    availability: 0,
    integration: 0
  });
  const sectionRef = useRef(null);

  const solutionFeatures = [
    {
      id: 'timeSaved',
      value: 75,
      suffix: '%',
      title: 'Save 75% Time',
      description: 'Proven results with 150+ carriers onboarded in record time',
      icon: '⚡',
      svgIcon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      ),
      color: 'from-green-400 to-emerald-500',
      bgColor: 'bg-green-50',
      benefit: 'Stop wasting hours on manual calls'
    },
    {
      id: 'integration',
      value: 99,
      suffix: '%',
      title: 'Seamless Integration',
      description: 'Works with your existing dispatching tools and workflows instantly',
      icon: '🔗',
      svgIcon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      ),
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'bg-blue-50',
      benefit: 'No disruption to current operations'
    },
    {
      id: 'callsHandled',
      value: 1000,
      suffix: '+',
      title: 'Infinite Scale',
      description: 'Handle thousands of calls simultaneously, no staff needed',
      icon: '📈',
      svgIcon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      ),
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-purple-50',
      benefit: 'Grow without hiring limits'
    },
    {
      id: 'availability',
      value: 24,
      suffix: '/7',
      title: '24/7 Operation',
      description: 'Never miss an opportunity, even outside business hours',
      icon: '🌙',
      svgIcon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      ),
      color: 'from-orange-400 to-red-500',
      bgColor: 'bg-orange-50',
      benefit: 'Capture every lead, every hour'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateNumbers();
          startFeatureRotation();
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
    solutionFeatures.forEach((feature) => {
      let current = 0;
      const increment = feature.value / 60;
      const timer = setInterval(() => {
        current += increment;
        if (current >= feature.value) {
          current = feature.value;
          clearInterval(timer);
        }
        setAnimatedValues(prev => ({
          ...prev,
          [feature.id]: Math.floor(current)
        }));
      }, 30);
    });
  };

  const startFeatureRotation = () => {
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % solutionFeatures.length);
    }, 3500);

    return () => clearInterval(interval);
  };

  return (
    <div ref={sectionRef} className="relative bg-gradient-to-br from-white via-blue-50 to-green-50 py-24 overflow-hidden">
      {/* Success Background Elements */}
      <div className="absolute inset-0">
        {/* Success particles */}
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-green-400 bg-opacity-20 rounded-full animate-pulse"
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
        
        {/* Positive gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Success Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-100 to-blue-100 text-green-800 text-sm font-bold mb-8">
            <svg className="w-5 h-5 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            THE AI BREAKTHROUGH
          </div>
          
          <h2 className="text-lg font-bold text-green-600 uppercase tracking-wider mb-4">
            Your Growth Solution
          </h2>
          
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 mb-8 leading-tight">
            Scale Your Agency
            <br />
            <span className="text-4xl md:text-6xl">with AI-Powered Magic ✨</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            Our revolutionary AI voice agent <span className="text-green-600 font-bold">automates driver calls</span>, 
            <span className="text-blue-600 font-bold"> pitches loads perfectly</span>, and 
            <span className="text-purple-600 font-bold"> handles onboarding seamlessly</span>. 
            It's like hiring a <span className="text-orange-600 font-bold">24/7 sales team without the cost</span>! 
          </p>
        </div>

        {/* AI Demo Visualization */}
        <div className={`mb-20 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="relative bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-8 shadow-2xl overflow-hidden">
            {/* AI Brain Animation */}
            <div className="absolute top-4 right-4">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-2xl">

                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M413-480q17 0 28.5-11.5T453-520q0-17-11.5-28.5T413-560q-17 0-28.5 11.5T373-520q0 17 11.5 28.5T413-480Zm-133 0q17 0 28.5-11.5T320-520q0-17-11.5-28.5T280-560q-17 0-28.5 11.5T240-520q0 17 11.5 28.5T280-480Zm267 0q17 0 28.5-11.5T587-520q0-17-11.5-28.5T547-560q-17 0-28.5 11.5T507-520q0 17 11.5 28.5T547-480Zm133 0q17 0 28.5-11.5T720-520q0-17-11.5-28.5T680-560q-17 0-28.5 11.5T640-520q0 17 11.5 28.5T680-480ZM160-320h640v-400H160v400Zm320 160q-99 0-169.5-13.5T240-206v-34h-80q-33 0-56.5-23.5T80-320v-400q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v400q0 33-23.5 56.5T800-240h-80v34q0 19-70.5 32.5T480-160Zm0-360Z"/></svg>
                </span>
              </div>
            </div>
            
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold mb-4">AI Agent in Action</h3>
              <div className="bg-black bg-opacity-50 rounded-2xl p-6 max-w-2xl mx-auto">
                <div className="text-left space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-300">📞 Calling driver database...</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse animation-delay-500"></div>
                    <span className="text-blue-300">💬 "Hi John, I have a great load opportunity for you..."</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse animation-delay-1000"></div>
                    <span className="text-purple-300">📋 Collecting driver information...</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse animation-delay-1500"></div>
                    <span className="text-orange-300">✅ Driver onboarded successfully!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {solutionFeatures.map((feature, index) => (
            <div
              key={feature.id}
              className={`group relative transform transition-all duration-1000 hover:scale-105 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-20 opacity-0'
              } ${
                activeFeature === index ? 'scale-105 shadow-2xl' : ''
              }`}
              style={{ transitionDelay: `${500 + index * 200}ms` }}
            >
              {/* Feature Card */}
              <div className={`relative ${feature.bgColor} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50`}>
                
                {/* Success indicator */}
                <div className="absolute top-4 right-4 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>

                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Success icon background */}
                <div className="absolute -bottom-8 -right-8 text-8xl opacity-5 group-hover:opacity-15 transition-opacity duration-500 group-hover:rotate-12 transform transition-transform duration-500">
                  {feature.icon}
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300 border-2 border-green-200">
                    <svg className="w-8 h-8 text-gray-700 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {feature.svgIcon}
                    </svg>
                  </div>

                  {/* Animated Number */}
                  <div className={`text-5xl md:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r ${feature.color}`}>
                    {animatedValues[feature.id]}{feature.suffix}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  {/* Benefit Badge */}
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${feature.color} text-white`}>
                    ✨ {feature.benefit}
                  </div>

                  {/* Progress bar */}
                  <div className="mt-6 w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${feature.color} rounded-full transition-all duration-2000 ease-out`}
                      style={{ 
                        width: isVisible ? '100%' : '0%',
                        transitionDelay: `${500 + index * 200 + 500}ms`
                      }}
                    ></div>
                  </div>
                </div>

                {/* Success shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Call-to-Action */}
        <div className={`text-center transform transition-all duration-1000 delay-1500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="relative inline-block">
            <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <p className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Transform Your Agency? 🚀
              </p>
              <p className="text-xl text-green-100 mb-6 max-w-2xl">
                Join 150+ successful agencies already using AI to scale their operations effortlessly.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group relative px-8 py-4 bg-white text-gray-900 font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                  <span className="relative z-10 flex items-center space-x-3">
                    <span className="text-2xl group-hover:animate-bounce">🚀</span>
                    <span>Start Free Trial</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </button>
                
                <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 font-bold text-lg rounded-2xl hover:bg-white/30 transform hover:scale-105 transition-all duration-300">
                  <span className="flex items-center space-x-3">
                    <span className="text-xl">📞</span>
                    <span>Book Demo</span>
                  </span>
                </button>
              </div>
            </div>
            
            {/* Success particles around CTA */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-green-400 rounded-full opacity-30 animate-ping"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-400 rounded-full opacity-40 animate-pulse"></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-purple-400 rounded-full opacity-50 animate-bounce"></div>
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
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}