import React from "react"
import scss from "components/CollectionsPage/CollectionHeader/CollectionHeader.module.scss"

const CollectionHeader = ({ image, years, name, styledText, description }) => {
  return (
    <section className={scss.collection_header}>
      <img src={image} alt={name} />

      <div className={scss.collection_header__intro}>
        <h3>{years}</h3>
        <h2>{name}</h2>

        <div className={scss.left_border_text_box__container}>
          <p>
            <span>{styledText}</span>
            {description}
          </p> 
        </div>
      </div>
        
    </section>
  )
}

export default CollectionHeader;
