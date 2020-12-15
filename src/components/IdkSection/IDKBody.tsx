import React from 'react'
import styled from 'styled-components';
import './IDKBody.css'
import { Link } from 'react-scroll';

type IndexProps = {
  lightBg: boolean;
  topLine: string;
  lightText: boolean;
  lightTextDesc: boolean;
  headline: string;
  description: string;
  buttonLabel: string;
  img: string;
  alt: string;
  imgStart: string;
}

const IDKBody = ({ lightBg, topLine, lightText, lightTextDesc, headline, description,
  buttonLabel, img, alt, imgStart
}: IndexProps) => {

  return (
    <>
       <div
        className={lightBg ? 'idk-section' : 'idk-section idk_darkBg'}
      >
        <div className='idk_container'>
          <div
            className='idk_row idk-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='idk_col'>
              <div className='idk_text-wrapper'>
                
                <h1 className={lightText ? 'idk_heading' : 'idk_heading idk_dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'idk_subtitle'
                      : 'idk_subtitle mob_dark'
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

export default IDKBody
//sss