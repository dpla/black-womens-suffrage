import fs from "fs";
import { Readable } from "stream";

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
    const pdf = await fetch(url.toString());
    if (!pdf.ok) {
        res.statusCode = 502;
        res.end("Failed to fetch PDF.");
        return;
    }
    res.setHeader("Content-Type", "application/pdf");
    Readable.fromWeb(pdf.body)
        .on("error", (err) => {
            console.error("[PDF] Stream error:", err);
            res.end();
        })
        .pipe(res);

}

export default pdfSender;
