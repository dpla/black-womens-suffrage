import React from "react"
import MainLayout from "components/MainLayout"
import TimelinePage from "components/TimelinePage"
import BWSHead from "components/BWSHead"


function Timeline() {
  return (
      <MainLayout className="main" role="main">
          <BWSHead 
          pageTitle="Black Women's Suffrage Timeline | DPLA"
          pageDescription="Marching toward progress: the journey to Black women’s suffrage."
          seoType="article"
          />
        <TimelinePage />
      </MainLayout>
  );
}

export default Timeline;
