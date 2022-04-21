import React from 'react'
import Hero from '../HomeSection/Hero'
import HomeAbout from '../HomeSection/HomeAbout'
import MostPopular from '../Popular/MostPopular'
import DestinationHome from '../Destina/DestinationHome'
import Download from '../Download/Download'
import Works from '../Works/Works'
import Gallery from '../gallery2/Gallery'

const Home = () => {
  return (
    <>
        <Hero />
        <HomeAbout/>
        <MostPopular />
        <DestinationHome />
        <Download />
        <Works />
        <Gallery />
    </>
  )
}

export default Home