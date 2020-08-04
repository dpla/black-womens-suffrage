import React from "react"
import scss from "../Footer/Footer.module.scss"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className={scss.footer}>

      <section className={scss.footer__section}>
        <div id={scss.footer__logo}>
          <img src="static/images/logo/dpla_bws-logo-white-footer.png" />
        </div>

        <nav className={scss.footer__links}>
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

          <Link href="/topics">
            <a>Topics</a>
          </Link>

          <Link href="/partners">
            <a>Partners</a>
          </Link>
        </nav>

        <div id={scss.navLogo}>
          <img src="../static/images/logo/dpla-logo-footer.png" />
        </div>
      </section>

      <section className={scss.footer__divider}></section>

      <section className={scss.footer__section}>
        <p className={scss.footer__p}>The copyright status of items in DPLA's Black Women's Suffrage Collection varies. DPLA links to a wide variety of different materials: many are in the public domain,
while others are under rights restrictions but nonetheless publicly viewable. For individual rights information about an item, please check the “Rights” field in the metadata,
or follow the link to the digital object on the content provider’s website for more information.</p>

        <nav className={scss.footer__links_small}>
          <a href="http://dp.la/"> Visit DPLA</a>

          <Link href="/harmful-language-disclaimer">
            <a>Harmful Language Disclaimer</a>
          </Link>
        </nav>
      </section>

    </footer>
  )
}

export default Footer