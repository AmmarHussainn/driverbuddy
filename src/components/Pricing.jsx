import { useState } from 'react';
import { Check, Star, Zap, Users, Shield, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Pricing() {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(1); // Growth plan selected by default

  const plans = [
    {
      id: 0,
      name: "Pilot",
      price: "$149",
      period: "/month",
      description: "Independent dispatchers & very small teams",
      userRange: "Up to 2 users",
      features: [
        "Automated Outreach - Included",
        "Driver Onboarding - Included",
        "Basic Integrations (Load boards, basic TMS)",
        "Basic performance metrics",
        "Email support",
      ],
      buttonText: "Start Pilot",
      popular: false,
      icon: <Phone className="w-6 h-6" />,
      highlight: false,
      trial: "7-day free trial included"
    },
    {
      id: 1,
      name: "Growth",
      price: "$399",
      period: "/month",
      description: "Growing agencies",
      userRange: "Up to 10 users",
      features: [
        "Automated Outreach - Increased call volume",
        "Driver Onboarding - Enhanced workflows",
        "Advanced integrations + API access",
        "Detailed outreach & onboarding performance",
        "Priority email & phone support",
      ],
      buttonText: "Get Started",
      popular: true,
      icon: <Zap className="w-6 h-6" />,
      highlight: true,
      trial: "14-day free trial included"
    },
    {
      id: 2,
      name: "Scale",
      price: "Custom",
      period: "",
      description: "Large brokerages & shippers",
      userRange: "Unlimited users",
      features: [
        "Automated Outreach - Unlimited call volume",
        "Driver Onboarding - Fully customizable & integrated",
        "Custom integrations & dedicated support",
        "Advanced analytics & custom reporting",
        "24/7 priority support & dedicated account manager",
      ],
      buttonText: "Contact Sales",
      popular: false,
      icon: <Shield className="w-6 h-6" />,
      highlight: false,
      trial: "Custom demo & consultation"
    }
  ];

  return (
    <div className="relative py-20 overflow-hidden" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6" style={{ color: '#252a31' }}>
            Simple, Transparent Pricing
          </h2>
          
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#252a31' }}>
            Choose the plan that fits your business needs. All plans come with our industry-leading technology and support.
          </p>
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
                       style={{ backgroundColor: '#602fc9' }}>
                    RECOMMENDED
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
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
                  
                  <div className="text-sm text-gray-500 mt-2">
                    {plan.trial}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1 ${
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
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg mb-4" style={{ color: '#252a31' }}>
            Need help deciding? We're here to help!
          </p>
          <button
            onClick={() => navigate('/contactus')}
            className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold"
            style={{ backgroundColor: '#602fc9', color: 'white' }}>
            <Phone className="w-4 h-4 mr-2" />
            Contact Our Sales Team
          </button>
        </div>
      </div>
    </div>
  );
}