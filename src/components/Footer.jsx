import { useState, useEffect } from 'react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('footer');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer
      id="footer"
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #252a31, #1a1f25)' }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full blur-3xl opacity-8 animate-pulse" style={{ backgroundColor: '#602fc9' }}></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full blur-3xl opacity-8 animate-pulse animation-delay-1000" style={{ backgroundColor: '#faa61b' }}></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-4" style={{ background: 'linear-gradient(135deg, #602fc9, #faa61b)' }}></div>
        <div className="absolute inset-0 opacity-5" style={{ 
          backgroundImage: 'linear-gradient(rgba(249,249,249,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(249,249,249,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div
            className={`md:col-span-1 transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3"
              style={{ background: 'linear-gradient(135deg, #602fc9, #faa61b)' }}>
                <span className="font-bold text-lg" style={{ color: '#f9f9f9' }}>H</span>
              </div>
              <h3 className="text-xl font-bold" style={{ color: '#f9f9f9' }}>Haul Nova</h3>
            </div>
            <p className="mb-6 leading-relaxed" style={{ color: '#f9f9f9', opacity: 0.7 }}>
              Reliable truck dispatching services to keep your business moving forward.
            </p>
          </div>

          {/* Quick Links */}
          <div
            className={`transform transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h3 className="text-lg font-bold mb-6 flex items-center" style={{ color: '#f9f9f9' }}>
              <span className="w-2 h-2 rounded-full mr-3 animate-pulse" style={{ backgroundColor: '#602fc9' }}></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(({ name, href }, idx) => (
                <li key={idx}>
                  <a
                    href={href}
                    className="group transition-all duration-300 flex items-center"
                    style={{ color: hoveredLink === idx ? '#f9f9f9' : 'rgba(249, 249, 249, 0.7)' }}
                    onMouseEnter={() => setHoveredLink(idx)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span 
                      className="h-0.5 rounded-full mr-0 transition-all duration-300"
                      style={{
                        width: hoveredLink === idx ? '8px' : '0px',
                        marginRight: hoveredLink === idx ? '12px' : '0px',
                        backgroundColor: '#faa61b'
                      }}
                    ></span>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div
            className={`transform transition-all duration-1000 delay-600 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h3 className="text-lg font-bold mb-6 flex items-center" style={{ color: '#f9f9f9' }}>
              <span className="w-2 h-2 rounded-full mr-3 animate-pulse" style={{ backgroundColor: '#faa61b' }}></span>
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-sm" style={{ color: 'rgba(249, 249, 249, 0.7)' }}>
                <span>📧</span>
                <a
                  href="mailto:dispatch@haulnova.com"
                  className="transition-colors hover:opacity-100"
                  style={{ color: 'inherit' }}
                  onMouseEnter={(e) => e.target.style.color = '#f9f9f9'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(249, 249, 249, 0.7)'}
                >
                  dispatch@haulnova.com
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm" style={{ color: 'rgba(249, 249, 249, 0.7)' }}>
                <span>📞</span>
                <span>(602) 529-6927</span>
              </li>
              <li className="flex items-center space-x-3 text-sm" style={{ color: 'rgba(249, 249, 249, 0.7)' }}>
                <span>🌍</span>
                <span>United States</span>
              </li>
            </ul>
          </div>

          {/* Newsletter/CTA */}
          <div
            className={`transform transition-all duration-1000 delay-800 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h3 className="text-lg font-bold mb-6 flex items-center" style={{ color: '#f9f9f9' }}>
              <span className="w-2 h-2 rounded-full mr-3 animate-pulse" style={{ backgroundColor: '#602fc9' }}></span>
              Get Started
            </h3>
            <p className="text-sm mb-4" style={{ color: 'rgba(249, 249, 249, 0.7)' }}>
              Ready to optimize your dispatch operations?
            </p>
            <button 
              className="group px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              style={{ 
                background: 'linear-gradient(135deg, #602fc9, #faa61b)',
                color: '#f9f9f9'
              }}
            >
              <span className="flex items-center">
                Start Free Trial
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div
          className={`border-t pt-8 transform transition-all duration-1000 delay-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ borderColor: 'rgba(249, 249, 249, 0.1)' }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm" style={{ color: 'rgba(249, 249, 249, 0.7)' }}>
              © 2025 Haul Nova. All Rights Reserved.
            </p>
            
            {/* Trust badges */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#602fc9' }}>
                  <span className="text-xs" style={{ color: '#f9f9f9' }}>🔒</span>
                </div>
                <span className="text-xs" style={{ color: 'rgba(249, 249, 249, 0.7)' }}>Secure</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#faa61b' }}>
                  <span className="text-xs" style={{ color: '#f9f9f9' }}>⚡</span>
                </div>
                <span className="text-xs" style={{ color: 'rgba(249, 249, 249, 0.7)' }}>Fast</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#602fc9' }}>
                  <span className="text-xs" style={{ color: '#f9f9f9' }}>🛟</span>
                </div>
                <span className="text-xs" style={{ color: 'rgba(249, 249, 249, 0.7)' }}>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </footer>
  );
}