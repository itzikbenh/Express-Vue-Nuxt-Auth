exports.getCurrentUser = (req, res) => {
    if (req.user) {
        res.json(req.user);
    } else {
        res.status(401).end();
    }
};
