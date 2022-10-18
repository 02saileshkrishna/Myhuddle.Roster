const winston = require("winston");
const expressWinston = require("express-winston");

function AppLogger() {
  expressWinston.logger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json()
    ),
    meta: false,
    msg: "HTTP {{req.method}} {{req.url}}", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
    expressFormat: true,
    colorize: true,
    ignoreRoute: function (req, res) {
      return false;
    },
  });
}

module.exports = AppLogger;
