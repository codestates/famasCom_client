import React from 'react'
import styled from 'styled-components';
import './AboutSection.css'
import { Link } from 'react-scroll';

type IndexProps = {
  lightBg: boolean;
  topLine: string;
  lightText: boolean;
  lightTextDesc: boolean;
  headline: string;
  description: string;
  imgStart: string;
}
//
const AboutBody = ({ lightBg, topLine, lightText, lightTextDesc, headline, description, imgStart }: IndexProps) => {

  return (
    <>
       <div
        className={lightBg ? 'about__body-section' : 'about__body-section darkBg'}
      >
        <div className='container'>
          <div
            className='row about__body-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='about__body-text-wrapper'>
                <div className='top-line'>{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading _dark'} >
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'about__body-subtitle'
                      : 'about__body-subtitle _dark'
                  }
                >
                  {description}
                </p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
      </>
  )
}

export default AboutBody;
