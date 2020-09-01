import React from "react"
import MainLayout from "components/MainLayout"
import CollectionsPage from "components/CollectionsPage"

const Collections = () => {
  return (
      <MainLayout className="main" role="main">
        <CollectionsPage />
      </MainLayout>
  )
};

export default Collections;
