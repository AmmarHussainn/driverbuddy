import React from 'react'

import FeaturesBanner from '../../components/FeaturesBanner'
import CTA from '../../components/CTA'
import Pricing from '../../components/Pricing'
import Solution from '../../components/Solution'
import Problem from '../../components/Problem'
import Stats from '../../components/Stats'
import Hero from '../../components/Hero'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Home = () => {
  return (
   <>
     <Navbar/>

      {/* Hero Section */}
     <Hero/>

      {/* Stats Section */}
    <Stats/>

      {/* Problem Section */}
       <Problem/>

      {/* Solution Section */}
     
      <Solution />

      {/* Demo Section */}
     {/* <Demo/> */}

      {/* Testimonial Section */}
     {/* <TestimonialSection/> */}

      {/* Pricing Section */}
     <Pricing/>

      {/* CTA Section */}
     <CTA/>

      {/* Features Banner */}
     <FeaturesBanner/>

      {/* Footer */}
    <Footer/>

   
   </>
  )
}

export default Home