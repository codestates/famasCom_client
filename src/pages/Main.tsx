<<<<<<< HEAD
import * as React from 'react';
import { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import dummyText from '../components/DummyText';
import Section from '../components/Section';
import BTNSection from '../components/BTNSection';
import styled from 'styled-components';
import Footer from '../components/Footer';
import GoToTop from '../components/common/GoToTop'
import MainWrapper from '../themes/Wrapper'
import About from '../components/About'

class Main extends React.Component {
    render() {
        return (
            <>
            <MainWrapper>
                <Nav />
                <MainTitle>FAMAS COM</MainTitle>
                <BTNSection/>
                
                <Section
                    title="Section 1"
                    subtitle={dummyText}
                    dark={true}
                    id="section1"
                />
                <Section
                    title="Section 2"
                    subtitle={dummyText}
                    dark={false}
                    id="section2"
                />
                <Section
                    title="Section 3"
                    subtitle={dummyText}
                    dark={true}
                    id="section3"
                />
                <Section
                    title="Section 4"
                    subtitle={dummyText}
                    dark={false}
                    id="section4"
                />
                <GoToTop/>
                <About/>
            </MainWrapper>
                <Footer/>
            </>
        );
    }
}

const MainTitle = styled.h1`
display: flex;
flex-direction: column;
align-items: center;
`


export default Main;
=======
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
>>>>>>> 50bc9c164ab65dc5311b19bc7fe3ee8575f7d1dc
