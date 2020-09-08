const trafficLogger = (err, req, res, next) => {
    next()
};

const errorLogger = (err, req, res, next) => {
    next()
};

module.exports = { trafficLogger, errorLogger };
