import React from "react";
import fetch from "isomorphic-fetch";
import ReactMarkdown from "react-markdown";
import { withRouter } from "next/router";

import PSSFooter from "components/PrimarySourceSetsPage/PSSFooter";
import TeachersGuide from "components/PrimarySourceSetsPage/SingleSet/TeachersGuide";

import { PSS_BASE_URL } from "constants/primarySourceSets";

import { getCurrentFullUrl } from "lib";

class Printable extends React.Component {
  componentDidMount() {
    // make it print!
    window.print();
  }

  render() {
    const {
      router,
      set,
      teachingGuide,
      currentPath,
      currentFullUrl
    } = this.props;
    return (
      <div>
        <div className={`.container`}>
          <h1 className={`.printableH1`}>
            <ReactMarkdown
              source={set.name}
              allowedTypes={["emphasis", "text"]}
              unwrapDisallowed
            />
          </h1>
        </div>
        <TeachersGuide
          teachingGuide={teachingGuide}
          setName={set.name}
          route={router}
          currentPath={currentPath}
          isPrintable={true}
        />
        <PSSFooter />
      </div>
    );
  }
}

Printable.getInitialProps = async ({ query, req }) => {
  const currentFullUrl = getCurrentFullUrl(req);
  const setRes = await fetch(`${PSS_BASE_URL}/sets/${query.set}.json`);

  const currentPath = req
    ? `${req.get("Host")}/primary-source-sets/${query.set}`
    : "";

  const set = await setRes.json();
  const guidePage = set.hasPart.find(
    item => item.disambiguatingDescription === "guide"
  )["@id"];
  const guideEndpoint =
    guidePage.replace(/^.*primary-source-sets(.*)/, `${PSS_BASE_URL}$1`) +
    ".json";
  const teachingGuideRes = await fetch(guideEndpoint);
  const teachingGuide = await teachingGuideRes.json();
  return { set, teachingGuide, currentPath, currentFullUrl };
};

export default withRouter(Printable);
