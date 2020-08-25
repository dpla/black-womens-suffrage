import React from "react"
import MainLayout from "components/MainLayout"
import TopicsPage from "components/TopicsPage"

function Topics() {
  return (
      <MainLayout className="main" role="main">
        <TopicsPage />
      </MainLayout>
  );
}

export default Topics;