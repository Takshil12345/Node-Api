const fs = require('fs');

function logResponse(filename) {
    return (req, res, next) => {
        fs.appendFile(filename, `${req.url} : ${req.ip} : ${req.port}`, (err, data) => {
            next();
        })
    };
};

module.exports =  logResponse ;