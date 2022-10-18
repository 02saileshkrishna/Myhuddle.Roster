const express = require("express");

const healthCheck = function health(request, response) {
  response.status(200).send({ message: "I am not sleeping..." });
};

module.exports = healthCheck;
