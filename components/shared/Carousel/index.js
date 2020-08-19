// import React from "react"
// import CarouselTile from "./CarouselTile"
// import IconButton from "../IconButton"

// const Carousel = ({tilesData}) => {
//   return (
//     <>
//     <IconButton icon="static/assets/icon/carousel/corousel-arrow-left.png"/>
//     <IconButton icon="static/assets/icon/carousel/corousel-arrow-right.png"/>

//     {tilesData.map((data, index) => {
//       return(
//         <CarouselTile tile={data} key={`home-carousel-tile-${index + 1}`}/>
//       )
//     })}
//     </>
//   )
// }

// export default Carousel

import React from "react"
import Slider from "react-slick"
import CarouselTile from "./CarouselTile"
import IconButton from "../IconButton"

const Carousel = ({items,slidesToShow,}) => {
  return (
    <Slider
      slidesToShow={slidesToShow ? slidesToShow : 2.5}
      infinite={false}
      nextArrow={<IconButton icon="static/assets/icon/carousel/corousel-arrow-right.png"/>}
      prevArrow={<IconButton icon="static/assets/icon/carousel/corousel-arrow-left.png"/>}
      draggable={false}
      slidesToScroll={slidesToShow ? Math.floor(slidesToShow) : 2}
      responsive={[
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1.125,
            arrows: false,
            draggable: true,
            slidesToScroll: 1
          }
        }
      ]}
    >
      {items.map((item, index) => {
        return(
          <CarouselTile tile={item} key={`home-carousel-tile-${index + 1}`}/>
        )
      })}
    </Slider>
  )
}
  

export default Carousel;