const basicAuth = require('basic-auth');

module.exports = (req, res, next) => {
    const user = basicAuth(req);
    
    if(!user || user.name !== 'admin' || user.pass !== '1111') {
        res.set('WWW-Authenticate', 'Basic realm=Authentication required');
        res.sendStatus(401);
        return;
    }

    next();
}