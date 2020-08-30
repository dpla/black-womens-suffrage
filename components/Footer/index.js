import React from "react";
import Link from "next/link";
import scss from "./Footer.module.scss";

class Footer extends React.Component {

    render() {
        return (

            <div className={scss.footerWrapper}>
                <div className={scss.bevel}/>
                <div className={scss.logoNavRow}>
                    <div className={scss.bws__logo}>
                        <Link href={"/"}>
                            <a>
                                <img src={"/static/logo/dpla_bws-logo-white-footer.png"}
                                     alt={"Black Womens' Suffrage"}/>
                            </a>
                        </Link>
                    </div>
                    <ul className={scss.footer_nav}>
                        <li><Link href={"/about"}><a>About</a></Link></li>
                        <li><Link href={"/timeline"}><a>Timeline</a></Link></li>
                        <li><Link href={"/key-figures"}><a>Key Figures</a></Link></li>
                        <li><Link href={"/collections"}><a>Collections</a></Link></li>
                        <li><Link href={"/partners"}><a>Partners</a></Link></li>
                    </ul>
                    <div className={scss.dpla__logo}>
                        <a href={"https://dp.la"} target={"_blank"}><img src={"/static/logo/dpla-logo-footer.png"} alt={"DPLA Logo"}/></a>
                    </div>
                </div>
                <div className={scss.dividerLine}/>
                <div className={scss.copyrightRow}>
                    <p className={scss.itemCopyrightText}>The copyright status of items in DPLA's Black Women's Suffrage
                        Collection varies. DPLA links to a wide variety of different materials: many are in the public
                        domain,
                        while others are under rights restrictions but nonetheless publicly viewable. For individual
                        rights information about an item, please check the “Rights” field in the metadata,
                        or follow the link to the digital object on the content provider’s website for more
                        information. </p>
                    <div className={scss.visitAndHarmfulLinks}><a href={"https://dp.la"} target={"_blank"}>Visit DPLA</a>
                        <div className={scss.verticalDivider}/>
                        <Link href={"/harmful-language-statement"}><a>Harmful Language Statement</a></Link></div>
                    <br clear="all"/>
                </div>
            </div>

        );
    };
}

export default Footer;