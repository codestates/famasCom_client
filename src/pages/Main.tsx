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
// import About from '../components/About'

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
                {/* <About/> */}
                <Footer/>
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