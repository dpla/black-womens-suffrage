import React from "react"
import scss from "../Footer/Footer.module.scss"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className={scss.footer}>

      <div className={scss.footer__container}>
        <section className={scss.footer__section_top}>
          <div data-cy="footer__logo">
            <Link href="/">
              <a>
                <img src="/static/logo/dpla_bws-logo-white-footer.svg" alt="Black Women's Suffrage Logo"/>
              </a>
            </Link>
          </div>          

          <nav className={scss.footer__links} data-cy="footer__links">
            <Link href="/about">
              <a>About</a>
            </Link>

            <Link href="/timeline">
              <a>Timeline</a>
            </Link>

            <Link href="/key-figures">
              <a>Key Figures</a>
            </Link>

            <Link href="/collections">
              <a>Collections</a>
            </Link>

            <Link href="/partners">
              <a>Partners</a>
            </Link>
          </nav>

          <a href="http://dp.la/" rel="noopener" target="_blank" data-cy="footer__logo_dpla"> 
            <img src="/static/logo/dpla-logo-footer.svg" alt="Digital Public Library of America Logo"/>
          </a>
        </section>

        <section className={scss.footer__divider}></section>
        <div className={scss.footer__links_small_container}>
          <nav className={scss.footer__links_small} data-cy="footer__links_small">
            <a href="http://dp.la/" rel="noopener" target="_blank" className={scss.footer__a}> Visit DPLA</a>

            <Link href="/harmful-language-statement">
              <a>Harmful Language Statement</a>
            </Link>
          </nav>

          <section className={scss.footer__section_bottom}>
            <p className={scss.footer__p}>The copyright status of items in DPLA's Black Women's Suffrage Collection varies. DPLA links to a wide variety of different materials: many are in the public domain,
            while others are under rights restrictions but nonetheless publicly viewable. For individual rights information about an item, please check the “Rights” field in the metadata,
        or follow the link to the digital object on the content provider’s website for more information.</p>
          </section>
        </div>
      </div>
    </footer>
  )
}

export default Footer