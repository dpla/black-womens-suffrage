import React from "react"
import MainLayout from "components/MainLayout"
import PartnersPage from "components/PartnersPage"
import BWSHead from "components/BWSHead"


function Partners() {
  return (
      <MainLayout>
          <BWSHead 
          pageTitle="Black Women's Suffrage: Partners | DPLA" 
          pageDescription="DPLA's partners in the creation of the Black Women's Suffrage collection."
          />
        <PartnersPage />
      </MainLayout>
  );
}

export default Partners;
