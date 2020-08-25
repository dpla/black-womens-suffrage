import React from "react";
import Link from "next/link";

import css from "./ResourcesTabs.module.scss";

class ResourcesTabs extends React.Component {
  render() {
    const { currentTab, slug } = this.props;
    return (
      <div id="tabs" className={`${css.wrapper}`}>
        <div className={css.tabsWrapper}>
          <ul role="tablist" className={`${css.tabs} .container`}>
            <li
              id="tab-sourceset"
              role="tab"
              aria-selected={currentTab === "sourceSet"}
              className={[
                css.tab,
                currentTab === "sourceSet" && css.activeTab
              ].join(" ")}
            >
              <Link
                href={`/primary-source-sets/set?set=${slug}#tabs`}
                as={`/primary-source-sets/${slug}#tabs`}
              >
                <a>
                  Source Set
                </a>
              </Link>
            </li>
            <li
              id="tab-additionalresources"
              role="tab"
              aria-selected={currentTab === "additionalResources"}
              className={[
                css.tab,
                currentTab === "additionalResources" && css.activeTab
              ].join(" ")}
            >
              <Link
                href={`/primary-source-sets/set/additional-resources?set=${slug}#tabs`}
                as={`/primary-source-sets/${slug}/additional-resources#tabs`}
              >
                <a>
                  Additional Resources
                </a>
              </Link>
            </li>
            <li
              id="tab-teachingguide"
              role="tab"
              aria-selected={currentTab === "teachingGuide"}
              className={[
                css.tab,
                currentTab === "teachingGuide" && css.activeTab
              ].join(" ")}
            >
              <Link
                href={`/primary-source-sets/set/teaching-guide?set=${slug}#tabs`}
                as={`/primary-source-sets/${slug}/teaching-guide#tabs`}
              >
                <a>
                  Teaching Guide
                </a>
              </Link>
            </li>
          </ul>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default ResourcesTabs;
