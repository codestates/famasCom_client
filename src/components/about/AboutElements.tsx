import styled from 'styled-components';

export const AboutContainer = styled.div`
  height: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  background: #fff;

  @media screen and (max-width: 1000px) {
    height: 1200px;
  }

  @media screen and (max-width: 768px) {
    height: 1800px;
  }
`;

export const AboutWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const AboutCard = styled.div`
  background: rgba(231,226,221,0.5);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 500px;
  
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const AboutIcon = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 10px;
`;

export const AboutHover = styled.div`
position: absolute;
top: 0;
left: 0;
bottom: 0;
right: 0;
margin: 0;
border: 20px solid rgba(0, 0, 0, 0.1);
background-color: rgba(255, 255, 255, 0.9);
opacity: 0;
-webkit-transition: all 0.3s;
transition: all 0.3s;

&:hover {
  opacity: 1;
}
`
export const AboutExplain = styled.div`
position: absolute;
top: 5%;
width: 100%;
padding: 0 20px;
`
export const AboutExplainH4 = styled.h4`
font-size: 1.8rem;
font-weight: 600;
`
export const AboutExplainP = styled.p`
font-size: 1.4rem;
`

export const AboutSLink = styled.div`
position: absolute;
bottom: 5%;
width: 100%;
text-align: center;
font-size: 2rem;
`
export const AboutSLinkA = styled.a`
text-align: center;
color: #222;
`

export const AboutH1 = styled.h1`
  font-size: 2.5rem;
  color: #01bf71;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 1.625rem;
    
  }
`;

export const AboutH2 = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 10px;
`;

export const AboutP = styled.p`
  font-size: 1.3rem;
  text-align: center;
`;
//