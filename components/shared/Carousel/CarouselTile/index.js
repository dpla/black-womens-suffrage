import React from "react"
import scss from "../CarouselTile/CarouselTile.module.scss"

const CarouselTile = ({tile}) => {
  return (
    <>
      <div className={scss.carousel__tile}>
        <img src={tile.image}/>
        <div className={scss.tile__title}>
          <p>{tile.title}</p>
        </div>
      </div>
    </>
  )
}

export default CarouselTile