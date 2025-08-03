export default function Results() {
  const stats = [
    { number: "10", label: "Carriers Onboarded", subtitle: "In just 2 weeks with our MVP" },
    { number: "50%", label: "Time Saved", subtitle: "Compared to manual outreach" },
    { number: "20", label: "Hours Saved Weekly", subtitle: "Per agency using our system" }
  ]

  return (
    <section className="section-padding bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">
            Real Results for <span className="text-gradient">Real Agencies</span>
          </h2>
          <p className="text-xl text-primary-600 max-w-4xl mx-auto">
            We helped a dispatching agency onboard <span className="font-bold text-accent-600">10 carriers in 2 weeks</span>, cutting outreach time by <span className="font-bold text-accent-600">50%</span>. Early users are seeing faster growth and happier drivers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
              <div className="text-5xl font-bold text-accent-500 mb-3">{stat.number}</div>
              <div className="text-xl font-semibold text-primary-800 mb-2">{stat.label}</div>
              <p className="text-primary-600 text-sm">{stat.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <blockquote className="text-xl md:text-2xl text-primary-700 italic leading-relaxed mb-6">
                "This AI saved us hours daily and got us drivers faster than ever. We onboarded 10 new carriers in two weeks – something that usually takes us months. It's like having a dedicated sales team working around the clock."
              </blockquote>
              <div className="text-accent-600 font-semibold text-lg">Pilot Agency Partner</div>
              <div className="text-primary-600">Regional Dispatching Agency</div>
              <div className="text-sm text-primary-500 mt-2">*Results from our 2-week pilot program</div>
            </div>
            <div className="text-center lg:text-right">
              <img 
                src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300" 
                alt="Happy business owner"
                className="w-24 h-24 rounded-full mx-auto lg:mx-0 shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-accent-500 to-accent-600 text-white py-4 px-8 rounded-xl inline-block shadow-lg">
            <span className="text-xl font-bold">Early users report 3x faster driver onboarding</span>
          </div>
        </div>
      </div>
    </section>
  )
}