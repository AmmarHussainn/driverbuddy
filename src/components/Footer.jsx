import { useState, useEffect } from 'react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

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

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const socialIcons = [
    {
      name: 'LinkedIn',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'from-blue-600 to-blue-400'
    },
    {
      name: 'Twitter',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      color: 'from-sky-500 to-blue-500'
    },
    {
      name: 'YouTube',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      color: 'from-red-600 to-red-400'
    },
    {
      name: 'GitHub',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      color: 'from-gray-600 to-gray-400'
    }
  ];

  const certificationBadges = [
    { icon: '🛡️', text: 'SOC 2 Compliant', color: 'from-green-500 to-emerald-500' },
    { icon: '🚀', text: 'AI Innovators', color: 'from-blue-500 to-cyan-500' },
    { icon: '⚡', text: '99.9% Uptime', color: 'from-yellow-500 to-orange-500' },
    { icon: '🏆', text: 'Industry Leader', color: 'from-purple-500 to-pink-500' }
  ];

  return (
    <footer id="footer" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className={`md:col-span-1 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <h3 className="text-white text-xl font-bold">Haul Nova</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Revolutionizing the $800B trucking industry with AI voice agents that automate driver outreach and scale dispatching operations.
            </p>
            
            {/* Certification Badges */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              {certificationBadges.map((badge, index) => (
                <div
                  key={index}
                  className="group flex items-center p-2 rounded-lg bg-gray-800/30 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:scale-105"
                >
                  <span className="text-lg mr-2 group-hover:animate-bounce">{badge.icon}</span>
                  <span className="text-xs text-gray-400 group-hover:text-gray-300">{badge.text}</span>
                </div>
              ))}
            </div>

         
          </div>

          {/* Quick Links */}
          <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-white text-lg font-bold mb-6 flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['Home', 'Pricing', 'Contact'].map((link, index) => (
                <li key={index}>
                  <a
                    href="/"
                    className="group text-gray-400 hover:text-white transition-all duration-300 flex items-center"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 rounded-full mr-0 group-hover:mr-3 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-white text-lg font-bold mb-6 flex items-center">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-pulse"></span>
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="group flex items-center">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-600/20 transition-colors duration-300">
                  <span className="text-blue-400 text-sm">📧</span>
                </div>
                <div>
                  <a href="mailto:dispatch@haulnova.com" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                    dispatch@haulnova.com
                  </a>
                </div>
              </li>
              <li className="group flex items-center">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-green-600/20 transition-colors duration-300">
                  <span className="text-green-400 text-sm">📞</span>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">(602) 529-6927</span>
                  <div className="text-xs text-gray-500">24/7 Support</div>
                </div>
              </li>
              <li className="group flex items-center">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-purple-600/20 transition-colors duration-300">
                  <span className="text-purple-400 text-sm">🌍</span>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">United States</span>
                  <div className="text-xs text-gray-500">Nationwide Coverage</div>
                </div>
              </li>
            </ul>
          </div>

         
        </div>

        {/* Bottom Section */}
        <div className={`border-t text-center border-gray-800 pt-8 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div >
            <div className='text-center'>
              <p className="text-gray-400 text-sm">
                © 2025 Haul Nova. All Rights Reserved.
              </p>
             
            </div>
            
           
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </footer>
  );
}