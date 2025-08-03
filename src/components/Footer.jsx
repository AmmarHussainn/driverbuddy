import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState(null);

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

  const socialIcons = [
    {
      name: 'LinkedIn',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="..." />
        </svg>
      ),
      href: 'https://linkedin.com',
      color: 'from-blue-600 to-blue-400',
    },
    {
      name: 'Twitter',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="..." />
        </svg>
      ),
      href: 'https://twitter.com',
      color: 'from-sky-500 to-blue-500',
    },
    {
      name: 'YouTube',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="..." />
        </svg>
      ),
      href: 'https://youtube.com',
      color: 'from-red-600 to-red-400',
    },
    {
      name: 'GitHub',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="..." />
        </svg>
      ),
      href: 'https://github.com',
      color: 'from-gray-600 to-gray-400',
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer
      id="footer"
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600 rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-10 animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-cyan-600 rounded-full blur-3xl opacity-5"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
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
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <h3 className="text-white text-xl font-bold">Haul Nova</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
             Reliable truck dispatching services to keep your business moving forward.
            </p>
          </div>

          {/* Quick Links */}
          <div
            className={`transform transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h3 className="text-white text-lg font-bold mb-6 flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(({ name, href }, idx) => (
                <li key={idx}>
                  <Link
                    to={href}
                    className="group text-gray-400 hover:text-white transition-all duration-300 flex items-center"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 rounded-full mr-0 group-hover:mr-3 transition-all duration-300"></span>
                    {name}
                  </Link>
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
            <h3 className="text-white text-lg font-bold mb-6 flex items-center">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-pulse"></span>
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-sm text-gray-400">
                <span>📧</span>
                <a
                  href="mailto:dispatch@haulnova.com"
                  className="hover:text-white transition-colors"
                >
                  dispatch@haulnova.com
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400">
                <span>📞</span>
                <span>(602) 529-6927</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400">
                <span>🌍</span>
                <span>United States</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div
          className={`border-t border-gray-800 pt-8 transform transition-all duration-1000 delay-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="flex  items-center w-full !mx-auto gap-4 !text-center ">
            <p className="text-gray-400 text-sm">© 2025 Haul Nova. All Rights Reserved.</p>
           
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
