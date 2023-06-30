const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const sequelize = require("./util/database");
const messageRouter = require("./routes/messages");

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use("/", messageRouter);

sequelize
  .sync()
  .then(() => {
    app.listen(3001);
  })
  .catch((err) => {
    console.log(err);
  });
