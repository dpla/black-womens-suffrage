import React from "react"
import scss from "../CarouselTile/CarouselTile.module.scss"

const CarouselTile = ({tile}) => {
  return (
    <>
      <div className={scss.carousel_tile}>
        <img src={tile.image}/>
        <div>
          <p>{tile.title}</p>
        </div>
      </div>
    </>
  )
}

export default CarouselTile