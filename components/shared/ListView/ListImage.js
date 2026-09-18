import React from "react";
import Link from "next/link";

import { getDefaultThumbnail } from "lib";

import css from "./ListView.module.scss";

class ListImage extends React.Component {
  state = {
    updateToDefaultImage: false,
  };

  componentDidUpdate(prevProps) {
    // A new url deserves a fresh attempt before falling back again.
    if (prevProps.url !== this.props.url) {
      this.setState(
        state => (state.updateToDefaultImage ? { updateToDefaultImage: false } : null)
      );
    }
  }

  // Returning null when already fallen back keeps a failing default thumbnail
  // from re-rendering on every error it raises.
  handleError = () => {
    this.setState(
      state => (state.updateToDefaultImage ? null : { updateToDefaultImage: true })
    );
  };

  render() {
    const { type, url, useDefaultImage, item, title } = this.props;
    const { updateToDefaultImage } = this.state;
    const useDefaultWrapper = updateToDefaultImage || useDefaultImage;
    // One element, used by both branches below, so neither can lose onError.
    const thumbnail = (
      <img
        src={updateToDefaultImage ? getDefaultThumbnail(type) : url}
        onError={this.handleError}
        alt=""
        className={css.image}
      />
    );

    return (
      <div
        className={`${css.imageWrapper} ${
          useDefaultWrapper ? css.defaultImageWrapper : ""
        }`}
      >
        {/* see issue #869 for details on this hack */}
        {item.id !== "http://dp.la/api/items/#sourceResource" &&
          <Link
            href={item.linkHref}
            className={`${css.listItemImageLink} internalItemLink`}
            title={title}
            aria-hidden={true}
          >
            {thumbnail}
          </Link>}
        {/* see issue #869 for details on this hack */}
        {item.id === "http://dp.la/api/items/#sourceResource" &&
          <span className={css.listItemImageLink} aria-hidden>
            {thumbnail}
          </span>}
      </div>
    );
  }
}

export default ListImage;
