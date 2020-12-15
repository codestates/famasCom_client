import React from 'react'
import styled from 'styled-components';
import './ComBody.css'
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
const ComBody = ({ lightBg, topLine, lightText, lightTextDesc, headline, description,
  buttonLabel, img, alt, imgStart
}: IndexProps) => {

  return (
    <>
       <div
        className={lightBg ? 'com-section' : 'com-section com_darkBg'}
      >
        <div className='com_container'>
          <div
            className='com_row com-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='com_col'>
              <div className='com_text-wrapper'>
                
                <h1 className={lightText ? 'com_heading' : 'com_heading com_dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'com_subtitle'
                      : 'com_subtitle mob_dark'
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

export default ComBody
