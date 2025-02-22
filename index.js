const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

const port = process.env.PORT || 5000;
const dbConfig = require("./config/db");

app.use(cors({ credentials: true, origin: "http://localhost:3001" }));
app.use(express.json());

// listen to port
app.listen(port, () => {
  console.log(`Server is running on PORT : ${port}`);
});
