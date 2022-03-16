import React from "react"
import Link from "next/link"
import scss from "../../components/CollectionsPage/CollectionsPage.module.scss"
import PageBanner from "components/shared/PageBanner"
import SectionTitle from "components/CollectionsPage/SectionTitle"
import {collections} from "constants/collections"
import {primarySourceSets} from "constants/primary-source-sets"


const CollectionsPage = () => {
    const title = "COLLECTIONS",
        text = "Telling the story of Black women’s suffrage, one artifact at a time.",
        graphic = "static/graphic/collections-page/collections-graphic-hero.png";

    return (
        <>
            <PageBanner title={title} text={text} graphic={graphic}/>
            <CollectionsSection/>
            <PssSection/>
        </>
    )
}

const columnCount = 3;

const chunk = (arr, chunkSize) => {
    if (chunkSize <= 0) throw "Invalid chunk size";
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize)
        R.push(arr.slice(i, i + chunkSize));
    return R;
}

const PssSection = () => {
    const pssChunks = chunk(primarySourceSets, columnCount)
    return (<section className={`section__default ${scss.pss__section}`}>
        <SectionTitle title="Featured Primary Source Sets"/>
        {pssChunks.map((row) => {
            return (
                <div className={scss.pss__tile_container} data-cy="primary_source_set">
                    {row.map((pss, index) => {
                        return (
                            <a href={pss.href} target="_blank" key={`primary-source-set-tile-${index + 1}`}>
                                <div className={scss.pss__tile}>
                                    <img src={pss.image} alt={`${pss.title}`}/>
                                    <h2>{pss.title}</h2>
                                    <h3>{pss.subtitle}</h3>
                                </div>
                            </a>
                        )
                    })}
                </div>
            )
        })}
    </section>);
}

const CollectionsSection = () => {

    return (
        <section className={`section__default ${scss.collections__section}`}>
            <SectionTitle title="Featured Collections"/>
            <div className={scss.collections__tile_container_background}/>
            <CollectionsRows/>
            <div className={scss.collections__line}></div>

        </section>
    )
}

const CollectionsRows = () => {

    const collectionsArray = Object
        .keys(collections)
        .map((key) => {
            return {slug: key, collection: collections[key]}
        });

    const collectionChunks = chunk(collectionsArray, columnCount);

    const rows = collectionChunks.map((row) => {
        return (<CollectionRow key={row.slug} row={row} />)
    });

    return (rows);
}

const CollectionRow = ({row}) => {
    return (
        <div className={scss.collections__tile_container}>{
            row.map((item, index) => {
                if (!item.collection.external_link) {
                    return (<InternalCollection slug={item.slug} collection={item.collection} key={index}/>);
                } else {
                    return (<ExternalCollection collection={item.collection} key={index}/>);
                }
            })
        }</div>
    );
}

const ExternalCollection = ({collection}) => {
    return (
        <div
            data-cy="collection__active"
        >
            <div
                className={`${scss.collections__tile} ${scss.collections__tile_active}`}>
                <a
                    href={collection.external_link}
                    target="_blank"
                >
                    <img src={collection.image} alt={`Collection ${collection.name}`}/>
                    <h2>{collection.name}</h2>
                </a>
                <p>{collection.description}</p>
                <button className={scss.collections_button__active}>
                    <a
                        href={collection.external_link}
                        target="_blank"
                    >
                        VIEW COLLECTION
                        <img src="/static/icon/collections-page/button-arrow.svg" alt=""/>
                        <div className={scss.collections_button__active_underline}/>
                    </a>
                </button>
            </div>
        </div>
    );
}

const InternalCollection = ({slug, collection, index}) => {
    return (
        <div
            data-cy="collection__active"
            key={`collections-tile-${index + 1}`}
        >
            <div className={`${scss.collections__tile} ${scss.collections__tile_active}`}>
                <Link href="/collections/[colId]" as={`/collections/${slug}`}>
                    <a>
                        <img
                            src={collection.image}
                            alt={`Collection ${collection.name}`}/>
                        <h2>{collection.name}</h2>
                    </a>
                </Link>
                <p>{collection.description}</p>
                <button className={scss.collections_button__active}>
                    <Link href="/collections/[colId]" as={`/collections/${slug}`}>
                        <a>
                            VIEW COLLECTION
                            <img src="/static/icon/collections-page/button-arrow.svg" alt=""/>
                            <div className={scss.collections_button__active_underline}/>
                        </a>
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default CollectionsPage;