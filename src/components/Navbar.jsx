import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import from react-router-dom

export default function Navbar() {
  const navigate = useNavigate(); // For programmatic navigation
  const location = useLocation(); // To get current path
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contactus' },
  ];

  // Function to check if a route is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-lg bg-white/90 shadow-sm'
          : 'bg-[#f9f9f9]'
      }`}
      style={{
        borderBottom: '1px solid rgba(37, 42, 49, 0.1)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo Section */}
          <div 
            className="flex items-center group cursor-pointer"
            onClick={() => navigate('/')}
          >
            <div className="flex-shrink-0 flex items-center">
              <div className="relative">
                <svg
                  className={`h-10 w-10 transition-all duration-500 group-hover:rotate-12`}
                  style={{ color: '#602fc9' }}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" />
                </svg>
                <div 
                  className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md"
                  style={{ backgroundColor: '#faa61b' }}
                ></div>
              </div>
              <span
                className={`ml-3 text-2xl font-black tracking-tight transition-all duration-500 text-[#252a31]`}
              >
                Haul Nova
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => navigate(item.path)}
                className={`group relative px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                style={{
                  color: isActive(item.path) ? '#f9f9f9' : '#252a31',
                  backgroundColor: isActive(item.path) ? '#602fc9' : 'transparent'
                }}
                onMouseEnter={(e) => {
                  if (!isActive(item.path)) {
                    e.target.style.backgroundColor = 'rgba(96, 47, 201, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(item.path)) {
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <span className="flex items-center space-x-2">
                  <span>{item.name}</span>
                </span>
                <div 
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ backgroundColor: '#faa61b' }}
                ></div>
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`group relative p-3 rounded-full transition-all duration-300`}
              style={{
                color: '#252a31',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(37, 42, 49, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-6">
                <span
                  className={`absolute block h-0.5 w-6 transform transition-all duration-300 ${
                    mobileMenuOpen ? 'rotate-45 translate-y-2' : 'translate-y-0'
                  }`}
                  style={{ backgroundColor: '#252a31' }}
                ></span>
                <span
                  className={`absolute block h-0.5 w-6 transform transition-all duration-300 translate-y-2 ${
                    mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                  style={{ backgroundColor: '#252a31' }}
                ></span>
                <span
                  className={`absolute block h-0.5 w-6 transform transition-all duration-300 ${
                    mobileMenuOpen ? '-rotate-45 translate-y-2' : 'translate-y-4'
                  }`}
                  style={{ backgroundColor: '#252a31' }}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div 
          className="bg-white border-t shadow-2xl"
          style={{ 
            borderColor: 'rgba(37, 42, 49, 0.2)'
          }}
        >
          <div className="px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  navigate(item.path);
                  setMobileMenuOpen(false);
                }}
                className={`group flex items-center justify-between w-full px-6 py-4 rounded-2xl text-base font-semibold transition-all duration-300 transform hover:scale-[1.02]`}
                style={{
                  backgroundColor: isActive(item.path) ? '#602fc9' : 'transparent',
                  color: isActive(item.path) ? '#f9f9f9' : '#252a31',
                }}
                onMouseEnter={(e) => {
                  if (!isActive(item.path)) {
                    e.target.style.backgroundColor = 'rgba(96, 47, 201, 0.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(item.path)) {
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <span>{item.name}</span>
                <svg
                  className="w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ))}

            {/* Mobile CTA Button */}
            <div className="pt-4 mt-4" style={{ borderTop: '1px solid rgba(37, 42, 49, 0.1)' }}>
              <button 
                onClick={() => navigate('/get-started')}
                className="w-full px-6 py-4 text-white text-base font-bold rounded-2xl shadow-lg transform hover:scale-[1.02] transition-all duration-300"
                style={{ 
                  backgroundColor: '#faa61b',
                  boxShadow: '0 10px 25px -5px rgba(250, 166, 27, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#e8951a';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#faa61b';
                }}
              >
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}