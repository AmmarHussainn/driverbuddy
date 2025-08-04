import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Pricing() {
  const navigate = useNavigate();

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

  return (
    <div ref={sectionRef} className="relative py-16 overflow-hidden" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Value Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full text-sm font-bold mb-8" style={{ backgroundColor: '#602fc9', color: 'white' }}>
            MASSIVE VALUE & SAVINGS
          </div>
          
          <h2 className="text-lg font-bold uppercase tracking-wider mb-4" style={{ color: '#602fc9' }}>
            Investment Plans
          </h2>
          
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ color: '#252a31' }}>
            Affordable Plans to Scale Your Agency
          </h1>
          
          <p className="text-lg max-w-4xl mx-auto leading-relaxed" style={{ color: '#252a31' }}>
            Starting at just <span className="font-bold" style={{ color: '#602fc9' }}>$500/month</span> with <span className="font-bold" style={{ color: '#faa61b' }}>flexible plans</span> based on call volume.
          </p>
        </div>

        {/* ROI Calculator Preview */}
        <div className="mb-12">
          <div className="rounded-2xl p-6 text-center text-white" style={{ background: 'linear-gradient(135deg, #602fc9, #faa61b)' }}>
            <h3 className="text-xl font-bold mb-4">💰 Average Customer Saves $5,000+ Monthly</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-black">75%</div>
                <div className="text-sm">Less Time Spent</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black">300%</div>
                <div className="text-sm">More Drivers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black">500%</div>
                <div className="text-sm">ROI Increase</div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards - Mobile Optimized */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative ${plan.popular ? 'md:mt-0' : ''}`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="text-white text-xs font-bold px-4 py-1 rounded-full" style={{ background: 'linear-gradient(135deg, #602fc9, #faa61b)' }}>
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Card */}
              <div className={`relative bg-white rounded-2xl p-6 shadow-md border ${
                plan.popular ? 'border-[#602fc9]' : 'border-gray-200'
              }`}>
                
                {/* Content */}
                <div className="relative">
                  {/* Plan Header */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#252a31' }}>{plan.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{plan.description}</p>
                    
                    {/* Savings Badge */}
                    <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold text-white mb-3" style={{ backgroundColor: '#faa61b' }}>
                      {plan.savings}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center mb-1">
                      <span className="text-sm text-gray-400 line-through mr-2">{plan.originalPrice}</span>
                      <span className="text-3xl font-bold" style={{ color: plan.popular ? '#602fc9' : '#252a31' }}>
                        {plan.price}
                      </span>
                      <span className="text-sm text-gray-600 ml-1">{plan.period}</span>
                    </div>
                    
                    {/* ROI & Volume Info */}
                    <div className="space-y-1">
                      <div className="text-xs font-semibold" style={{ color: '#faa61b' }}>
                        {plan.roi}
                      </div>
                      <div className="text-xs text-gray-500">
                        {plan.callsPerDay}
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className={`flex items-center space-x-2 p-2 rounded-lg text-sm ${
                          feature.highlight ? 'bg-gray-50' : ''
                        }`}
                      >
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                          feature.highlight 
                            ? 'text-white' 
                            : 'bg-gray-100 text-gray-600'
                        }`}
                        style={{ 
                          background: feature.highlight ? '#faa61b' : undefined
                        }}>
                          <span className="text-xs">{feature.icon}</span>
                        </div>
                        <span className={`${feature.highlight ? 'font-medium' : ''}`} style={{ color: '#252a31' }}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                  onClick={() => navigate('/contactus')}
                  className={`w-full py-3 px-4 rounded-xl cursor-pointer font-bold text-sm transition-colors duration-200 ${
                    plan.popular ? 'text-white' : 'text-[#252a31]'
                  }`}
                  style={{
                    background: plan.popular 
                      ? 'linear-gradient(135deg, #602fc9, #faa61b)' 
                      : 'white',
                    border: plan.popular ? 'none' : '1px solid #602fc9'
                  }}>
                    {plan.buttonText}
                  </button>

                  {/* Trial Info */}
                  {plan.buttonText === "Start Free Trial" && (
                    <p className="text-center text-xs text-gray-500 mt-2">
                      ✅ 14-day free trial
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </div>
  );
}