// import { useState, useEffect } from 'react';

// export default function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeItem, setActiveItem] = useState('Home');

//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 10;
//       setScrolled(isScrolled);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { name: 'Home', },
//     { name: 'Features'},
//     { name: 'Pricing' },
//     { name: 'Case Studies', },
//     { name: 'Contact',  }
//   ];

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//       scrolled 
//         ? 'bg-white/90 backdrop-blur-xl shadow-2xl shadow-blue-500/10' 
//         : 'bg-transparent'
//     }`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-20">
//           {/* Logo Section */}
//           <div className="flex items-center group">
//             <div className="flex-shrink-0 flex items-center cursor-pointer">
//               <div className="relative">
//                 <svg 
//                   className={`h-10 w-10 transition-all duration-500 group-hover:rotate-12 ${
//                     scrolled ? 'text-gray-800' : 'text-white'
//                   }`} 
//                   viewBox="0 0 24 24" 
//                   fill="currentColor"
//                 >
//                   <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" />
//                 </svg>
//                 <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md"></div>
//               </div>
//               <span className={`ml-3 text-2xl font-black tracking-tight transition-all duration-500 ${
//                 scrolled 
//                   ? 'text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600' 
//                   : 'text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100'
//               }`}>
//                 Haul Nova
//               </span>
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex lg:items-center lg:space-x-1">
//             {navItems.map((item) => (
//               <a
//                 key={item.name}
//                 href="#"
//                 onClick={() => setActiveItem(item.name)}
//                 className={`group relative px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
//                   activeItem === item.name
//                     ? scrolled
//                       ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25'
//                       : 'text-gray-900 bg-white/90 backdrop-blur-sm shadow-lg'
//                     : scrolled
//                       ? 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600'
//                       : 'text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm'
//                 } hover:scale-105 hover:shadow-lg`}
//               >
//                 <span className="flex items-center space-x-2">
                 
//                   <span>{item.name}</span>
//                 </span>
                
//                 {/* Hover effect background */}
//                 <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
//               </a>
//             ))}
//           </div>

//           {/* CTA Button */}
//           <div className="hidden lg:flex lg:items-center">
//             <button className={`group relative px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105 overflow-hidden ${
//               scrolled
//                 ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40'
//                 : 'bg-white text-gray-900 shadow-xl hover:shadow-2xl'
//             }`}>
//               <span className="relative z-10 flex items-center space-x-2">
//                 <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                 </svg>
//                 <span>Try It Free</span>
//               </span>
              
//               {/* Animated shine effect */}
//               <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
//             </button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="flex items-center lg:hidden">
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className={`group relative p-3 rounded-full transition-all duration-300 ${
//                 scrolled
//                   ? 'text-gray-700 hover:bg-gray-100'
//                   : 'text-white hover:bg-white/10 backdrop-blur-sm'
//               }`}
//             >
//               <span className="sr-only">Open main menu</span>
//               <div className="relative w-6 h-6">
//                 <span className={`absolute block h-0.5 w-6 transform transition-all duration-300 ${
//                   scrolled ? 'bg-gray-700' : 'bg-white'
//                 } ${
//                   mobileMenuOpen ? 'rotate-45 translate-y-2' : 'translate-y-0'
//                 }`}></span>
//                 <span className={`absolute block h-0.5 w-6 transform transition-all duration-300 ${
//                   scrolled ? 'bg-gray-700' : 'bg-white'
//                 } translate-y-2 ${
//                   mobileMenuOpen ? 'opacity-0' : 'opacity-100'
//                 }`}></span>
//                 <span className={`absolute block h-0.5 w-6 transform transition-all duration-300 ${
//                   scrolled ? 'bg-gray-700' : 'bg-white'
//                 } ${
//                   mobileMenuOpen ? '-rotate-45 translate-y-2' : 'translate-y-4'
//                 }`}></span>
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
//         mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
//       }`}>
//         <div className="bg-white/95 backdrop-blur-xl border-t border-gray-200/20 shadow-2xl">
//           <div className="px-4 py-6 space-y-2">
//             {navItems.map((item, index) => (
//               <a
//                 key={item.name}
//                 href="#"
//                 onClick={() => {
//                   setActiveItem(item.name);
//                   setMobileMenuOpen(false);
//                 }}
//                 className={`group flex items-center space-x-4 px-6 py-4 rounded-2xl text-base font-semibold transition-all duration-300 transform hover:scale-[1.02] ${
//                   activeItem === item.name
//                     ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
//                     : 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-gray-900'
//                 }`}
//                 style={{
//                   animationDelay: `${index * 100}ms`
//                 }}
//               >
//                 <span className="text-2xl group-hover:animate-bounce">{item.icon}</span>
//                 <span>{item.name}</span>
                
