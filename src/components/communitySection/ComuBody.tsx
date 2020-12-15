import React from 'react'
import styled from 'styled-components';
import './ComuBody.css'
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
//sss
const ComuBody = ({ lightBg, topLine, lightText, lightTextDesc, headline, description,
  buttonLabel, img, alt, imgStart
}: IndexProps) => {

  return (
    <>
       <div
        className={lightBg ? 'community-section' : 'community-section community_darkBg'}
      >
        <div className='community_container'>
          <div
            className='community_row community-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='community_col'>
              <div className='community_text-wrapper'>
                
                <h1 className={lightText ? 'community_heading' : 'community_heading community_dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'community_subtitle'
                      : 'community_subtitle community_dark'
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

export default ComuBody
