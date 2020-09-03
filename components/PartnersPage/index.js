import React from "react";

import PageBanner from "components/shared/PageBanner"

import scss from "./PartnersPage.module.scss";

const Offlink = ({url, text}) => <a href={url} target={"_blank"}>{text}</a>

function PartnersPage() {
    const title = "PARTNERS",
        text = "Reconstructing visibility of Black women's activism together.",
        graphic = "/static/graphic/partners-page/partners-graphic-hero.png"


    return (
        <>
            <PageBanner title={title} text={text} graphic={graphic}/>
            <div className={`site-max-width container ${scss.partners__wrapper}`}>
                <p>Digital Public Library of America (DPLA) is proud to partner with the following institutions in the
                    creation of a national digital collection that highlights the roles and experiences of Black women
                    in
                    the women’s suffrage movement, as well as Black women’s history of activism, as part of the
                    centennial
                    celebration of the passage of the 19th Amendment:</p>
                <ul>
                    <li><Offlink url={"https://www.auctr.edu/"}
                                 text="Atlanta University Center Robert W. Woodruff Library"/></li>
                    <li><Offlink url={"https://avery.cofc.edu/"}
                                 text={"Avery Research Center for African American History and Culture at the College of Charleston"}/>
                    </li>
                    <li><Offlink url={"https://www.tuskegee.edu/libraries"}
                                 text={"Tuskegee University"}/></li>
                    <li><Offlink url={"https://www.amistadresearchcenter.org/"}
                                 text={"Amistad Research Center at Tulane University"}/></li>
                    <li><Offlink url={"http://www.socallib.org/"} text={"Southern California Library"}/></li>
                </ul>
                <p>
                    Atlanta University Center and Tuskegee University are both HBCUs with collections documenting
                    women’s history of organizing for political action in the American South. The Avery Research Center
                    and Amistad Research Center are institutions committed to collecting, preserving and providing open
                    access to the history and culture of African Americans and the diaspora. The Southern California
                    Library documents and makes accessible histories of struggles that challenge racism and other
                    systems of oppression and holds extensive collections of histories of community resistance in Los
                    Angeles and beyond.
                </p>
                <p>
                    The collaboration is powered by funding from {" "}
                    <Offlink url="https://www.pivotalventures.org/" text="Pivotal Ventures"/>, an investment and
                    incubation company created by Melinda Gates. Funds will enable the partner institutions to digitize
                    artifacts related to the history of Black women in the suffrage movement, and, more broadly, women’s
                    rights and civic activism between the 1850s and the 1960s, in order to make these important rights,
                    voting collections more widely accessible.
                </p>
                <p>
                    In addition, DPLA is partnering with the <Offlink url={"https://cmlibrary.org"} text="Charlotte Mecklenburg Library"/> on their <Offlink url={"https://cmlibrary.org/tags/engage-2020"}
                                                                      text={"Engage2020: Look Back, Move Forward"}/> events.
                </p>
                <p>
                    We are especially proud to center our partners’ expertise as subject specialists in this work and
                    extend a heartfelt thank you to the project coordinators for their insightful curation:
                </p>
                <ul>
                    <li>Dana Chandler, University Archivist and Associate Professor, Tuskegee University Archives</li>
                    <li>Christopher Harter, Deputy Director, Amistad Research Center</li>
                    <li>
                        Aaisha Haykal, Manager of Archival Services, Avery Research Center for African American
                        History &amp; Culture at the College of Charleston
                    </li>
                    <li>Yusef Omowale, Director, Southern California Library</li>
                    <li>
                        Sarah Tanner, Head, Archives Research Center, Atlanta University Center Robert W. Woodruff
                        Library
                    </li>
                    <li>
                        Hannah Terrell, Branch Leader, Allegra Westbrooks Regional Library, Charlotte Mecklenburg
                        Library
                    </li>
                    <li>Martha Yesowitch, Community Partnerships Leader, Charlotte Mecklenburg Library</li>
                </ul>

                <p>For more detailed information about these partnerships, <Offlink url={"https://dp.la/news/dpla-announces-new-partnerships-with-five-libraries-and-archives-to-build-national-digital-black-womens-suffrage-collection"} text={"please click here"}/>.</p>

                <p>On July 16, 2020, DPLA hosted Race, Gender, Politics, and History: Reconstructing Visibility of Black
                    Women’s Activism. This webinar featured a keynote by Allison Robinson, doctoral candidate in
                    American
                    History and American Material Culture at the University of Chicago, discussing teaching with digital
                    exhibits, her experience working with the university’s Ida B. Wells collection, and how digital
                    artifacts
                    can help reconstruct visibility. Representatives from our partner institutions also introduced the
                    collections that they are digitizing as part of the Black Women’s Suffrage collection and provided
                    perspective about how these artifacts can help us better understand Black women suffragists and the
                    historical and continuing activism of Black women. <Offlink url={"https://dpla.zoom.us/rec/play/75Z8Ie6h_DI3T9PEtgSDVPEoW9TuJqis13BN_qIKzxmyVHMKNgamYLsWZeMsg3xlnOgP_huLHvi6gzs5?autoplay=true&startTime=1594918908000"} text={"A recording of this event is available here"}/>.</p>
                    <p>For more information about this work, please contact DPLA community manager Shaneé Yvette Murrain at <a href={"mailto:shanee@dp.la"}>shanee@dp.la</a></p>

                {/*Potential Images for Homepage*/}
                {/*(will need to check permissions)*/}

                {/*Charlotta Bass: https://dp.la/item/67832fff8da9787d3e17448a6d705f1e?q=charlotta%20bass*/}
                {/*http://digitallibrary.usc.edu/cdm/ref/collection/p15799coll102/id/321 (have permission from Yusef)*/}

                {/*Hands / Freedom Vote / MFDP:*/}
                {/*https://dp.la/item/6b61c8730fad65232541bd912f35a1c0?q=mississippi%20freedom*/}

                {/*Citation: Thompson, Ken, “Freedom Vote in Mississippi,” WUSTL Digital Gateway Image Collections &*/}
                {/*Exhibitions, http://omeka.wustl.edu/omeka/items/show/8336.*/}

                {/*Students, Freedom Summer*/}
                {/*https://dp.la/item/2beef259a203d75c1634cf785d509f2b?q=mississippi%20freedom*/}

                {/*Beymer, Richard, 1939- , “Students at a Freedom School during Freedom Summer, Mississippi, 1964,” WUSTL*/}
                {/*Digital Gateway Image Collections & Exhibitions, http://omeka.wustl.edu/omeka/items/show/8361.*/}

                {/*Fannie Lou Hamer*/}
                {/*https://dp.la/item/9daeabc32756e9d45ef5994f9e70ced3?q=fannie%20lou%20hamer*/}

                {/*Reading, Charmian,1930 - 2014, “Fannie Lou Hamer”, 1966, National Portrait Gallery, Smithsonian Institution,*/}
                {/*https://npg.si.edu/object/npg_NPG.94.248.*/}

                {/*Septima Clark*/}
                {/*https://dp.la/item/4ab3bad0917e0676980162d5c4b03832?q=septima%20clark*/}
                {/*“Septima P. Clark”, Septima P. Clark Papers, ca. 1910-ca. 1990, Lowcountry Digital Library, Avery Research*/}
                {/*Center at the College of Charleston, https://lcdl.library.cofc.edu/lcdl/catalog/lcdl:93131*/}

                {/*Shirley Chisholm*/}
                {/*https://dp.la/item/f059137df03fa55c1999f05f6ee1719a?q=shirley%20chisholm*/}

                {/*Angela Davis*/}
                {/*https://dp.la/item/480139a55ddb370345d1890be0012a1b?q=angela%20davis&page=1*/}
                {/*Espinosa, Juan, “Photograph, Angela Davis, Apr.1973” The Stephen H. Hart Research Center,History Colorado*/}
                {/*http://5008.sydneyplus.com/HistoryColorado_ArgusNet_Final/Portal/Portal.aspx?component=AAFW&record=5A078EA7-7682-430E-85ED-E6AAC367FD41.*/}
            </div>
        </>
    );
}

export default PartnersPage;
