import React from "react";
import Link from "next/link";

import css from "./PSSFooter.module.scss";

const OtherInfo = () =>
  <div className={css.wrapper}>
    <div className={[`.container`, css.otherInfo].join(" ")}>
      <p className={css.p}>
        <span>
          These sets were created and reviewed by the teachers on the&nbsp;
        </span>
        <Link href="//pro.dp.la/education/education-advisory-committee">
          <a className="link">
            DPLA's Education Advisory Committee.
          </a>
        </Link>{" "}
        <span>
          Explore resources and ideas for{" "}
          <Link href="/about/using-dplas-primary-source-sets">
            <a>Using DPLA's Primary Source Sets</a>
          </Link>{" "}
          in your classroom.
        </span>
      </p>
      <p className={css.p}>
        <span>
          To give feedback, contact us at {" "}
          <a className="link" href={`mailto:education@dp.la`}>
            education@dp.la
          </a>. You can also{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="link external"
            href={`https://docs.google.com/a/dp.la/forms/d/e/1FAIpQLSfOGifC4Z591F_8hMrI8YiHX1BhXEGNPZqIq7LRFEYwiNYF9w/viewform`}
          >
            suggest a primary source set topic
          </a>{" "}
          or view resources for{" "}
          <a className="link external" target="_blank" href={`https://pro.dp.la/education/national-history-day`}>
            National History Day
          </a>.
        </span>
      </p>
    </div>
  </div>;

export default OtherInfo;
