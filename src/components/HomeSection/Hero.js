import React from 'react'
import Slide from './Slide'
import Data from './Data'
import './../pages/Home.css'

const Hero = () => {
  return (
    <Slide slides={Data}/>
  )
}

export default Hero