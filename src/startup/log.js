const winston = require("winston");
const expressWinston = require("express-winston");

module.exports = function () {
  winston.handleExceptions(
    new winston.transports.Console({ colorize: true, prettyPrint: true }),
    new winston.transports.File({ filename: "logfile.log" })
  );
  process.on("unhandledRejection", (ex) => {
    console.log("unhandledRejection =========" + ex);
    throw ex;
  });
  winston.add(new winston.transports.File({ filename: "logfile.log" }));
  winston.exitOnError = false;
};
