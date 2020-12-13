import { Link as LinkR} from 'react-router-dom';
import styled from 'styled-components';
import { Link as LinkS} from 'react-scroll';
import { FaTimes } from 'react-icons/fa'

type side = {
  isOpen: boolean;
}

export const SiderContainer = styled.aside<side>`
position: fixed;
z-index: 999;
background: #0d0d0d;
width: 100%;
height: 100%;
display: grid;
align-items: center;
top:0;
left:0;
transition: 0.3s all ease-in-out;
opacity: ${(props) => props.isOpen ? '100%' : "0"};
top: ${(props) => props.isOpen ? "0" : "-100%"};
z-index: 999;
`;


export const CloseIcon = styled(FaTimes)`
color: #fff;
`;

export const Icon = styled.div`
position: relative;
top: -3rem;
bottom: 0;
left: 90%;
backround: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`;

export const SiderbarWrapper = styled.div`
color: #fff;
`;
export const SiderMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
text-align: center;

@media screen and (max-width: 480px) {
  grid-template-rows: repeat(6, 60px);
}
`

export const SiderLink = styled(LinkR)`
display: flex;
justify-content: center;
align-items: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
color: #fff;
text-decoration: none;

&:hover {
  transition: 0.2s ease-in-out;
  color: #01bf71;
}
`

export const SiderBtnWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
export const SiderbarRoute = styled(LinkR)`
border-radius: 50px;
background: #01bf71;
white-space: nowrap;
padding: 16px 64px;
color: #010606;
font-size: 1.3rem;
outline: none;
border: none;
cursor: pointer;
text-decoration: none;
transition: all 0.2s ease-in-out;

&:hover {
  transition: all 0.2s ease-in-out;
  color: #010606;
  background: #fff;
}
`