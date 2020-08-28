import React from "react"
import MainLayout from "components/MainLayout"
import HarmfulLanguageStatementPage from "components/HarmfulLanguageStatementPage"

function HarmfulLanguageStatement() {
    return (
        <MainLayout className="main" role="main">
            <HarmfulLanguageStatementPage />
        </MainLayout>
    );
}

export default HarmfulLanguageStatement;
