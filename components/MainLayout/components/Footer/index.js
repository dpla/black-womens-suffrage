import React from "react";
import SmallFooterLocal from "./SmallFooterLocal";
import { SITE_ENV } from "constants/env";
import css from "./Footer.module.scss";

const Footer = ({ route }) =>
  <footer className={css.wrapper}>
    {SITE_ENV === "local" && <SmallFooterLocal route={route} />}
  </footer>;
export default Footer;
