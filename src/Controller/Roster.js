const { json } = require("express");
const etivityRepository = require("../Repository/rosterRepository");

const getRosterDetails = async (req, res) => {
  console.log("=====================");
  const name = req.query.name;
  console.log(name);
  const result = await etivityRepository.getRosterDetailsFromDbAsync(name);
  res.send(result);
};

module.exports = {
  getRosterDetails,
};
