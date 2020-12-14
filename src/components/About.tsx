import React from 'react';
import { Link } from 'react-router-dom';
import Human from '../images/human.svg';
import styled from 'styled-components';
import Wrapper from '../themes/Wrapper';

class About extends React.Component {
    render() {
        return (
        <Wrapper>
           <Contain>
  
  <Box>
    <Info>
      Such Bench
    </Info>
  </Box>
  <Box>
    <Info>
      Wow windy!
    </Info>
  </Box>
  <Box>
    <Info>
      Le city
    </Info>
  </Box>
  <Box>
    <Info>
      Such forest
    </Info>
  </Box>
  <Box>
    <Info>
      Wow clouds!
    </Info>
  </Box>
  <Box>
    <Info>
      Also le city
    </Info>
  </Box>
 
</Contain>

        </Wrapper>
        )
    }
}

// html, body {
//   padding: 0; margin: 0;
//   height: 100%;
// }


const Contain = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
`
  
 const Box = styled.div`
 height: 50%;
 width: 33.333%;
 background-repeat: no-repeat;
 background-size: 115%;
 background-position: 50% 50%;
 -webkit-transition: background-size 0.275s ease-in-out;
 transition: background-size 0.275s ease-in-out;
 flex-grow: 1;
 cursor: pointer;
 
 -webkit-user-select: none;
 -moz-user-select: none;
 -ms-user-select: none; 
 user-select: none;   
 
 &:hover{
   background-size: 100%;
 }
 
 &:nth-of-type(1){
   background-image:  @bg1;
 }
 &:nth-of-type(2){
   background-image:  @bg2;
 }
 &:nth-of-type(3){
   background-image:  @bg3;
 }
 &:nth-of-type(4){
   background-image:  @bg4;
 }
 &:nth-of-type(5){
   background-image:  @bg5;
 }
 &:nth-of-type(6){
   background-image:  @bg6;
 }
 `

const Info = styled.div`
background: rgba( 35, 35, 35, 0.7 );
box-sizing: border-box;
height: 100%;
width: 100%;
-webkit-transition: opacity 0.45s ease-in-out;
transition: opacity 0.45s ease-in-out;

text-align: center;
padding: 20% 0 0;
font-weight: 900;
font-size: 30px;
font-family: "Lato", Helvetica, Arial, sans-serif;
color: #fff;


opacity: 0;

&:hover{
  opacity: 1;
}
` 

export default About;