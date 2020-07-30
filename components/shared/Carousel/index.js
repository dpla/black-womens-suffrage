import React from "react"
import CarouselTile from "./CarouselTile"
import IconButton from "../IconButton"

const Carousel = ({tilesData}) => {
  return (
    <>
    <IconButton icon="static/images/icon/carousel/corousel-arrow-left.png"/>
    <IconButton icon="static/images/icon/carousel/corousel-arrow-right.png"/>

{/* {tilesData} */}
    {tilesData.map((data) => {
      <p>{data}</p>
      // <CarouselTile tile={data} />
    })}
    </>
  )
}

export default Carousel