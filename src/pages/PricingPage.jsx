import { useState, useEffect, useRef } from 'react';

export default function PricingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredPlan, setHoveredPlan] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(1); // Professional plan selected by default
  const sectionRef = useRef(null);

  const plans = [
    {
      id: 0,
      name: "Starter",
      price: "$500",
      originalPrice: "$750",
      period: "/month",
      description: "Perfect for small agencies getting started",
      savings: "Save $250/month",
      features: [
        { text: "Up to 500 calls/month", icon: "📞", highlight: false },
        { text: "Basic AI voice agent", icon: "🤖", highlight: false },
        { text: "Email support", icon: "📧", highlight: false },
        { text: "Basic analytics", icon: "📊", highlight: false },
        { text: "Standard integrations", icon: "🔗", highlight: false }
      ],
      buttonText: "Start Free Trial",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-900/20",
      popular: false,
      roi: "2x ROI in 3 months",
      callsPerDay: "~17 calls/day"
    },
    {
      id: 1,
      name: "Professional",
      price: "$1,000", 
      originalPrice: "$1,500",
      period: "/month",
      description: "Ideal for growing agencies with higher volume",
      savings: "Save $500/month",
      features: [
        { text: "Up to 2,000 calls/month", icon: "📞", highlight: true },
        { text: "Advanced AI with learning", icon: "🧠", highlight: true },
        { text: "Priority phone & email support", icon: "🚀", highlight: true },
        { text: "Advanced analytics & reporting", icon: "📈", highlight: true },
        { text: "Custom integrations", icon: "⚙️", highlight: true },
        { text: "Multi-user dashboard", icon: "👥", highlight: true }
      ],
      buttonText: "Start Free Trial",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-900/20",
      popular: true,
      roi: "5x ROI in 2 months",
      callsPerDay: "~67 calls/day"
    },
    {
      id: 2,
      name: "Enterprise",
      price: "$2,000+",
      originalPrice: "$3,000+",
      period: "/month", 
      description: "For large agencies with custom needs",
      savings: "Save $1,000+/month",
      features: [
        { text: "Unlimited calls", icon: "∞", highlight: true },
        { text: "White-label solution", icon: "🏷️", highlight: true },
        { text: "Dedicated account manager", icon: "👨‍💼", highlight: true },
        { text: "Custom AI training", icon: "🎯", highlight: true },
        { text: "API access", icon: "🔌", highlight: true },
        { text: "24/7 priority support", icon: "🛟", highlight: true }
      ],
      buttonText: "Contact Sales",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-900/20",
      popular: false,
      roi: "10x ROI in 1 month",
      callsPerDay: "Unlimited calls/day"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white bg-opacity-10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium mb-8">
            <svg className="w-5 h-5 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            MASSIVE VALUE & SAVINGS
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-100 mb-6">
            Pricing Plans That Scale With You
          </h1>
          
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Choose the perfect plan to automate your driver outreach and grow your dispatching agency
          </p>
        </div>

        {/* ROI Calculator Preview */}
        <div className={`mb-16 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-sm rounded-3xl p-6 shadow-2xl text-center text-white border border-white/10">
            <h3 className="text-2xl font-bold mb-4">💰 Average Customer Saves $5,000+ Monthly</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-black">75%</div>
                <div className="text-blue-100">Less Time Spent</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black">300%</div>
                <div className="text-purple-100">More Drivers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black">500%</div>
                <div className="text-pink-100">ROI Increase</div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`group relative transform transition-all duration-700 hover:scale-105 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-20 opacity-0'
              } ${
                plan.popular ? 'scale-105 lg:scale-110' : ''
              } ${
                selectedPlan === plan.id ? 'ring-4 ring-purple-400 ring-opacity-50' : ''
              }`}
              style={{ transitionDelay: `${500 + index * 200}ms` }}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
              onClick={() => setSelectedPlan(plan.id)}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg animate-pulse">
                    🔥 MOST POPULAR
                  </div>
                </div>
              )}

              {/* Card */}
              <div className={`relative ${plan.bgColor} backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 ${
                plan.popular ? 'border-purple-300/50' : 'border-white/10'
              } ${
                hoveredPlan === plan.id ? 'border-purple-400/50' : ''
              }`}>
                
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-blue-100 mb-4">{plan.description}</p>
                    
                    {/* Savings Badge */}
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${plan.color} text-white mb-4`}>
                      💰 {plan.savings}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-lg text-gray-400 line-through mr-3">{plan.originalPrice}</span>
                      <span className={`text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${plan.color}`}>
                        {plan.price}
                      </span>
                      <span className="text-lg text-gray-300 ml-1">{plan.period}</span>
                    </div>
                    
                    {/* ROI & Volume Info */}
                    <div className="space-y-2">
                      <div className={`text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r ${plan.color}`}>
                        {plan.roi}
                      </div>
                      <div className="text-xs text-gray-400">
                        {plan.callsPerDay}
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className={`flex items-center space-x-3 p-2 rounded-lg transition-all duration-300 ${
                          feature.highlight ? 'bg-white/10 shadow-sm' : ''
                        }`}
                      >
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                          feature.highlight 
                            ? `bg-gradient-to-r ${plan.color} text-white shadow-lg` 
                            : 'bg-white/10 text-gray-300 shadow-sm'
                        }`}>
                          <span className="text-sm">{feature.icon}</span>
                        </div>
                        <span className={`text-gray-200 ${feature.highlight ? 'font-semibold' : ''}`}>
                          {feature.text}
                        </span>
                        {feature.highlight && (
                          <span className="ml-auto text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full font-bold">
                             Premium
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className={`group/btn relative w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 overflow-hidden ${
                    plan.popular 
                      ? `bg-gradient-to-r ${plan.color} text-white shadow-xl hover:shadow-2xl` 
                      : 'bg-white/10 text-white border-2 border-white/20 hover:border-purple-400/50 shadow-lg hover:shadow-xl'
                  }`}>
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <span>{plan.buttonText}</span>
                      {plan.buttonText === "Start Free Trial" && (
                        <span className="text-xl group-hover/btn:animate-bounce">🚀</span>
                      )}
                      {plan.buttonText === "Contact Sales" && (
                        <span className="text-xl group-hover/btn:animate-bounce">📞</span>
                      )}
                    </span>
                    
                    {/* Button shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                  </button>

                  {/* Trial Info */}
                  {plan.buttonText === "Start Free Trial" && (
                    <p className="text-center text-xs text-gray-400 mt-3">
                      ✅ 14-day free trial • No credit card required
                    </p>
                  )}
                </div>

                {/* Card hover shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust & Guarantees */}
        <div className={`text-center transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white/5 rounded-3xl p-8 shadow-2xl border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6">
              🛡️ Our Ironclad Guarantees
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-3">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">✅</span>
                </div>
                <h4 className="font-bold text-white">14-Day Free Trial</h4>
                <p className="text-gray-300 text-sm">No setup or cancellation fees</p>
              </div>
              
              <div className="space-y-3">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="font-bold text-white">Scale Up or Down</h4>
                <p className="text-gray-300 text-sm">Change plans anytime</p>
              </div>
              
              <div className="space-y-3">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">💎</span>
                </div>
                <h4 className="font-bold text-white">Money-Back Guarantee</h4>
                <p className="text-gray-300 text-sm">30-day satisfaction guarantee</p>
              </div>
            </div>
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
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}