import { useState, useEffect, useRef } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

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
      color: "#252a31",
      bgColor: "bg-gray-100",
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
      color: "#602fc9",
      bgColor: "bg-purple-50",
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
      color: "#252a31",
      bgColor: "bg-gray-100",
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
    <>
     <Navbar/>
    <div className="relative min-h-screen bg-[#f9f9f9] overflow-hidden">
      {/* Main Content */}
      <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-[#252a31] text-white text-sm font-medium mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            MASSIVE VALUE & SAVINGS
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#252a31] mb-6">
            Pricing Plans That Scale With You
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan to automate your driver outreach and grow your dispatching agency
          </p>
        </div>

        {/* ROI Calculator Preview */}
        <div className={`mb-16 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="bg-[#252a31] rounded-3xl p-6 shadow-lg text-center text-white">
            <h3 className="text-2xl font-bold mb-4">💰 Average Customer Saves $5,000+ Monthly</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-black">75%</div>
                <div className="text-gray-300">Less Time Spent</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black">300%</div>
                <div className="text-gray-300">More Drivers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black">500%</div>
                <div className="text-gray-300">ROI Increase</div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`group relative transform transition-all duration-700 hover:scale-[1.02] ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-20 opacity-0'
              } ${
                plan.popular ? 'scale-[1.02] lg:scale-[1.05]' : ''
              } ${
                selectedPlan === plan.id ? 'ring-4 ring-[#faa61b] ring-opacity-50' : ''
              }`}
              style={{ transitionDelay: `${500 + index * 200}ms` }}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
              onClick={() => setSelectedPlan(plan.id)}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-[#faa61b] text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                    🔥 MOST POPULAR
                  </div>
                </div>
              )}

              {/* Card */}
              <div className={`relative ${plan.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border ${
                plan.popular ? 'border-[#602fc9]' : 'border-gray-200'
              } ${
                hoveredPlan === plan.id ? 'border-[#602fc9]' : ''
              }`}>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-[#252a31] mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    
                    {/* Savings Badge */}
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#faa61b] text-white mb-4`}>
                      💰 {plan.savings}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-lg text-gray-500 line-through mr-3">{plan.originalPrice}</span>
                      <span className={`text-5xl font-black`} style={{ color: plan.color }}>
                        {plan.price}
                      </span>
                      <span className="text-lg text-gray-500 ml-1">{plan.period}</span>
                    </div>
                    
                    {/* ROI & Volume Info */}
                    <div className="space-y-2">
                      <div className={`text-sm font-semibold`} style={{ color: plan.color }}>
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
                          feature.highlight ? 'bg-[#602fc9]/10' : ''
                        }`}
                      >
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                          feature.highlight 
                            ? `bg-[#602fc9] text-white shadow-sm` 
                            : 'bg-gray-200 text-gray-600'
                        }`}>
                          <span className="text-sm">{feature.icon}</span>
                        </div>
                        <span className={`${feature.highlight ? 'font-semibold text-[#252a31]' : 'text-gray-600'}`}>
                          {feature.text}
                        </span>
                        {feature.highlight && (
                          <span className="ml-auto text-xs bg-[#faa61b]/20 text-[#faa61b] px-2 py-1 rounded-full font-bold">
                            Premium
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className={`group/btn relative w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] overflow-hidden ${
                    plan.popular 
                      ? `bg-[#602fc9] text-white shadow-md hover:shadow-lg` 
                      : 'bg-[#252a31] text-white border border-gray-300 hover:shadow-md'
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
                  </button>

                  {/* Trial Info */}
                  {plan.buttonText === "Start Free Trial" && (
                    <p className="text-center text-xs text-gray-500 mt-3">
                      ✅ 14-day free trial • No credit card required
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust & Guarantees */}
        <div className={`text-center transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-[#252a31] mb-6">
              🛡️ Our Ironclad Guarantees
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-3">
                <div className="w-16 h-16 bg-[#602fc9] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl text-white">✅</span>
                </div>
                <h4 className="font-bold text-[#252a31]">14-Day Free Trial</h4>
                <p className="text-gray-600 text-sm">No setup or cancellation fees</p>
              </div>
              
              <div className="space-y-3">
                <div className="w-16 h-16 bg-[#602fc9] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl text-white">⚡</span>
                </div>
                <h4 className="font-bold text-[#252a31]">Scale Up or Down</h4>
                <p className="text-gray-600 text-sm">Change plans anytime</p>
              </div>
              
              <div className="space-y-3">
                <div className="w-16 h-16 bg-[#602fc9] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl text-white">💎</span>
                </div>
                <h4 className="font-bold text-[#252a31]">Money-Back Guarantee</h4>
                <p className="text-gray-600 text-sm">30-day satisfaction guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}