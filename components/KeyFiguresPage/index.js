import React from "react"
import Link from "next/link"
import scss from "../KeyFiguresPage/KeyFiguresPage.module.scss"
import { keyFigures } from "constants/key-figures"
import PageBanner from "shared/PageBanner"
import { useRouter } from "next/router"
import dynamic from 'next/dynamic'
import KeyFiguresPagination from "components/KeyFiguresPage/KeyFiguresPagination"
import Dropdown from 'react-dropdown'

function KeyFiguresPage({ figure }) {

  const router = useRouter();
  const DynamicComponent = dynamic(import(`./AllKeyFigures/${ figure.value }`));
  const figIds = Object.keys(keyFigures);
  const currentIndex = figIds.indexOf(figure.figId);
  const nextFig = figIds[currentIndex + 1];
  const prevFig = figIds[currentIndex - 1];

  function _onSelect (option) {
    const newFig = figIds.find(key => keyFigures[key]["name"] === option.label);
    router.push("/key-figures/[figId]", `/key-figures/${ newFig }`);
  }

  return (
    <>
      <PageBanner title="KEY FIGURES" text="Shining a light on Black women's activism" graphic="/static/graphic/about-page/about-graphic-hero.png"/>

      <Dropdown 
        options={ Object.values(keyFigures).map(f => f.name) } 
        onChange={ _onSelect } 
        value={ figure.name }
        className={ scss.key_figures__dropdown } />

      <section className={`${scss.key_figures} section__default`}>

        <div className={scss.key_figures__left} data-cy="key_figures__left">

          <ul>
            { figIds.map((key, index) => {
              const fig = keyFigures[key]

              return (
                <li 
                key={`key-figure-${index+1}`} 
                id={index}
                value={fig.value} 
                >
                  <Link href="/key-figures/[figId]" as={`/key-figures/${ key }`}>
                    <a className={
                      (key == figure.figId ? scss.key_figures__active_item : scss.key_figures__li)
                    }>
                      <span></span>
                      { fig.name }
                    </a>
                  </Link>
                </li> 
              )
            })}
          </ul>
        </div>

        <div className={scss.key_figures__right}>
          <DynamicComponent />
          <KeyFiguresPagination prevFigure={ prevFig } nextFigure={ nextFig } />
        </div> 
      </section>
    </>
  );
}
  
export default KeyFiguresPage
