import httpProxyMiddleware from "next-http-proxy-middleware";
import fs from "fs";



const proxy = (req, res) => {
    const itemsString = fs.readFileSync(filePath, 'utf8');
    const json = JSON.parse(itemsString);



    return httpProxyMiddleware(req, res, {
        target: 'https://api.dp.la'
    });
}

export default proxy;
