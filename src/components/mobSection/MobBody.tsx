import React from 'react'
import styled from 'styled-components';
import './MobBody.css'
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

const MobBody = ({ lightBg, topLine, lightText, lightTextDesc, headline, description,
  buttonLabel, img, alt, imgStart
}: IndexProps) => {

  return (
    <>
       <div
        className={lightBg ? 'mob-section' : 'mob-section mob_darkBg'}
      >
        <div className='mob_container'>
          <div
            className='mob_row mob-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='mob_col'>
              <div className='mob_text-wrapper'>
                
                <h1 className={lightText ? 'mob_heading' : 'mob_heading mob_dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'mob_subtitle'
                      : 'mob_subtitle mob_dark'
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

export default MobBody
//ssss