import React from "react"
import MainLayout from "components/MainLayout"
import CollectionsPage from "components/CollectionsPage"
import BWSHead from "components/BWSHead"

const Collections = () => {
  return (
      <MainLayout>
          <BWSHead 
          pageTitle="Black Women's Suffrage: Collections | DPLA" 
          pageDescription="Telling the story of Black women’s suffrage, one artifact at a time."
          pageImage="/static/image/collections-page/collections-image-ida.png"
          pageImageCaption="Ida B. Wells Barnett"
          />
        <CollectionsPage />
      </MainLayout>
  )
};

export default Collections;
