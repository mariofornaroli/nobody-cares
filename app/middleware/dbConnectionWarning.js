
module.exports = function () {
    return (req, res, next) => {
        
        if(!req.app.locals.isDbConnected) {
            return res.status(500).json({ error: 'DB_CONNECTION_AWAY'});
        }

        return next();
    }
};