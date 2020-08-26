import React from "react"
import Link from "next/link"
import scss from "../KeyFiguresPage/KeyFiguresPage.module.scss"
import { keyFigures } from "constants/key-figures"
import PageBanner from "shared/PageBanner"
import { useRouter } from "next/router"
import SojournerTruth from "./AllKeyFigures/SojournerTruth"

const KeyFiguresPage = ({ figure }) => {

  const router = useRouter();
  // If routher.asPath = /key-figures/sojournerTruth, then pathId = sojournerTruth
  const pathId = router.asPath.split("/").pop();
  const ComponentName = figure.component

  return (
    <>
      <PageBanner title="KEY FIGURES" text="Shining a light on Black women's activism" graphic="/static/graphic/about-page/about-graphic-hero.png"/>

      {/* <MobileDropdown items={keyFigures}/> */}

      <section className={`${scss.key_figures} section__default`}>
        <div className={scss.key_figures__left}>
          <ul>
            {Object.keys(keyFigures).map((key, index) => {
              const fig = keyFigures[key]

              return (
                <li 
                key={`key-figure-${index+1}`} 
                id={index}
                value={fig.value} 
                >
                  <Link href="/key-figures/[figId]" as={`/key-figures/${ key }`}>
                    <a className={
                      (key == pathId ? scss.key_figures__active_item : scss.key_figures__li)
                    }>
                      { fig.name }
                    </a>
                  </Link>
                </li> 
              )
            })}
          </ul>
        </div>

        <div className={scss.key_figures__right}>
          {figure.value == "SojournerTruth" && <SojournerTruth />}
          {/* <ComponentName /> */}
        </div> 
      </section>
    </>
  );
}
  
export default KeyFiguresPage
