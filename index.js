const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

// Middleware
app.use(express.json());
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);
dotenv.config();

// connect to db
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
  console.log("connected to db");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
