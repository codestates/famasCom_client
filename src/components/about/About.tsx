import React from 'react';
import {
  AboutContainer,
  AboutH1,
  AboutWrapper,
  AboutCard,
  AboutIcon,
  AboutH2,
  AboutP,
  AboutExplain,
  AboutHover,
  AboutSLink
} from './AboutElements';
import byeongkuk from '../../images/ByeongKuk.png';
import mira from '../../images/MiRa.png';
import haseok from '../../images/HaSeok.png';
import minju from '../../images/MinJu.png';

const About = () => {
  return (
    <>
    <AboutContainer id='About'>
      <AboutH1>개발자 소개</AboutH1>
      <AboutWrapper>
        <AboutCard>
          <AboutIcon  src={byeongkuk}>
            {/* <AboutHover>
              <AboutExplain></AboutExplain>
              <AboutSLink/>
            </AboutHover> */}
          </AboutIcon>
          <AboutH2>유병국</AboutH2>
          <AboutP>
            Team Leader  &amp; Full Stack Developer
          </AboutP>
        </AboutCard>
        <AboutCard>
          <AboutIcon  src={mira}/>
          <AboutH2>곽미라</AboutH2>
          <AboutP>
          Team Member  &amp; Full Stack Developer
          </AboutP>
        </AboutCard>
        <AboutCard>
          <AboutIcon  src={haseok}/>
          <AboutH2>김하석</AboutH2>
          <AboutP>
          Team Member  &amp; Full Stack Developer
          </AboutP>
        </AboutCard>
        <AboutCard>
          <AboutIcon  src={minju}/>
          <AboutH2>임민주</AboutH2>
          <AboutP>
          Team Member  &amp; Full Stack Developer
          </AboutP>
        </AboutCard>
      </AboutWrapper>
    </AboutContainer>
    </>
  );
};

export default About;
//