import React from "react"
import PageBanner from "components/shared/PageBanner"
import scss from "./HarmfulLanguageStatementPage.module.scss"


const HarmfulLanguageStatementPage = () => {
    const title = "HARMFUL LANGUAGE DISCLAIMER",
        text = "DPLA's statement on potentially harmful content.",
        graphic = "/static/graphic/";


    return (
        <>
            <PageBanner title={title} text={text} graphic={graphic}/>

            <div className={`site-max-width container large_page_section ${scss.harmful__section_1}`}>
                <div>
                    <h3 className={"title"}>CURATING THE BLACK WOMENS' SUFFRAGE DIGITAL COLLECTION</h3>
                    <h2>Materials in this collection and the language that describes them may be harmful.</h2>
                    <p>Libraries and archives collect materials from different cultures and time periods to preserve and make available the historical record. As a result, library materials, such as those presented here, may reflect racist and misogynoir views that may be harmful and difficult to view.</p>
                    <p>The content featured in this collection explores linkages between Black women’s suffrage and other social causes of the nineteenth and early twentieth centuries (anti-slavery, anti-lynching, education reform and civil rights) as well as racism within the Suffrage Movement. These materials are presented here to recognize and celebrate the important contributions of Black women and their resiliency in the face of ongoing racism and exclusion.</p>
                </div>
                <img src="/static/graphic/harmful-language-statement-page/harmful-language-statement-graphic-body-1.svg"/>
            </div>

            <div className={`site-max-width container large_page_section ${scss.harmful__faq}`}>

                <h2>Frequently asked questions</h2>

                <dl>
                    <div>
                        <dt>Where does this content come from?</dt>
                        <dd>Digital Public Library of America collects and makes freely available materials from thousands of
                        libraries, archives, museums, and other cultural heritage organizations across the United States.
                        Each institution or contributor shares materials with the DPLA according to its specific policies and
                        objectives.</dd>
                    </div>
                    <div>
                        <dt>Why does this potentially harmful content exist?</dt>
                        <dd>The Black Women’s Suffrage Collection includes depictions and records of people experiencing trauma
                            and
                            harm. These materials are collected and preserved as part of the American historic record.
                            Librarians
                            and archivists must balance preservation of this history with sensitivity to how it is presented to
                            users.
                        </dd>
                    </div>
                    <div>
                        <dt>How is this material described, and why are some of the terms used in the descriptions harmful?</dt>
                        <dd>
                            <ul>
                                <li>Librarians and archivists choose what language to use when
                                    describing materials. Some of these descriptions were written
                                    many years ago, using language that was accepted at the time.
                                </li>

                                <li>Librarians and archivists often re-use language provided by
                                    creators or former owners of the material. This can provide
                                    important context, but can also reflect biases and prejudices.
                                </li>

                                <li>Librarians and archivists often use a standardized set of terms,
                                    such as the Library of Congress Subject Headings, to describe
                                    materials. Some of these terms are outdated, offensive, or insensitive.
                                </li>

                                <li>Communities with less access to and privilege within libraries and
                                    archives have had less control over how they are represented and
                                    described.
                                </li>

                                <li>Librarians and archivists sometimes make mistakes or use poor
                                    judgement.
                                </li>

                                <li>DPLA is committed to working with its partners to assess and
                                    update descriptions that are harmful.
                                </li>
                            </ul>
                        </dd>
                    </div>
                    <div>
                        <dt>How are librarians and archivists working to address this problem and help users better understand this content?</dt>
                        <dd>
                            <ul>
                                <li>Working directly with misrepresented and underrepresented
                                    communities to improve the ways they are represented.
                                </li>

                                <li>Informing users about the presence and origin of harmful content.</li>

                                <li>Revising descriptions and standardized sets of descriptive terms,
                                    such as Library of Congress Subject Headings, supplementing
                                    description with more respectful terms, or creating new
                                    standardized terms to describe materials.
                                </li>

                                <li>Researching the problem, listening to users, experimenting with
                                    solutions, and sharing our findings with each other.
                                </li>
                            </ul>
                        </dd>
                    </div>
                    <div>
                        <dt>How can I report harmful content?</dt>
                        <dd>
                            <ul>
                                <li className={scss.highlight}>You can help us understand this issue and find solutions by
                                    reporting harmful content.
                                </li>

                                <li>DPLA will forward your report to the institution(s) that are
                                    responsible for the content and make it available through DPLA. It
                                    is up to each individual institution to determine whether or not they
                                    will change or remove the content. Institutions weigh potential
                                    harm against considerations such as accurate preservation of the
                                    historical record, professional best practices, and allocation of
                                    scarce resources.
                                </li>

                                <li>DPLA will use all reports of harmful content to better understand
                                    the issue and educate other librarians and archivists.
                                </li>
                            </ul>
                        </dd>
                    </div>
                </dl>
            </div>

            <br clear={"all"}/>

            <div className={`site-max-width container large_page_section ${scss.harmful__section_3}`}>
                <div>

                    <h2>Curating the Black Women’s Suffrage Digital Collection</h2>

                    <p>The Black Women’s Suffrage Digital Collection draws from larger DPLA collection and includes
                        machine generation and human oversight. As a result, some less relevant content may appear in the
                        search. This collection is a work in progress, if you have any questions about scope and content
                        please contact us at <a href={"mailto:info@dp.la"}>info@dp.la</a> or visit the {" "}
                        <a href={"https://dp.la"}>DPLA main site</a> for more frequently asked questions.</p>
                </div>
            </div>

        </>
    );

}

export default HarmfulLanguageStatementPage;