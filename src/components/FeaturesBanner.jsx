import React from 'react'

const FeaturesBanner = () => {
  return (
    <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-lg font-medium text-gray-900">14 Day Free Trial</p>
            </div>
            <div>
              <p className="text-lg font-medium text-gray-900">50% Time Savings Guaranteed</p>
            </div>
            <div>
              <p className="text-lg font-medium text-gray-900">24h To First Results</p>
            </div>
          </div>
          <div className="mt-4 text-center text-sm text-gray-600">
            <p>No setup fees • Cancel anytime • 99.9% uptime guarantee</p>
          </div>
        </div>
      </div>
  )
}

export default FeaturesBanner