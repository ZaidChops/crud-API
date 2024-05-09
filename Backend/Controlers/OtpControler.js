const mongoose = require("mongoose");

const getOtp = (req, res) => {
  const otp = Math.floor(9999 * Math.random()).toString();
  res.send(otp);
};

module.exports = { getOtp };
