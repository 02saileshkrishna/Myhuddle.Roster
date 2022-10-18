const express = require("express");
const studentController = require("../Controller/Roster");
const router = express.Router();

router.get("/", studentController.getRosterDetails);

module.exports = router;
