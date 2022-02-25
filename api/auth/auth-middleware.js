const { findBy } = require('./auth-model');
const userNotExsists = async (req, res, next) => {
    try {
        const [user] = await findBy({ username: req.body.username });
        if (user) {
            next({
                status: 401,
                message: "username taken",
            });
        } else {
            req.user = user;
            next();
        }
    } catch (err) {
        next(err);
    }
};

const checkUsername = async (req, res, next) => {
    try {
        const [user] = await findBy({ username: req.body.username });
        if (!user) {
            next({
                status: 401,
                message: "invalid credentials",
            });
        } else {
            req.user = user;
            next();
        }
    } catch (err) {
        next(err);
    }
};

const userPayload = (req, res, next) => {
    const { username, password } = req.body;
    if (!username || username === undefined) {
        next({
            status: 401,
            message: "username and password are required"
        });
    } else if (!password) {
        next({
            status: 401,
            message: "username and password are required"
        });
    } else {
        next();
    }
};

module.exports = {
    userNotExsists,
    userPayload,
    checkUsername
};