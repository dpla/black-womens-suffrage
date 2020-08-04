import React from "react"
import scss from "../CarouselTile/CarouselTile.module.scss"
import Link from "next/link"

const CarouselTile = ({tile}) => {
  return (
    <>
    <Link href={tile.href}>
      <div className={scss.carousel__tile}>
        <img src={tile.image} className={scss.carousel__image}/>
        <div className={scss.tile__title}>
          <p>{tile.title}</p>
        </div>
      </div>
    </Link>
      

      {/* <div key={`${title}—${index}`}> */}
        {/* <Link href={tile.href}>
          <a className={scss.item}>
            <div className={scss.itemImgWrapper}>
              <div
                className={scss.itemImg}
                style={{
                  backgroundImage: `url(${tile.image || thumbnailUrl})`
                }}
              />
            </div>
          </a>
        </Link> */}
      {/* </div> */}
    </>
  )
}

export default CarouselTile