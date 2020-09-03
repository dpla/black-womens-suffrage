import React from "react";

import ItemImage from "./ItemImage";
import ItemTermValuePair from "./ItemTermValuePair";

import { googleAnalytics, joinIfArray, readMyRights } from "lib";

import css from "./Content.module.scss";

/**
  * @param url, url to check for rights info
  * @return HTML with rights badge or null
  */
const RightsBadge = ({ url }) => {
  const myRights = readMyRights(url);
  return myRights
    ? <div className={css.rightsStatement}>
      <a
        href={myRights.url}
        title="Learn more about the copyright status of this item"
      >
        <img src={myRights.image} alt={myRights.description} />
      </a>
    </div>
    : null;
};

function getOnClickForExternalLink(item) {
  return (event) => {
    googleAnalytics.logEvent({
      contributor: joinIfArray(item.contributor, ","),
      type: "Click Through",
      partner: item.partner,
      itemId: item.id,
      title: joinIfArray(item.title, ",")
    });
  };
}

class MainMetadata extends React.Component {
  state = { isOpen: true }; // show it if js is disabled

  componentDidMount() {
    // now collapse it
    this.setState({ isOpen: false });
  }

  showMoreDescription() {
    this.setState({ isOpen: true });
  }

  render() {
    const { isOpen } = this.state;
    const { item } = this.props;
    const maxDescriptionLength = 600; //characters
    const descriptionIsLong = item.description
      ? joinIfArray(item.description).length > maxDescriptionLength
      : false;

    return (
      <div className={css.mainMetadata}>
        <dl className={css.contentDL}>
          <div className={css.termValuePair}>
            <dt className={`${css.term} ${css.imageLabel}`}>Image</dt>
            <dd className={css.value}>
              <ItemImage
                title=""
                type={item.type}
                url={item.thumbnailUrl}
                defaultImageClass={css.defaultItemImage}
                useDefaultImage={item.useDefaultImage}
              />
              {item.sourceUrl &&
                <a
                  rel="noopener"
                  target="_blank"
                  onClick={getOnClickForExternalLink(item)}
                  href={item.sourceUrl}
                >
                </a>
              }

              <div className={css.search__item_intro}>
                <p className={css.item__intro_title}>{item.title}</p>
                <p className={css.item__intro_date}>{item.date.displayDate}</p>
                <p className={css.item__intro_creator}>{joinIfArray(item.creator, ", ")}</p>
                
                <p className={css.item__intro_description}>
                {Array.isArray(item.description)
                  ?
                  item.description[0]
                  : item.description
                }
                </p>
                {/* <p className={css.description__link}>See Full Description Below</p> */}
              </div>


              {/* {item.edmRights && <RightsBadge url={item.edmRights} />} */}
              {/* 
        for situations where the rights are in sourceResource
        see: https://dp.la/item/7f2973c3c4429087b4874725f3bc67ad
        items should not have multiple rights but showing them in case a proper uri is present
         */}
              {item.rights && Array.isArray(item.rights)
                ? item.rights.map((theRight, index) => {
                  return <RightsBadge url={theRight} key={index} />;
                })
                : item.rights ? <RightsBadge url={item.rights} /> : null}
            </dd>
          </div>


          <div className={css.divider}></div>

          <section className={css.section_title}>
            <div className={css.section_title_left}></div>
            <h1><span>Item details</span></h1>
          </section>

          {item.title &&
            <div className={css.termValuePair}>
              <dt className={css.term}>
                Title:
              </dt>
              <dd className={[css.value, css.mainMetadataText].join(" ")}>
                {item.title}
              </dd>
            </div>}

            {item.creator &&
            <div className={css.termValuePair}>
              <dt className={css.term}>
                Creator:
              </dt>
              <dd className={[css.value, css.mainMetadataText].join(" ")}>
                {joinIfArray(item.creator, ", ")}
              </dd>
            </div>}

          {item.date &&
            <div className={css.termValuePair}>
              <dt className={css.term}>
                Date Created:
              </dt>
              <dd className={[css.value, css.mainMetadataText].join(" ")}>
                {item.date.displayDate}
              </dd>
            </div>}

          <div className={css.divider}></div>

          {item.description &&
            <div className={css.termValuePair}>
              <dt className={css.term}>
                Description
              </dt>
              <dd className={[css.value, css.mainMetadataText].join(" ")}>
                <div
                  id="dpla-description"
                  className={`${descriptionIsLong
                    ? css.longDescription
                    : ""} ${isOpen ? css.open : ""}`}
                >
                  {Array.isArray(item.description)
                    ? item.description.map((element, index) => {
                      return <p key={index}>{element}</p>;
                    })
                    : item.description}
                </div>
                {descriptionIsLong &&
                  <div
                    id="dpla-showmore"
                    aria-hidden="true"
                    className={`${css.showMore} ${isOpen ? css.open : ""}`}
                  >
                    <span
                      className={`link`}
                      onClick={() => this.showMoreDescription()}
                    >
                      Show full description
                    </span>
                  </div>}
              </dd>
            </div>}
        </dl>
      </div>
    );
  }
}

export default MainMetadata;
