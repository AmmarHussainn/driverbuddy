export default function Stats() {
  return (
     <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-800">10+</p>
              <p className="mt-2 text-sm font-medium text-gray-600">Carriers Onboarded</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-800">50%</p>
              <p className="mt-2 text-sm font-medium text-gray-600">Time Saved</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-800">24/7</p>
              <p className="mt-2 text-sm font-medium text-gray-600">Automated Calls</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-800">50%</p>
              <p className="mt-2 text-sm font-medium text-gray-600">Time Saved</p>
            </div>
          </div>
        </div>
      </div>
  );
}