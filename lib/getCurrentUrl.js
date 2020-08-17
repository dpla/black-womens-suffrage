const getCurrentUrl = req => {
    if (req && req.protocol) {
        return `${req.protocol}://${req.headers.host}`;
    } else if (req) {
        return `http://${req.headers.host}`;
    } else {
        return `${window.location.protocol}//${window.location.host}`;
    }
}

export default getCurrentUrl;
