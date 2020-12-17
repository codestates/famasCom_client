import React from 'react';
import {
  AboutContainer,
  AboutH1,
  AboutWrapper,
  AboutCard,
  AboutIcon,
  AboutH2,
  AboutP,
  // AboutExplain,
  // AboutExplainH4,
  // AboutExplainP,
  // AboutHover,
  // AboutSLink,
  // AboutSLinkA
} from './AboutElements';
import byeongkuk from '../../images/ByeongKuk.png';
import mira from '../../images/MiRa.png';
import haseok from '../../images/HaSeok.png';
import minju from '../../images/MinJu.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <>
    <AboutContainer id='About'>
      <AboutH1>개발자 소개</AboutH1>
      <AboutWrapper>
        <AboutCard>
          <AboutIcon  src={byeongkuk}>
          {/* <AboutHover>
              <AboutExplain>
                <AboutExplainH4>Hi There !</AboutExplainH4>
                <AboutExplainP>I love to introduce myself as a hardcore Developer.</AboutExplainP>
              </AboutExplain>
              <AboutSLink>
                <AboutSLinkA href="#"><i className="fa fa-facebook"></i></AboutSLinkA>
                <AboutSLinkA href="#"><i className="fa fa-twitter"></i></AboutSLinkA>
                <AboutSLinkA href="#"><i className="fa fa-google-plus"></i></AboutSLinkA>
              </AboutSLink>
            </AboutHover> */}
          </AboutIcon>
          <AboutH2>유병국</AboutH2>
          <AboutP>
            Team Leader  &amp; Full Stack Developer
          </AboutP>
        </AboutCard>
        <AboutCard>
          <AboutIcon  src={mira}>
                      {/* <AboutHover>
              <AboutExplain>
                <AboutExplainH4>Hi There !</AboutExplainH4>
                <AboutExplainP>I love to introduce myself as a hardcore Developer.</AboutExplainP>
              </AboutExplain>
              <AboutSLink>
                <AboutSLinkA href="#"><i className="fa fa-facebook"></i></AboutSLinkA>
                <AboutSLinkA href="#"><i className="fa fa-twitter"></i></AboutSLinkA>
                <AboutSLinkA href="#"><i className="fa fa-google-plus"></i></AboutSLinkA>
              </AboutSLink>
            </AboutHover> */}
          </AboutIcon>  
          <AboutH2>곽미라</AboutH2>
          <AboutP>
          Team Member  &amp; Full Stack Developer
          </AboutP>
        </AboutCard>
        <AboutCard>
          <AboutIcon  src={haseok}>
{/* <AboutHover>
              <AboutExplain>
                <AboutExplainH4>Hi There !</AboutExplainH4>
                <AboutExplainP>I love to introduce myself as a hardcore Developer.</AboutExplainP>
              </AboutExplain>
              <AboutSLink>
                <AboutSLinkA href="#"><i className="fa fa-facebook"></i></AboutSLinkA>
                <AboutSLinkA href="#"><i className="fa fa-twitter"></i></AboutSLinkA>
                <AboutSLinkA href="#"><i className="fa fa-google-plus"></i></AboutSLinkA>
              </AboutSLink>
            </AboutHover> */}
          </AboutIcon>  
          <AboutH2>김하석</AboutH2>
          <AboutP>
          Team Member  &amp; Full Stack Developer
          </AboutP>
        </AboutCard>
        <AboutCard>
          <AboutIcon  src={minju}>
{/* <AboutHover>
              <AboutExplain>
                <AboutExplainH4>Hi There !</AboutExplainH4>
                <AboutExplainP>I love to introduce myself as a hardcore Developer.</AboutExplainP>
              </AboutExplain>
              <AboutSLink>
                <AboutSLinkA href="#"><i className="fa fa-facebook"></i></AboutSLinkA>
                <AboutSLinkA href="#"><i className="fa fa-twitter"></i></AboutSLinkA>
                <AboutSLinkA href="#"><i className="fa fa-google-plus"></i></AboutSLinkA>
              </AboutSLink>
            </AboutHover> */}
          </AboutIcon>  
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