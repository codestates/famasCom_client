import React from 'react';

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>서비스 소개</ServicesH1>
      <ServicesWrapper>
        <ServicesCard to="/Lecture">
          <ServicesIcon  src='images/study.png'/>
          <ServicesH2>학습하기</ServicesH2>
          <ServicesP>
            컴퓨터와 모바일 사용에 필요한 지식들을 학습할 수 있습니다.
          </ServicesP>
        </ServicesCard>
        <ServicesCard to="/Community">
          <ServicesIcon  src='images/social.png'/>
          <ServicesH2>커뮤니티</ServicesH2>
          <ServicesP>
            알게된 지식을 여러 사용자와 공유하거나, 새로운 지식을 얻어갈 수 있습니다.
          </ServicesP>
        </ServicesCard>
        <ServicesCard to="">
          <ServicesIcon  src='images/build.png'/>
          <ServicesH2>게임</ServicesH2>
          <ServicesP>
            강의 콘텐츠 안에 있는 게임들을 즐길 수 있습니다. 즐거운 성장이 기다리고 있습니다.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
//