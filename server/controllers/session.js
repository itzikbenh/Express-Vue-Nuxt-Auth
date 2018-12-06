exports.logout = async (req, res) => {
    if (req.user) {
        await req.user.logout(req, res);

        res.status(200).end();
    } else {
        res.status(401).end();
    }
};

exports.logoutAll = async (req, res) => {
    if (req.user) {
        await req.user.logout(req, res, true);

        res.status(200).end();
    } else {
        res.status(401).end();
    }
};
