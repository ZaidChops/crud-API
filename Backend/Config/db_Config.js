const mongoose = require("mongoose");

const ConnectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connection success :", conn.connection.host.green);
  } catch (error) {
    console.log("error in DB connection".red);
  }
};

module.exports = { ConnectDB };
