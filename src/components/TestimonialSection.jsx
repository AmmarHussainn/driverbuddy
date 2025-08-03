import React from 'react'

const TestimonialSection = () => {
  return (
    <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-gray-700 font-semibold tracking-wide uppercase">Success Stories</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Real Results for Real Agencies
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
              We helped a dispatching agency onboard 10 carriers in 2 weeks, cutting outreach time by 50%. Early users are seeing faster growth and happier drivers.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-gray-800">10</p>
                <p className="mt-2 text-lg font-medium text-gray-900">Carriers Onboarded</p>
                <p className="mt-1 text-gray-600">In just 2 weeks with our MVP</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-gray-800">50%</p>
                <p className="mt-2 text-lg font-medium text-gray-900">Time Saved</p>
                <p className="mt-1 text-gray-600">Compared to manual outreach</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-gray-800">20</p>
                <p className="mt-2 text-lg font-medium text-gray-900">Hours Saved Weekly</p>
                <p className="mt-1 text-gray-600">Per agency using our system</p>
              </div>
            </div>

            <div className="mt-16 bg-gray-100 rounded-xl p-8">
              <div className="max-w-3xl mx-auto">
                <blockquote className="text-center">
                  <p className="text-xl font-medium text-gray-900">
                    "This AI saved us hours daily and got us drivers faster than ever. We onboarded 10 new carriers in two weeks – something that usually takes us months. It's like having a dedicated sales team working around the clock."
                  </p>
                  <footer className="mt-6">
                    <div className="flex items-center justify-center">
                      <div className="ml-4">
                        <div className="text-base font-medium text-gray-900">Pilot Agency Partner</div>
                        <div className="text-base font-medium text-gray-700">Regional Dispatching Agency</div>
                        <div className="mt-1 text-sm text-gray-600">*Results from our 2-week pilot program</div>
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg font-medium text-gray-900">
                Early users report 3x faster driver onboarding
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default TestimonialSection