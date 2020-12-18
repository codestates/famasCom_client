import React from 'react';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  MainBtn,
  Topline
} from './HeroElements';
import video from 'videos/video.mp4'

//

function HeroSection() {
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={video}/>
        {/* <iframe width="100%" height="100%" src="http://play.smartucc.kr/player.php?origin=4be5deb2bbad1c0c0570d9414ef9f276" allow="fullscreen" frameBorder="0"  ></iframe> */}
      </HeroBg>
      <HeroContent>
        <Topline>느려도 괜찮아 🙆🏻‍♂️</Topline>
        <HeroH1>천천히 하나씩 학습해가는 어른을 위한 공간 📝</HeroH1>
        <HeroP>
        fama's에서 무엇이든 어떤 것이든 디지털 세상에 궁금했던 것들을 알아갈 수 있습니다.
        </HeroP>
        <HeroBtnWrapper>
        <MainBtn to="start" spy={true} smooth={true} offset={-80} duration={500} activeClass='true'>
                  여기를 눌러보세요
        </MainBtn>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
