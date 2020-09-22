import React from "react"
import scss from "components/KeyFiguresPage/KeyFiguresPage.module.scss"
import BWSHead from "components/BWSHead"

const IntroAndPortrait = ({ figure }) => {

  const container_class = figure.image ? 
    scss.key_figures__intro_container_with_portrait :
    scss.key_figures__intro_container_no_portrait

  return (
    <>
      <BWSHead 
        pageTitle={`${figure.name} | DPLA`}
        pageDescription={`Biography of ${figure.name}`}
        pageImage={figure.image}
        seoType="article"
      />
      <div className={container_class}>
        <div className={scss.key_figures__intro}>
          <div className={scss.key_figures__info}>
            <h6 className={scss.key_figures__dates}>{ figure.date }</h6>
            <h2 className={scss.key_figures__name} data-cy="key_figures__name">{ figure.name }</h2>
          </div>
        </div>
      </div>

      { figure.image &&
        <div className={scss.key_figures__portrait}>
          <img src={ figure.image } alt={`Portrait of ${figure.name}`}/>
        </div>
      }
    </>
  )
}

export default IntroAndPortrait