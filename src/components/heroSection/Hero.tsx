import React from 'react'
import { homeObjOne } from './Data'
import MainSection from './MainSection'

const Hero = () => {
  return (
    <>
      <MainSection {...homeObjOne} /> 
    </>
  )
}

export default Hero
