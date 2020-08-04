// import React from "react"
// import CarouselTile from "./CarouselTile"
// import IconButton from "../IconButton"

// const Carousel = ({tilesData}) => {
//   return (
//     <>
//     <IconButton icon="static/images/icon/carousel/corousel-arrow-left.png"/>
//     <IconButton icon="static/images/icon/carousel/corousel-arrow-right.png"/>

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
import scss from "../Carousel/Carousel.module.scss"
import Link from "next/link"

const Carousel = ({
  items,
  slidesToShow,
}) =>
    <div className={`site-max-width`}>
      <Slider
        slidesToShow={slidesToShow ? slidesToShow : 2.5}
        infinite={false}
        nextArrow={<IconButton icon="static/images/icon/carousel/corousel-arrow-right.png"/>}
        prevArrow={<IconButton icon="static/images/icon/carousel/corousel-arrow-left.png"/>}
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
      
        {/* {items.map(
          ({ title, image, thumbnailUrl, href }, index) =>
            <div key={`${title}—${index}`}>
              <Link href={href}>
                <a className={scss.item}>
                  <div className={scss.itemImgWrapper}>
                    <div
                      className={scss.itemImg}
                      style={{
                        backgroundImage: `url(${image || thumbnailUrl})`
                      }}
                    />
                  </div>
                </a>
              </Link>
            </div>
        )} */}
      </Slider>
    </div>

export default Carousel;