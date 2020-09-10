import React from "react"
import MainLayout from "components/MainLayout"
import TimelinePage from "components/TimelinePage"
import { timelineOptions } from "constants/timeline-options"

function Timeline({ timeId }) {

  return (
      <MainLayout
        className="main"
        role="main"
      >
        <TimelinePage timeId={ timeId } />
      </MainLayout>
  )
};

export async function getStaticPaths() {

  const paths = timelineOptions.map((key) => ({
    params: { timeId: key },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {

  return {
    props: {
      timeId: params.timeId
    }
  }
}

export default Timeline
