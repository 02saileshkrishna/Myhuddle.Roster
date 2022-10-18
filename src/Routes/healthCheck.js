const express = require("express");
const healthCheckController = require("../Controller/healthCheck");
const healthCheckRoutes = express.Router();

healthCheckRoutes.get("", healthCheckController);

module.exports = healthCheckRoutes;
