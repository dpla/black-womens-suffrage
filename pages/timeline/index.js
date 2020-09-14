import React from "react"
import Router from "next/router"
import { timelineOptions } from "constants/timeline-options"

function Timeline({ timeId }) {

  // Redirect to the first timeline page.
  React.useEffect(() => {
    Router.push("/timeline/[timeId]", `/timeline/${ timeId }`)
  });
  return null;

};

export async function getStaticProps({ params }) {

  return {
    props: {
      timeId: timelineOptions[0]
    }
  }
}

export default Timeline;
