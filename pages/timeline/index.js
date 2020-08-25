import React from "react"
import MainLayout from "components/MainLayout"
import TimelinePage from "components/TimelinePage"

function Timeline() {
  return (
      <MainLayout className="main" role="main">
        <TimelinePage />
      </MainLayout>
  );
}

export default Timeline;
