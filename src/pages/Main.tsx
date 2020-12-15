import Footer from 'components/Footer';
import React, { useState } from 'react';
import Navbar from '../components/common/navbar'
import Siderbar from '../components/common/siderbar'
import Home from 'components/HomePage/Home'
import Hero from '../components/heroSection/Hero'
import Services from 'components/service/Services'
import GoToTop from 'components/common/GoToTop'
const Main = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Navbar toggle={toggle}/>
      <Siderbar isOpen={isOpen} toggle={toggle} />
      <Hero />
      <Home />
      <Services />
      <Footer />
      <GoToTop />
      </>
  )
}
export default Main 