//                 {/* Animated arrow */}
//                 <svg className="ml-auto w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </a>
//             ))}
            
//             {/* Mobile CTA Button */}
//             <div className="pt-4 px-6">
//               <button className="group relative w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 transform hover:scale-[1.02] transition-all duration-300 overflow-hidden">
//                 <span className="relative z-10 flex items-center justify-center space-x-3">
//                   <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                   </svg>
//                   <span>Try It Free</span>
//                 </span>
                
//                 {/* Animated shine effect */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes slideIn {
//           from {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         .animate-slideIn {
//           animation: slideIn 0.3s ease-out forwards;
//         }
//       `}</style>
//     </nav>
//   );
// }




import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
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
  
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-2xl shadow-blue-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center group">
            <NavLink to="/" className="flex-shrink-0 flex items-center cursor-pointer">
              <div className="relative">
                <svg
                  className={`h-10 w-10 transition-all duration-500 group-hover:rotate-12 ${
                    scrolled ? 'text-gray-800' : 'text-white'
                  }`}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" />
                </svg>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md"></div>
              </div>
              <span
                className={`ml-3 text-2xl font-black tracking-tight transition-all duration-500 ${
                  scrolled
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600'
                    : 'text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100'
                }`}
              >
                Haul Nova
              </span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `group relative px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? scrolled
                        ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25'
                        : 'text-gray-900 bg-white/90 backdrop-blur-sm shadow-lg'
                      : scrolled
                        ? 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600'
                        : 'text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm'
                  } hover:scale-105 hover:shadow-lg`
                }
              >
                <span className="flex items-center space-x-2">
                  <span>{item.name}</span>
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </NavLink>
            ))}
          </div>

          {/* CTA Button */}
         

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`group relative p-3 rounded-full transition-all duration-300 ${
                scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10 backdrop-blur-sm'
              }`}
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-6">
                <span
                  className={`absolute block h-0.5 w-6 transform transition-all duration-300 ${
                    scrolled ? 'bg-gray-700' : 'bg-white'
                  } ${mobileMenuOpen ? 'rotate-45 translate-y-2' : 'translate-y-0'}`}
                ></span>
                <span
                  className={`absolute block h-0.5 w-6 transform transition-all duration-300 ${
                    scrolled ? 'bg-gray-700' : 'bg-white'
                  } translate-y-2 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
                ></span>
                <span
                  className={`absolute block h-0.5 w-6 transform transition-all duration-300 ${
                    scrolled ? 'bg-gray-700' : 'bg-white'
                  } ${mobileMenuOpen ? '-rotate-45 translate-y-2' : 'translate-y-4'}`}
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
        <div className="bg-white/95 backdrop-blur-xl border-t border-gray-200/20 shadow-2xl">
          <div className="px-4 py-6 space-y-2">
            {navItems.map((item, index) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `group flex items-center space-x-4 px-6 py-4 rounded-2xl text-base font-semibold transition-all duration-300 transform hover:scale-[1.02] ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                      : 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-gray-900'
                  }`
                }
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span>{item.name}</span>
                <svg
                  className="ml-auto w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </NavLink>
            ))}

            {/* Mobile CTA Button */}
           
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideIn {
          animation: slideIn 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  );
}