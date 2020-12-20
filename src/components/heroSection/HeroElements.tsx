import styled from 'styled-components';
import { Link } from 'react-scroll';
import click from 'images/click.png';

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 900px;
  position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(rgba(0, 0, 0, 0.2)),
        to(rgba(0, 0, 0, 0.2))
      ),
      -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.2)), to(transparent));
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  iframe {
    top:0;
    margin:0;
    padding:0;
    -o-object-fit: cover;
    overflow: hidden;
    display: block;       /* iframes are inline by default */
    border: none;         /* Reset default border */
    height: 100vh;        /* Viewport-relative units */
    width: 100vw;
    object-fit: cover;
    background: #232a34;
}
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Topline = styled.div`
color: #fff;
font-size: 25px;
line-height: 16px;
font-weight: 750;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
`;


export const MainBtn = styled(Link)`
border-radius: 5px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #1c2237;
  font-size: 1.4rem;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #1c2237;
    color: #fff;
    cursor: url(${click}), auto;
};
`