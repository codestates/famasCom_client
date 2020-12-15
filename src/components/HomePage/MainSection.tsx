import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import './MainSection.css'

type IndexProps = {
  lightBg: boolean;
  topLine: string;
  lightText: boolean;
  lightTextDesc: boolean;
  description: string;
  buttonLabel: string;
  imgStart: string;
  id: string;
}
//
const MainSection = ({ lightBg, topLine, lightText, lightTextDesc, description,
  buttonLabel, imgStart, id
}: IndexProps) => {
  return (
    <>
       <div id={id}
        className={lightBg ? 'home__section' : 'home__section darkBg'}>
        <div className='home_container'>
            <div className='home_col1'>
              <div className='home__img-wrapper'>
                <img src='images/mob.png' alt='mob' className='home__hero-img'  />
              </div>
              <div className='home__text-wrapper'>
                <div className='home_top-line'>{topLine}</div>
                <p className={lightText ? 'home_heading' : 'home_heading dark'}>
                  휴대폰 사용이 어려우신가요?
                </p>
                <p
                  className={
                    lightTextDesc
                      ? 'home__subtitle'
                      : 'home__subtitle dark'
                  }
                >
                  {description}
                </p>
                <HomeMainBtn to="/MobExplain">{buttonLabel}</HomeMainBtn>
              </div>
            </div>
            
            <div className='home_col2'>
            <div className='home__img-wrapper'>
                <img src='images/desk.png' alt='desk' className='home__hero-img' />
              </div>
              <div className='home__text-wrapper'>
                <div className='home_top-line'>{topLine}</div>
                <p className={lightText ? 'home_heading' : 'home_heading dark'}>
                  컴퓨터 사용이 어려우신가요?
                </p>
                <p
                  className={
                    lightTextDesc
                      ? 'home__subtitle'
                      : 'home__subtitle dark'
                  }
                >
                  {description}
                </p>
                <HomeMainBtn to="/ComExplain">{buttonLabel}</HomeMainBtn>
              </div>
            </div>
         

            <div className='home_col3' >
            <div className='home__img-wrapper'>
                <img src='images/new.png' alt='new' className='home__hero-img'/>
              </div>
              <div className='home__text-wrapper'>
                <div className='home_top-line'>{topLine}</div>
                <p className={lightText ? 'home_heading' : 'home_heading dark'}>
                  시작이 어려우신가요?
                </p>
                <p
                  className={
                    lightTextDesc
                      ? 'home__subtitle'
                      : 'home__subtitle dark'
                  }
                >
                  회원가입과 로그인 하는 방법부터 차근차근 알아가며 진행하고 새로운 세상을 접해봐요!
                </p>
                <HomeMainBtn to="/IDK">{buttonLabel}</HomeMainBtn>
              </div>
            </div>
        </div>
      </div>
      </>
  )
}

export default MainSection

const HomeMainBtn = styled(Link)`
border-radius: 5px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 10px;
  color: #010606;
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #1c2237;
    color: #fff;
};
`
