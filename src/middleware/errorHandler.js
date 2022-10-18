const winston = require("winston");
const errorHandleMiddleware = async (err, req, res, next) => {
  winston.error(err.message, err);
  return res.status(500).json({ message: "something failed", error: err });
};

module.exports = errorHandleMiddleware;
