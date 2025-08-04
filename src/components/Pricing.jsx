import { useState, useEffect, useRef } from 'react';

export default function Pricing() {
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
      popular: false,
      roi: "10x ROI in 1 month",
      callsPerDay: "Unlimited calls/day"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="relative py-24 overflow-hidden" style={{ backgroundColor: '#f9f9f9' }}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle particles */}
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
        
        {/* Background orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob" style={{ backgroundColor: '#602fc9' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000" style={{ backgroundColor: '#faa61b' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Value Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full text-sm font-bold mb-8" style={{ backgroundColor: '#602fc9', color: 'white' }}>
            <svg className="w-5 h-5 mr-2 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
            </svg>
            MASSIVE VALUE & SAVINGS
          </div>
          
          <h2 className="text-lg font-bold uppercase tracking-wider mb-4" style={{ color: '#602fc9' }}>
            Investment Plans
          </h2>
          
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight" style={{ color: '#252a31' }}>
            Affordable Plans to
            <br />
            <span className="text-4xl md:text-6xl">Scale Your Agency</span>
          </h1>
          
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium" style={{ color: '#252a31' }}>
            Starting at just <span className="font-bold" style={{ color: '#602fc9' }}>$500/month</span> for small agencies, 
            with <span className="font-bold" style={{ color: '#faa61b' }}>flexible plans</span> based on call volume. 
            <span className="font-bold" style={{ color: '#602fc9' }}>Try it free for 14 days</span> - no risk, massive rewards! 🚀
          </p>
        </div>

        {/* ROI Calculator Preview */}
        <div className={`mb-16 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="rounded-3xl p-6 shadow-2xl text-center text-white" style={{ background: 'linear-gradient(135deg, #602fc9, #faa61b)' }}>
            <h3 className="text-2xl font-bold mb-4">💰 Average Customer Saves $5,000+ Monthly</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-black">75%</div>
                <div className="text-white/90">Less Time Spent</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black">300%</div>
                <div className="text-white/90">More Drivers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black">500%</div>
                <div className="text-white/90">ROI Increase</div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20 mb-16">
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
                selectedPlan === plan.id ? 'ring-4 ring-opacity-50' : ''
              }`}
              style={{ 
                transitionDelay: `${500 + index * 200}ms`,
                '--ring-color': selectedPlan === plan.id ? '#602fc9' : 'transparent'
              }}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
              onClick={() => setSelectedPlan(plan.id)}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg animate-pulse" style={{ background: 'linear-gradient(135deg, #602fc9, #faa61b)' }}>
                    🔥 MOST POPULAR
                  </div>
                </div>
              )}

              {/* Card */}
              <div className={`relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 ${
                plan.popular ? 'border-opacity-30' : 'border-gray-200'
              } ${
                hoveredPlan === plan.id ? 'border-opacity-50' : ''
              }`}
              style={{ 
                borderColor: plan.popular || hoveredPlan === plan.id ? '#602fc9' : undefined
              }}>
                
                {/* Background gradient overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl" style={{ background: 'linear-gradient(135deg, #602fc9, #faa61b)' }}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2" style={{ color: '#252a31' }}>{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    
                    {/* Savings Badge */}
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-white mb-4" style={{ background: 'linear-gradient(135deg, #602fc9, #faa61b)' }}>
                      💰 {plan.savings}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-lg text-gray-400 line-through mr-3">{plan.originalPrice}</span>
                      <span className="text-5xl font-black" style={{ color: plan.popular ? '#602fc9' : '#252a31' }}>
                        {plan.price}
                      </span>
                      <span className="text-lg text-gray-600 ml-1">{plan.period}</span>
                    </div>
                    
                    {/* ROI & Volume Info */}
                    <div className="space-y-2">
                      <div className="text-sm font-semibold" style={{ color: '#faa61b' }}>
                        {plan.roi}
                      </div>
                      <div className="text-xs text-gray-500">
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
                          feature.highlight ? 'bg-gray-50 shadow-sm' : ''
                        }`}
                      >
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                          feature.highlight 
                            ? 'text-white shadow-lg' 
                            : 'bg-gray-100 text-gray-600 shadow-sm'
                        }`}
                        style={{ 
                          background: feature.highlight ? '#faa61b' : undefined
                        }}>
                          <span className="text-sm">{feature.icon}</span>
                        </div>
                        <span className={`${feature.highlight ? 'font-semibold' : ''}`} style={{ color: '#252a31' }}>
                          {feature.text}
                        </span>
                        {feature.highlight && (
                          <span className="ml-auto text-xs px-2 py-1 rounded-full font-bold" style={{ backgroundColor: '#faa61b', color: 'white' }}>
                             Premium
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className={`group/btn relative w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 overflow-hidden shadow-lg hover:shadow-xl`}
                  style={{
                    background: plan.popular 
                      ? 'linear-gradient(135deg, #602fc9, #faa61b)' 
                      : 'white',
                    color: plan.popular ? 'white' : '#252a31',
                    border: plan.popular ? 'none' : '2px solid #602fc9'
                  }}>
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
                    <p className="text-center text-xs text-gray-500 mt-3">
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
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#252a31' }}>
              🛡️ Our Ironclad Guarantees
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-3">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto text-white" style={{ background: 'linear-gradient(135deg, #602fc9, #faa61b)' }}>
                  <span className="text-2xl">✅</span>
                </div>
                <h4 className="font-bold" style={{ color: '#252a31' }}>14-Day Free Trial</h4>
                <p className="text-gray-600 text-sm">No setup or cancellation fees</p>
              </div>
              
              <div className="space-y-3">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto text-white" style={{ background: 'linear-gradient(135deg, #602fc9, #faa61b)' }}>
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="font-bold" style={{ color: '#252a31' }}>Scale Up or Down</h4>
                <p className="text-gray-600 text-sm">Change plans anytime</p>
              </div>
              
              <div className="space-y-3">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto text-white" style={{ background: 'linear-gradient(135deg, #602fc9, #faa61b)' }}>
                  <span className="text-2xl">💎</span>
                </div>
                <h4 className="font-bold" style={{ color: '#252a31' }}>Money-Back Guarantee</h4>
                <p className="text-gray-600 text-sm">30-day satisfaction guarantee</p>
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
      `}</style>
    </div>
  );
}