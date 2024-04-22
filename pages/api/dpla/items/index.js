import httpProxyMiddleware from "next-http-proxy-middleware";

const proxy = (req, res) => {
  var separator = req.url.indexOf("?") === -1 ? "?" : "&";
  var newPath = req.url.replace(
    /^\/api\/dpla(.*)$/,
    "/" +
      (process.env.API_VERSION || "v2") + // to support absent v2 env variable
      "$1" +
      separator +
      "api_key=" +
      process.env.API_KEY
  );

  req.url = newPath;

  return httpProxyMiddleware(req, res, {
    target: process.env.API_URL,
  });
};

export default proxy;
