import * as React from 'react';
import { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Main.css';
import Nav from '../components/Nav';
import dummyText from '../components/DummyText';
import Section from '../components/Section';
import BTNSection from '../components/BTNSection';
import styled from 'styled-components';


class Main extends React.Component {
    render() {
        return (
            <div className="main-wrapper">
                <Nav />
                <div className="content">
                    <h1>FAMAS COM</h1>
                </div>
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

            </div>
        );
    }
}



export default Main;