const getCurrentFullUrl = req =>
  req ? `${req.protocol}://${req.host}${req.url}` : window.location.href;

export default getCurrentFullUrl;
