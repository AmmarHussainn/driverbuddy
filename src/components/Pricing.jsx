import { useState } from 'react';
import { Check, Star, Zap, Users, Shield, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Pricing() {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(1); // Growth plan selected by default
 
  const plans = [
    {
      id: 0,
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for independent dispatchers",
      userRange: "1-3 users",
      features: [
        "Up to 500 dispatches/month",
        "Basic load board integration",
        "Email support",
        "Standard reporting",
        "Mobile app access",
        "Basic carrier management"
      ],
      buttonText: "Get Started",
      popular: false,
      icon: <Phone className="w-6 h-6" />,
      highlight: false
    },
    {
      id: 1,
      name: "Growth",
      price: "$799",
      period: "/month",
      description: "Ideal for growing agencies",
      userRange: "4-10 users",
      features: [
        "Unlimited dispatches",
        "Advanced load board integration",
        "Priority phone & email support",
        "Advanced analytics & reporting",
        "Multi-user dashboard",
        "Custom integrations",
        "Advanced carrier scoring",
        "Real-time tracking"
      ],
      buttonText: "Start Free Trial",
      popular: true,
      icon: <Zap className="w-6 h-6" />,
      highlight: true
    },
    {
      id: 2,
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large brokerages and shippers",
      userRange: "Unlimited users",
      features: [
        "Unlimited everything",
        "White-label solution",
        "Dedicated account manager",
        "Custom integrations & API",
        "Advanced security features",
        "24/7 priority support",
        "Custom training & onboarding",
        "SLA guarantees"
      ],
      buttonText: "Contact Sales",
      popular: false,
      icon: <Shield className="w-6 h-6" />,
      highlight: false
    }
  ];

  return (
    <div className="relative py-20 overflow-hidden" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-6" 
               style={{ backgroundColor: '#602fc9', color: 'white' }}>
            <Star className="w-4 h-4 mr-2" />
            Transparent Pricing
          </div>
          
          <h2 className="text-5xl font-bold mb-6" style={{ color: '#252a31' }}>
            Choose Your Perfect Plan
          </h2>
          
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#252a31' }}>
            Scale your dispatch operations with plans designed for every business size. 
            <span className="font-semibold" style={{ color: '#602fc9' }}> No hidden fees</span>, 
            <span className="font-semibold" style={{ color: '#faa61b' }}> cancel anytime</span>.
          </p>
        </div>

        {/* Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" 
                 style={{ backgroundColor: '#602fc9' }}>
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-2" style={{ color: '#252a31' }}>Scalable Teams</h3>
            <p className="text-sm" style={{ color: '#252a31' }}>Add users as you grow</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" 
                 style={{ backgroundColor: '#faa61b' }}>
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-2" style={{ color: '#252a31' }}>Instant Setup</h3>
            <p className="text-sm" style={{ color: '#252a31' }}>Ready in under 10 minutes</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" 
                 style={{ backgroundColor: '#602fc9' }}>
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-2" style={{ color: '#252a31' }}>Enterprise Security</h3>
            <p className="text-sm" style={{ color: '#252a31' }}>Bank-level encryption</p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl ${
                plan.popular ? 'lg:scale-105 lg:-mt-4' : ''
              }`}
              style={{
                border: plan.popular ? `2px solid #602fc9` : '1px solid #e5e7eb'
              }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="px-6 py-2 text-white text-sm font-bold rounded-full"
                       style={{ background: 'linear-gradient(135deg, #602fc9, #faa61b)' }}>
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center ${
                    plan.popular ? 'text-white' : 'text-white'
                  }`}
                  style={{
                    background: plan.popular 
                      ? 'linear-gradient(135deg, #602fc9, #faa61b)'
                      : '#602fc9'
                  }}>
                    {plan.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#252a31' }}>
                    {plan.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-2">{plan.description}</p>
                  
                  <div className="text-sm font-medium px-3 py-1 rounded-full inline-block"
                       style={{ backgroundColor: '#f9f9f9', color: '#602fc9' }}>
                    {plan.userRange}
                  </div>
                </div>

                {/* Pricing */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center">
                    <span className={`text-5xl font-bold ${
                      plan.popular ? 'text-transparent bg-clip-text' : ''
                    }`}
                    style={{
                      color: plan.popular ? undefined : '#252a31',
                      backgroundImage: plan.popular ? 'linear-gradient(135deg, #602fc9, #faa61b)' : undefined
                    }}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-lg text-gray-600 ml-1">{plan.period}</span>
                    )}
                  </div>
                  
                  {plan.price !== "Custom" && (
                    <div className="text-sm text-gray-500 mt-2">
                      14-day free trial included
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mr-3 ${
                        plan.popular ? 'text-white' : 'text-white'
                      }`}
                      style={{
                        backgroundColor: plan.popular ? '#faa61b' : '#602fc9'
                      }}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                 onClick={() => navigate('/contactus')}
                  className={`cursor-pointer w-full py-4 px-6 rounded-xl font-semibold text-base transition-all duration-200 ${
                    plan.popular 
                      ? 'text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1' 
                      : 'text-white hover:shadow-lg'
                  }`}
                  style={{
                    background: plan.popular 
                      ? 'linear-gradient(135deg, #602fc9, #faa61b)'
                      : '#602fc9'
                  }}>
                  {plan.buttonText}
                </button>

                {/* Additional Info */}
                {plan.buttonText !== "Contact Sales" && (
                  <div className="text-center mt-4">
                    <p className="text-xs text-gray-500">
                      ✓ No setup fees • ✓ Cancel anytime
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full text-sm"
               style={{ backgroundColor: '#252a31', color: 'white' }}>
            <Phone className="w-4 h-4 mr-2" />
            Need help choosing? Call us at (602) 529-6927
          </div>
        </div>
      </div>
    </div>
  );
}