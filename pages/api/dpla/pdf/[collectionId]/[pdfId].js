import fs from "fs";
import { Readable, pipeline } from "stream";

const pdfSender = async (req, res) => {
    const { query: {collectionId, pdfId}} = req;

    if (collectionId !== 'ida-b-wells' &&
        collectionId !== 'claire-collins-harvey') {
        res.statusCode = 404;
        res.end("Unknown Collection ID.");
        return;
    }

    const filePath = `constants/${collectionId}.js`;
    const collectionData = fs.readFileSync(filePath, 'utf8');
    const json = JSON.parse(collectionData);

    if (!json.hasOwnProperty(pdfId)) {
        res.statusCode = 404;
        res.end("Unknown PDF ID.");
        return;
    }

    const item = json[pdfId];
    const url = new URL(item.href);
    url.protocol = "http";
    let pdf;
    try {
        pdf = await fetch(url.toString());
    } catch (err) {
        console.error("[PDF] Fetch error:", err);
        res.statusCode = 502;
        res.end("Failed to fetch PDF.");
        return;
    }
    if (!pdf.ok) {
        res.statusCode = 502;
        res.end("Failed to fetch PDF.");
        return;
    }
    if (!pdf.body) {
        res.statusCode = 502;
        res.end("Failed to fetch PDF.");
        return;
    }
    const contentLength = pdf.headers.get("content-length");
    if (contentLength) {
        res.setHeader("Content-Length", contentLength);
    }
    res.setHeader("Content-Type", "application/pdf");
    pipeline(Readable.fromWeb(pdf.body), res, (err) => {
        if (err) {
            console.error("[PDF] Stream error:", err);
            res.destroy(err);
        }
    });

}

export default pdfSender;
