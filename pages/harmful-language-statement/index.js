import React from "react"
import MainLayout from "components/MainLayout"
import HarmfulLanguageStatementPage from "components/HarmfulLanguageStatementPage"
import BWSHead from "components/BWSHead"


function HarmfulLanguageStatement() {
    return (
        <MainLayout className="main" role="main">
            <BWSHead 
            pageTitle="Black Women's Suffrage: Harmful Language Statement | DPLA" 
            pageDescription="DPLA's statement on potentially harmful content."
            pageImage="/static/graphic/about-page/about-graphic-body-4.png"
            pageImageCaption="Presentation at DPLAFest"
            seoType="article"
            />
            <HarmfulLanguageStatementPage />
        </MainLayout>
    );
}

export default HarmfulLanguageStatement;
