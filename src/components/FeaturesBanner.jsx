import { useState, useEffect } from 'react';

const FeaturesBanner = () => {
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
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: "⚡",
      title: "50% Time Savings",
      subtitle: "Guaranteed results",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      icon: "🎯",
      title: "24h To First Results",
      subtitle: "Instant impact",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    }
  ];

  const guarantees = [
    { icon: "💳", text: "No setup fees" },
    { icon: "🔄", text: "Cancel anytime" },
    { icon: "📈", text: "99.9% uptime guarantee" },
    { icon: "🔒", text: "Enterprise security" }
  ];

  return (
    <div id="features-banner" className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-sm font-medium text-gray-700 border border-blue-200 mb-4 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="animate-bounce mr-2">🌟</span>
            Why Choose Our Platform?
          </div>
          <h2 className={`text-3xl sm:text-4xl font-bold text-gray-900 mb-2 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Everything You Need to 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Succeed</span>
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
              <div className={`relative p-8 rounded-2xl ${feature.bgColor} ${feature.borderColor} border-2 group-hover:border-opacity-50 group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-300 overflow-hidden`}>
                {/* Hover Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Icon with Animation */}
                <div className="relative mb-4">
                  <div className={`text-5xl mb-2 transform transition-all duration-300 ${hoveredIndex === index ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}`}>
                    {feature.icon}
                  </div>
                  <div className={`w-16 h-1 bg-gradient-to-r ${feature.color} rounded-full mx-auto transform transition-all duration-500 ${hoveredIndex === index ? 'w-24' : 'w-16'}`}></div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 font-medium">
                  {feature.subtitle}
                </p>

                {/* Floating Particles */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-6 left-6 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
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