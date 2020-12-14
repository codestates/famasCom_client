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

const MainSection = ({ lightBg, topLine, lightText, lightTextDesc, description,
  buttonLabel, imgStart, id
}: IndexProps) => {
  return (
    <>
       <div id={id}
        className={lightBg ? 'home__section' : 'home__section darkBg'}>
        <div className='home_container' style={{
                  marginLeft:"0"
                }}>
          <div
            className='row home__row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            
            <div className='home_col'>
              <div className='home__img-wrapper'>
                <img src='images/mob.png' alt='mob' className='home__hero-img' style={{
                  marginLeft:"0"
                }} />
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
            
            <div className='home_col'>
            <div className='home__img-wrapper'>
                <img src='images/desk.png' alt='desk' className='home__img' />
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
         

            <div className='home_col' style={{flexBasis:"0"}}>
            <div className='home__img-wrapper'>
                <img src='images/new.png' alt='new' className='home__img'/>
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
                  {description}
                </p>
                <HomeMainBtn to="/IDK">{buttonLabel}</HomeMainBtn>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      </>
  )
}

export default MainSection

const HomeMainBtn = styled(Link)`
border-radius: 50px;
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
    background: beige;
    color: #010606;
};
`
