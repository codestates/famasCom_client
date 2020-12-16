import React from 'react'
import { aboutObj } from './Data'
import AboutBody from './AboutBody'

const AboutSection = () => {
  return (
    <>
      <AboutBody {...aboutObj} /> 
    </>
  )
}

export default AboutSection
//