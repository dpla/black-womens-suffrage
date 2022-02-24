import fs from "fs";

const pdfSender = async (req, res) => {
    const { query: {collectionId, pdfId}} = req;

    if (collectionId !== 'ida-b-wells') {
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
    //console.log(JSON.stringify(pdf));
    //res.statusCode = pdf.status;
    const pdfStream = pdf.body
    pdfStream.on('close', () => { res.end() });
    pdfStream.pipe(res);

}

export default pdfSender;
