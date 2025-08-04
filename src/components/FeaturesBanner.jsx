import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FeaturesBanner = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('features-banner');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: "🚀",
      title: "14 Day Free Trial",
      subtitle: "Risk-free start",
      primary: true
    },
    {
      icon: "⚡",
      title: "50% Time Savings",
      subtitle: "Guaranteed results",
      primary: false
    },
    {
      icon: "🎯",
      title: "24h To First Results",
      subtitle: "Instant impact",
      primary: true
    }
  ];

  return (
    <div id="features-banner" className="relative py-16 overflow-hidden" style={{ backgroundColor: '#f9f9f9' }}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-8 animate-pulse" style={{ backgroundColor: '#602fc9' }}></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-8 animate-pulse animation-delay-1000" style={{ backgroundColor: '#faa61b' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-5" style={{ background: 'linear-gradient(135deg, #602fc9, #faa61b)' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border mb-4 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{ 
            background: 'linear-gradient(135deg, rgba(96, 47, 201, 0.1), rgba(250, 166, 27, 0.1))',
            color: '#252a31',
            borderColor: 'rgba(96, 47, 201, 0.2)'
          }}>
            <span className="animate-bounce mr-2">🌟</span>
            Why Choose Our Platform?
          </div>
          <h2 className={`text-3xl sm:text-4xl font-bold mb-2 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{ color: '#252a31' }}>
            Everything You Need to 
            <span style={{ 
              background: 'linear-gradient(135deg, #602fc9, #faa61b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}> Succeed</span>
          </h2>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative p-8 rounded-2xl bg-white border-2 group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              style={{ 
                borderColor: hoveredIndex === index ? '#602fc9' : 'rgba(37, 42, 49, 0.1)'
              }}>
                {/* Hover Background Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, #602fc9, #faa61b)' }}></div>
                
                {/* Icon with Animation */}
                <div className="relative mb-4">
                  <div className={`text-5xl mb-2 transform transition-all duration-300 ${hoveredIndex === index ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}`}>
                    {feature.icon}
                  </div>
                  <div className={`h-1 rounded-full mx-auto transform transition-all duration-500 ${hoveredIndex === index ? 'w-24' : 'w-16'}`}
                  style={{ 
                    background: feature.primary ? 'linear-gradient(135deg, #602fc9, #faa61b)' : '#faa61b'
                  }}></div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2 group-hover:opacity-90 transition-all duration-300"
                style={{ color: '#252a31' }}>
                  {feature.title}
                </h3>
                <p className="text-sm font-medium" style={{ color: '#252a31', opacity: 0.7 }}>
                  {feature.subtitle}
                </p>

                {/* Floating Particles */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-4 right-4 w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: '#602fc9' }}></div>
                    <div className="absolute bottom-6 left-6 w-1 h-1 rounded-full animate-pulse" style={{ backgroundColor: '#faa61b' }}></div>
                    <div className="absolute top-1/2 right-8 w-1.5 h-1.5 rounded-full animate-bounce" style={{ backgroundColor: '#602fc9' }}></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className={`transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white rounded-2xl p-6 shadow-lg border"
          style={{ borderColor: 'rgba(37, 42, 49, 0.1)' }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl"
                style={{ background: 'linear-gradient(135deg, #602fc9, #faa61b)' }}>
                  💳
                </div>
                <span className="text-sm font-medium" style={{ color: '#252a31' }}>No setup fees</span>
              </div>
              
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl"
                style={{ background: 'linear-gradient(135deg, #602fc9, #faa61b)' }}>
                  🔄
                </div>
                <span className="text-sm font-medium" style={{ color: '#252a31' }}>Cancel anytime</span>
              </div>
              
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl"
                style={{ background: 'linear-gradient(135deg, #602fc9, #faa61b)' }}>
                  📈
                </div>
                <span className="text-sm font-medium" style={{ color: '#252a31' }}>99.9% uptime</span>
              </div>
              
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl"
                style={{ background: 'linear-gradient(135deg, #602fc9, #faa61b)' }}>
                  🔒
                </div>
                <span className="text-sm font-medium" style={{ color: '#252a31' }}>Enterprise security</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-12 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-lg font-medium mb-6" style={{ color: '#252a31' }}>
            Ready to transform your agency? 
            <span style={{ color: '#602fc9' }}> Join thousands</span> of successful agencies today.
          </p>
          <button
           onClick={() => navigate('/contactus')}
          className=" cursor-pointer group px-8 py-4 rounded-xl font-bold text-lg shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-white"
          style={{ background: 'linear-gradient(135deg, #602fc9, #faa61b)' }}>
            <span className="flex items-center justify-center">
              Start Your Free Trial
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default FeaturesBanner;