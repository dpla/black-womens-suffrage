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

const Carousel = ({
  browseLinkName,
  browseLinkUrl,
  items,
  slidesToShow,
  title,
}) =>
  <div className={`${scss.wrapper}`}>
    <div className={`${scss.content} site-max-width`}>
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
        {items.map((data, index) => {
          return(
            <CarouselTile tile={data} key={`home-carousel-tile-${index + 1}`}/>
          )
        })}
      
        {/* {items.map(
          ({ name, repImageUrl, thumbnailUrl, isFeatured, href, as }, index) =>
            <div key={`${name}—${index}`}>
              <Link prefetch href={href} as={as}>
                <a className={scss.item}>
                  <div className={scss.itemImgWrapper}>
                    <div
                      className={scss.itemImg}
                      style={{
                        backgroundImage: `url(${repImageUrl || thumbnailUrl})`
                      }}
                    />
                  </div>
                </a>
              </Link>
            </div>
        )} */}
      </Slider>
    </div>
  </div>;

export default Carousel;
