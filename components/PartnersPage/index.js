import React from "react";

import PageBanner from "components/shared/PageBanner"


function PartnersPage() {
    const title = "PARTNERS",
        text = "Reconstructing visibility of Black womens' activism together.",
        graphic = "/static/graphic/partners-page/partners-graphic-hero.png"



    return (
        <>
            <PageBanner title={title} text={text} graphic={graphic}/>
        </>
    );
}

export default PartnersPage;
