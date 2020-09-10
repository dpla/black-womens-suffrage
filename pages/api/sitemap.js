import { keyFigures } from "../../constants/key-figures";
import {timelineOptions} from "../../constants/timeline-options";
import * as fs from "fs";

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
        '/collections/ida-b-wells',
        '/partners'
    ].map(absoluteLink);

    const keyFiguresLinks = Object.keys(keyFigures)
        .map(keyFigure => `/key-figures/${keyFigure}`)
        .map(absoluteLink);

    const timelineLinks = timelineOptions
        .map(range => `/timeline/${range}`)
        .map(absoluteLink);

    const ibwItems = Object.keys(
        JSON.parse(
            fs
                .readFileSync('constants/ida-b-wells.js')
                .toString('utf-8')
        ))
        .map(key => `/collections/ida-b-wells/${key}`)
        .map(absoluteLink);

    const entries = []
        .concat(staticLinks)
        .concat(keyFiguresLinks)
        .concat(timelineLinks)
        .concat(ibwItems)
        .map((link) => buildEntry(link, date));

    const sitemap =
        `<?xml version="1.0" encoding="UTF-8"?>\n` +
        `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`
        + "".concat(...entries)
        + `\n</urlset>`;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/xml');
    res.end(sitemap);
};

export default sitemap;