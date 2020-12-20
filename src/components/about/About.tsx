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
  AboutExplainH4,
  AboutExplainP,
  AboutHover,
  AboutSLink,
  AboutSLinkA
} from './AboutElements';
import byeongkuk from '../../images/ByeongKuk.png';
import mira from '../../images/MiRa.png';
import haseok from '../../images/HaSeok.png';
import minju from '../../images/MinJu.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBlogger } from '@fortawesome/free-brands-svg-icons'


const About = () => {
  return (
    <>
    <AboutContainer id='About'>
      <AboutH1>개발자 소개</AboutH1>
      <AboutWrapper>
        <AboutCard>
          <AboutIcon alt=""  src={byeongkuk} />
          <AboutH2>유병국</AboutH2>
          <AboutP>
              Team Leader  &amp; Full Stack Developer
          </AboutP>
          <AboutHover>
              <AboutExplain>
                <AboutExplainH4>Hi There !</AboutExplainH4>
                <AboutExplainP>I love to introduce myself as a hardcore Developer.</AboutExplainP>
              </AboutExplain>
              <AboutSLink>
                <AboutSLinkA href="#"><FontAwesomeIcon icon={faBlogger} /></AboutSLinkA>
                &nbsp;&nbsp;
                <AboutSLinkA href="#"><FontAwesomeIcon icon={faGithub} /></AboutSLinkA>
                
              </AboutSLink>
            </AboutHover>
        </AboutCard>
        <AboutCard>
          <AboutIcon  src={mira} />
          <AboutH2>곽미라</AboutH2>
          <AboutP>
              Team Member  &amp; Full Stack Developer
          </AboutP>
          <AboutHover>
              <AboutExplain>
                <AboutExplainH4>Hi There !</AboutExplainH4>
                <AboutExplainP>I love to introduce myself as a hardcore Developer.</AboutExplainP>
              </AboutExplain>
              <AboutSLink>
                <AboutSLinkA href="#"><FontAwesomeIcon icon={faBlogger} /></AboutSLinkA>
                &nbsp;&nbsp;
                <AboutSLinkA href="#"><FontAwesomeIcon icon={faGithub} /></AboutSLinkA>
              </AboutSLink>
            </AboutHover>
        </AboutCard>
        <AboutCard>
          <AboutIcon  src={haseok} />
          <AboutH2>김하석</AboutH2>
          <AboutP>
              Team Member  &amp; Full Stack Developer
          </AboutP>
          <AboutHover>
              <AboutExplain>
                <AboutExplainH4>Hi There !</AboutExplainH4>
                <AboutExplainP>I love to introduce myself as a hardcore Developer.</AboutExplainP>
              </AboutExplain>
              <AboutSLink>
                <AboutSLinkA href="https://hsssss-90.tistory.com/"><FontAwesomeIcon icon={faBlogger} /></AboutSLinkA>
                &nbsp;&nbsp;
                <AboutSLinkA href="https://github.com/haseok2118"><FontAwesomeIcon icon={faGithub} /></AboutSLinkA>
              </AboutSLink>
            </AboutHover>
        </AboutCard>
        <AboutCard>
          <AboutIcon  src={minju}>

          </AboutIcon>  
          <AboutH2>임민주</AboutH2>
          <AboutP>
              Team Member  &amp; Full Stack Developer
          </AboutP>
          <AboutHover>
              <AboutExplain>
                <AboutExplainH4>Hi There !</AboutExplainH4>
                <AboutExplainP>I love to introduce myself as a hardcore Developer.</AboutExplainP>
              </AboutExplain>
              <AboutSLink>
                <AboutSLinkA href="#"><FontAwesomeIcon icon={faBlogger} /></AboutSLinkA>
                &nbsp;&nbsp;
                <AboutSLinkA href="#"><FontAwesomeIcon icon={faGithub} /></AboutSLinkA>
              </AboutSLink>
            </AboutHover>
        </AboutCard>
      </AboutWrapper>
    </AboutContainer>
    </>
  );
};

export default About;
//