import React from "react"
import Card from "./Card"
import "./Gallery.css"
import HeadTitle from "../HeadTitle/HeadTitle"
import GalleryData from "./GalleryData"

const Gallery = () => {
  return (
    <>
      <HeadTitle />
      {/* <GalleryData/> */}
      <section className='gallery top'>
        <div className='container grid'>
          {
            GalleryData.map((value) => {
              return <Card images={value.img} title={value.title}/>
            })
          }
        </div>
      </section>
      
    </>
  )
}

export default Gallery