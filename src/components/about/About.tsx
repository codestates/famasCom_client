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
            <AboutIcon alt="" src={byeongkuk} />
            <AboutH2>유병국</AboutH2>
            <AboutP>
              Team Leader  &amp; Full Stack Developer
          </AboutP>
            <AboutHover>
              <AboutExplain>
                <AboutExplainH4>안녕하세요.</AboutExplainH4>
                <AboutExplainP>team helpers의 팀장 유병국입니다. 저는 백앤드 개발자를 꿈꾸고 있습니다. 많은 관심 부탁드립니다!</AboutExplainP>
              </AboutExplain>
              <AboutSLink>
                <AboutSLinkA href="https://velog.io/@godkor200"><FontAwesomeIcon icon={faBlogger} /></AboutSLinkA>
                &nbsp;&nbsp;
                <AboutSLinkA href="https://github.com/godkor200"><FontAwesomeIcon icon={faGithub} /></AboutSLinkA>

              </AboutSLink>
            </AboutHover>
          </AboutCard>
          <AboutCard>
            <AboutIcon src={mira} />
            <AboutH2>곽미라</AboutH2>
            <AboutP>
              Team Member  &amp; Full Stack Developer
          </AboutP>
            <AboutHover>
              <AboutExplain>
                <AboutExplainH4>안녕하세요!</AboutExplainH4>
                <AboutExplainP>번뜩이는 아이디어를 실현시키는 개발자가 되고 싶은 곽미라 입니다.  team helpers에서 프론트 개발을 맡았습니다.</AboutExplainP>
              </AboutExplain>
              <AboutSLink>
                <AboutSLinkA href="https://hanliang38.tistory.com/"><FontAwesomeIcon icon={faBlogger} /></AboutSLinkA>
                &nbsp;&nbsp;
                <AboutSLinkA href="https://github.com/hanliang38"><FontAwesomeIcon icon={faGithub} /></AboutSLinkA>
              </AboutSLink>
            </AboutHover>
          </AboutCard>
          <AboutCard>
            <AboutIcon src={haseok} />
            <AboutH2>김하석</AboutH2>
            <AboutP>
              Team Member  &amp; Front-end Developer
          </AboutP>
            <AboutHover>
              <AboutExplain>
                <AboutExplainH4>안녕하세요.</AboutExplainH4>
                <AboutExplainP>UI/UX를 신경쓰는 개발자가 되려하는 김하석 입니다. team helpers에서 프론트 개발을 맡았습니다.</AboutExplainP>
              </AboutExplain>
              <AboutSLink>
                <AboutSLinkA href="https://hsssss-90.tistory.com/"><FontAwesomeIcon icon={faBlogger} /></AboutSLinkA>
                &nbsp;&nbsp;
                <AboutSLinkA href="https://github.com/haseok2118"><FontAwesomeIcon icon={faGithub} /></AboutSLinkA>
              </AboutSLink>
            </AboutHover>
          </AboutCard>
          <AboutCard>
            <AboutIcon src={minju}>

            </AboutIcon>
            <AboutH2>임민주</AboutH2>
            <AboutP>
              Team Member  &amp; Full Stack Developer
          </AboutP>
            <AboutHover>
              <AboutExplain>
                <AboutExplainH4>안녕하세요.</AboutExplainH4>
                <AboutExplainP> 어제보다 나은 개발자가 되고 싶은 임민주입니다. team helpers에서 프론트 개발을 맡았습니다.</AboutExplainP>
              </AboutExplain>
              <AboutSLink>
                <AboutSLinkA href="https://minju2996.tistory.com"><FontAwesomeIcon icon={faBlogger} /></AboutSLinkA>
                &nbsp;&nbsp;
                <AboutSLinkA href="https://github.com/imminju"><FontAwesomeIcon icon={faGithub} /></AboutSLinkA>
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