// src/App.jsx
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import PrivateRoute from "./components/PrivateRoute"; 


const routes = [
  { path: "/", component: lazy(() => import("./screens/public/Home")) },
  { path: "/login", component: lazy(() => import("./components/login")) },
  {path:'/contactus', component: lazy(() => import("./screens/public/ContactUsPage"))},
  {path:'/pricing', component: lazy(() => import("./screens/public/PricingPage"))},
  {path:'/dispatch-for-trucking-companies', component: lazy(() => import("./screens/public/dispatchfortruckingcompanies"))},
  {path : '/dispatch-for-owner-operators' , component: lazy(()=> import("./screens/public/dispatchservicesforowneroperators"))},
  // PRIVATE ROUTE
  {path: 'selection', component: lazy(() => import("./screens/private/selectionscreen"))},
  { path: "/dashboard", component: lazy(() => import("./screens/private/dashboard")), private: true },
];

const Loader = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="w-16 h-16 border-4 border-[#243c5a] border-dashed rounded-full animate-spin"></div>
  </div>
);
export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    // <Router>
    //   <div className="bg-gray-50 font-sans">
    //     {/* Navbar visible on all pages */}
    //     <Navbar />

    //     {/* Define Routes */}
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/contact" element={<ContactUsPage />} />
    //       <Route path="/pricing" element={<PricingPage />} />
    //       <Route path="*" element={<div className="text-center py-20">404 - Page Not Found</div>} />
    //     </Routes>

    //     {/* Footer visible on all pages */}
    //     <Footer />
    //   </div>
    // </Router>


     <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          {routes.map(({ path, component: Component, private: isPrivate }) => (
            <Route
              key={path}
              path={path}
              element={isPrivate ? (
                <PrivateRoute>
                  <Component />
                </PrivateRoute>
              ) : (
                <Component />
              )}
            />
          ))}
        </Routes>
      </Suspense>
    </Router>
  );
}
