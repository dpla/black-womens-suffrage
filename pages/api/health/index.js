const proxy = (req, res) => {
    res.statusCode = 200;
    res.end("OK");
}

export default proxy;