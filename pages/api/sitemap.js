import { keyFigures } from "../../constants/key-figures";

const absoluteLink = (path) => { return `https://blackwomenssuffrage.dp.la${path}` }
const buildEntry = (link, date) => {
    return `<url>
    <loc>${link}</loc>
    <lastmod>${date}</lastmod>
</url>
`;
}
const sitemap = (req, res) => {

    const date = new Date().toISOString();

    const staticLinks = [
        '/',
        '/about',
        '/timeline',
        '/collections',
        '/partners'
    ].map(absoluteLink);

    const collectionsLinks = [];

    const keyFiguresLinks = Object
            .keys(keyFigures)
            .map(keyFigure => `/key-figures/${keyFigure}`)
        .map(absoluteLink);

    const timelineLinks = [];

    const entries = []
        .concat(staticLinks)
        .concat(collectionsLinks)
        .concat(keyFiguresLinks)
        .concat(timelineLinks)
        .map((link) => buildEntry(link, date));

    const entryString = "".concat(...entries)

    console.log(JSON.stringify(entryString));

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entryString}
</urlset>`;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/xml')
    res.end(sitemap);
}

export default sitemap;