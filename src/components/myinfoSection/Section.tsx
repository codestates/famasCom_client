import React from 'react'
import styled from 'styled-components';
import './Section.css'
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

const Section = ({ lightBg, topLine, lightText, lightTextDesc, headline, description,
  buttonLabel, img, alt, imgStart
}: IndexProps) => {

  return (
    <>
       <div
        className={lightBg ? 'info-section' : 'info-section info_darkBg'}
      >
        <div className='info_container'>
          <div
            className='info_row info-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='info_col'>
              <div className='info_text-wrapper'>
                
                <h1 className={lightText ? 'info_heading' : 'info_heading info_dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'info_subtitle'
                      : 'info_subtitle info_dark'
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

export default Section
//
//