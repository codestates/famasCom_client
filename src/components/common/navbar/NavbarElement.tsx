import { Link as LinkR} from 'react-router-dom';
import styled from 'styled-components';
import click from 'images/click.png'
import { Link as LinkS } from 'react-scroll';
//
type nav = {
  scrollNav: boolean;
}

export const ContentNav = styled.nav<nav>`
background: ${({ scrollNav }) => (scrollNav ? '#fff' : '#fff')};
height: 100px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
z-index: 10;
top: 0;

@media screen and (max-width: 1000px) {
  transition: 0.8s all ease;
}
`

export const ContentNavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 90px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const ContentNavLogo = styled(LinkR)<nav>`
 color: ${({ scrollNav }) => (scrollNav ? '#01bf71' : '#01bf71')};
justify-self: flex-start;
font-size: 2.5rem;
display: flex;
align-items: center;
margin-left: 2px;
font-weight: bold;
text-decoration: none;
&:hover{ 
  color:#01bf71;
  cursor: url(${click}), auto;
}
`

export const ContentMobileIcon = styled.div`
display: none;

@media screen and (max-width: 1000px) {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 60%);
  font-size: 2rem;
  cursor: url(${click}), auto;
  color: #01bf71;
}
`
export const ContentNavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  margin-bottom:0;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const ContentNavItem = styled.li`
height: 80px;
font-size: 1.5rem;
`

export const ContentNavLinks = styled(LinkR)<nav>`
color: ${({ scrollNav }) => (scrollNav ? '#1c2237' : '#1c2237')} ;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
&:hover{ 
  color:#01bf71;
  border-bottom:solid 5px #01bf71; 
  cursor: url(${click}), auto;
}
`

export const ContentNavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 1000px) {
  display: none;
}
`
export const ContentNavBtnLink = styled(LinkR)<nav>`
border-radius: 5px;
background: ${({ scrollNav }) => (scrollNav ? '#01bf71' : '#01bf71')};
white-space: nowrap;
padding: 10px 22px;
color: ${({ scrollNav }) => (scrollNav ? '#1c2237' : '#1c2237' )};
font-size: 1.3rem;
outline: none;
border: none;
cursor: pointer;
text-decoration: none;
transition: all 0.2s ease-in-out;

&:hover {
  transition: all 0.2s ease-in-out;
  background: #1c2237;
  cursor: url(${click}), auto;
  color: #fff;
}
`