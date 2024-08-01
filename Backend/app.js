const express = require("express");
const cors = require("cors");
const app = express();
const { db } = require("./db/db");
const { readdirSync } = require("fs");

//middleWares
app.use(express.json());
app.use(cors());

//router
readdirSync("./routes").map((route) =>
  app.use("/api/v1", require("./routes/" + route))
);

require("dotenv").config();
const PORT = process.env.PORT;

const server = () => {
  db();
  app.listen(PORT, () => {
    console.log("listening to port : ", PORT);
  });
};

server();
