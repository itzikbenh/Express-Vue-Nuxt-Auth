exports.getCurrentUser = (req, res) => {
    if (req.user) {
        const user = req.user;
        //Filter out JWT's.
        user.login_tokens = req.user.login_tokens.map(t => ({
            ip: t.ip,
            ua: t.ua
        }));
        res.json(user);
    } else {
        res.status(401).end();
    }
};
