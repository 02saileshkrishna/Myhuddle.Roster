const jwt = require("jsonwebtoken");
const config = require("../configs/app.config");

module.exports = function (req, res, next) {
  if (req.header("authorization") == " ") {
    console.log("Auth token :" + req.header("authorization"));
    return res.status(401).send("un authorizated.");
  }
  const token = req.header("authorization").split(" ")[1];
  if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    const decoded = jwt.verify(token, config.jwtPrivateKey);
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send("Invalid token.");
  }
};
