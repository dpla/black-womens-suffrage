import React from "react";
import { withRouter } from "next/router";
import fetch from "isomorphic-fetch";

import MainLayout from "components/MainLayout";
import PSSFooter from "components/PrimarySourceSetsPage/PSSFooter";
import BreadcrumbsModule from "components/PrimarySourceSetsPage/BreadcrumbsModule";
import SourceSetInfo from "components/PrimarySourceSetsPage/SingleSet/SourceSetInfo";
import ResourcesTabs from "components/PrimarySourceSetsPage/SingleSet/ResourcesTabs";
import SourceSetSources from "components/PrimarySourceSetsPage/SingleSet/SourceSetSources";

import { removeQueryParams, getCurrentFullUrl } from "lib";
import { PSS_BASE_URL } from "constants/primarySourceSets";

const videoIcon = "/static/placeholderImages/Video.svg";
const audioIcon = "/static/placeholderImages/Sound.svg";

const SingleSet = ({ slug, set, url, currentFullUrl }) =>
  <MainLayout
    route={url}
    pageTitle={set.name.replace(/\*/g, "")}
    pageImage={set.repImageUrl || set.thumbnailUrl}
  >
    <BreadcrumbsModule
      breadcrumbs={[
        {
          title: "Primary Source Sets",
          url: {
            pathname: "/primary-source-sets",
            query: removeQueryParams(url, ["set"])
          }
        },
        { title: set.name, search: "" }
      ]}
      route={url}
    />
    <SourceSetInfo
      set={set}
      currentFullUrl={currentFullUrl}
      openDescription={false}
    />
    <ResourcesTabs currentTab="sourceSet" slug={slug}>
      <SourceSetSources
        sources={set.hasPart.filter(
          item => item.disambiguatingDescription === "source"
        )}
        route={url}
      />
    </ResourcesTabs>
    <PSSFooter />
  </MainLayout>;

SingleSet.getInitialProps = async ({ query, req }) => {
  const slug = query.slug;
  const currentFullUrl = getCurrentFullUrl(req);
  const res = await fetch(`${PSS_BASE_URL}/sets/${slug}.json`);
  const json = await res.json();
  const parts = json.hasPart.map(part => {
    let thumbnailUrl = part.thumbnailUrl;
    let useDefaultImage = false;
    const type =
      part.mainEntity && part.mainEntity[0] && part.mainEntity[0]["@type"];
    if (type === "AudioObject") {
      thumbnailUrl = audioIcon;
      useDefaultImage = true;
    } else if (type === "VideoObject") {
      thumbnailUrl = videoIcon;
      useDefaultImage = true;
    }
    return Object.assign({}, part, { thumbnailUrl, useDefaultImage });
  });
  return { slug, set: Object.assign({}, json, { hasPart: parts }), currentFullUrl };
};

export default withRouter(SingleSet);
