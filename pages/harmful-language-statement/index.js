import React from "react"
import MainLayout from "components/MainLayout"
import HarmfulLanguageStatementPage from "components/HarmfulLanguageStatementPage"
import Head from "next/head";


function HarmfulLanguageStatement() {
    return (
        <MainLayout className="main" role="main">
            <Head>
                <title>Black Women's Suffrage: Harmful Language Statement | DPLA</title>
            </Head>
            <HarmfulLanguageStatementPage />
        </MainLayout>
    );
}

export default HarmfulLanguageStatement;
