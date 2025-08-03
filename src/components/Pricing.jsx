export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$500",
      period: "/month",
      description: "Perfect for small agencies getting started",
      features: [
        "Up to 500 calls/month",
        "Basic AI voice agent",
        "Email support",
        "Basic analytics",
        "Standard integrations"
      ],
      buttonText: "Start Free Trial",
      buttonClass: "border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white"
    },
    {
      name: "Professional",
      price: "$1,000", 
      period: "/month",
      description: "Ideal for growing agencies with higher volume",
      features: [
        "Up to 2,000 calls/month",
        "Advanced AI with learning",
        "Priority phone & email support",
        "Advanced analytics & reporting",
        "Custom integrations",
        "Multi-user dashboard"
      ],
      buttonText: "Start Free Trial",
      buttonClass: "bg-accent-500 hover:bg-accent-600 text-white",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,000+",
      period: "/month", 
      description: "For large agencies with custom needs",
      features: [
        "Unlimited calls",
        "White-label solution",
        "Dedicated account manager",
        "Custom AI training",
        "API access",
        "24/7 priority support"
      ],
      buttonText: "Contact Sales",
      buttonClass: "border-2 border-primary-700 text-primary-700 hover:bg-primary-700 hover:text-white"
    }
  ]

  return (
    <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-gray-700 font-semibold tracking-wide uppercase">Pricing</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Affordable Plans to Grow Your Agency
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
              Starting at $500/month for small agencies, with flexible plans based on call volume. Try it free for 14 days.
            </p>
          </div>

          <div className="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-lg font-medium text-gray-900">Starter</h3>
              <div className="mt-4 flex items-baseline text-4xl font-bold text-gray-900">
                $500
                <span className="ml-1 text-lg font-medium text-gray-600">/month</span>
              </div>
              <p className="mt-4 text-gray-600">Perfect for small agencies getting started</p>
              <ul className="mt-6 space-y-4">
                <li className="flex">
                  <svg className="flex-shrink-0 h-6 w-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">Up to 500 calls/month</span>
                </li>
                <li className="flex">
                  <svg className="flex-shrink-0 h-6 w-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">Basic AI voice agent</span>
                </li>
                <li className="flex">
                  <svg className="flex-shrink-0 h-6 w-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">Email support</span>
                </li>
                <li className="flex">
                  <svg className="flex-shrink-0 h-6 w-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">Basic analytics</span>
                </li>
                <li className="flex">
                  <svg className="flex-shrink-0 h-6 w-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">Standard integrations</span>
                </li>
              </ul>
              <button className="mt-8 w-full bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 border border-transparent rounded-md text-base font-medium">
                Start Free Trial
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-800 transform scale-105 z-10">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-gray-800 text-white text-xs font-bold px-3 py-1 rounded-full">
                Most Popular
              </div>
              <h3 className="text-lg font-medium text-gray-900">Professional</h3>
              <div className="mt-4 flex items-baseline text-4xl font-bold text-gray-900">
                $1,000
                <span className="ml-1 text-lg font-medium text-gray-600">/month</span>
              </div>
              <p className="mt-4 text-gray-600">Ideal for growing agencies with higher volume</p>
              <ul className="mt-6 space-y-4">
                <li className="flex">
                  <svg className="flex-shrink-0 h-6 w-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">Up to 2,000 calls/month</span>
                </li>
                <li className="flex">
                  <svg className="flex-shrink-0 h-6 w-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">Advanced AI with learning</span>
                </li>
                <li className="flex">
                  <svg className="flex-shrink-0 h-6 w-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">Priority phone & email support</span>
                </li>
                <li className="flex">
                  <svg className="flex-shrink-0 h-6 w-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">Advanced analytics & reporting</span>
                </li>
                <li className="flex">
                  <svg className="flex-shrink-0 h-6 w-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">Custom integrations</span>
                </li>
                <li className="flex">
                  <svg className="flex-shrink-0 h-6 w-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">Multi-user dashboard</span>
                </li>
              </ul>
              <button className="mt-8 w-full bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 border border-transparent rounded-md text-base font-medium">
                Start Free Trial
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-lg font-medium text-gray-900">Enterprise</h3>
              <div className="mt-4 flex items-baseline text-4xl font-bold text-gray-900">
                $2,000+
                <span className="ml-1 text-lg font-medium text-gray-600">/month</span>
              </div>
              <p className="mt-4 text-gray-600">For large agencies with custom needs</p>
              <ul className="mt-6 space-y-4">
                <li className="flex">
                  <svg className="flex-shrink-0 h-6 w-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">Unlimited calls</span>
                </li>
                <li className="flex">
                  <svg className="flex-shrink-0 h-6 w-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">White-label solution</span>
                </li>
                <li className="flex">
                  <svg className="flex-shrink-0 h-6 w-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">Dedicated account manager</span>
                </li>
                <li className="flex">
                  <svg className="flex-shrink-0 h-6 w-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">Custom AI training</span>
                </li>
                <li className="flex">
                  <svg className="flex-shrink-0 h-6 w-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">API access</span>
                </li>
                <li className="flex">
                  <svg className="flex-shrink-0 h-6 w-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">24/7 priority support</span>
                </li>
              </ul>
              <button className="mt-8 w-full bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 border border-transparent rounded-md text-base font-medium">
                Contact Sales
              </button>
            </div>
          </div>

          <div className="mt-12 text-center text-sm text-gray-600">
            <p>14-day free trial on all plans • No setup or cancellation fees • Scale up or down anytime</p>
          </div>
        </div>
      </div>
  )
}