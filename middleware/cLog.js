
const {appendFile} = require('fs/promises')
// Custom middleware that logs out the type and path of each request to the server

const cLog = (req, res, next) => {
    appendFile('./db/log.json',`${req.method} request to ${req.path},\n`);
    next();
};
  
 module.exports = {cLog};
  