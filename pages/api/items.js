import httpProxyMiddleware from "next-http-proxy-middleware";

const proxy = (req, res) => {
  console.log("REQ URL: " + req.url);
  const separator = req.url.indexOf("?") === -1 ? "?" : "&";
  const newPath = req.url.replace(
      /^\/api\/(.*)$/, // / ^\/api\/dpla(.*)$/,
     "/v2/" + "$1" + separator + "api_key=" + process.env.API_KEY
  );

  console.log("NEW PATH: " + newPath);
  req.url = newPath

    return httpProxyMiddleware(req, res, {
        target: 'https://api.dp.la'
    });
}

export default proxy;
