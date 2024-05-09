const express = require("express");
const colors = require("colors")
const { ConnectDB } = require("./Config/db_Config");
const { getOtp } = require("./Controlers/OtpControler");
require("dotenv").config()

const app = express();
const PORT = process.env.PORT ||  6000;

// DB Connection
ConnectDB()

// Body parcer
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))

// root
app.get("/", (req, res) => {
  res.send("Welcome to Todo API");
});

// Todo Router
app.use("/api/todos", require("./Routes/TodoRoutes"))

// OTP Router
app.get("/api/otp",getOtp)

// server

app.listen(PORT, () => {
  console.log(`server is running at port : ${PORT}`.blue);
});
