if (process.env.NODE_ENV === "development") require("dotenv").config();

const errorHandler = require("./middlewares/error-handler");
const logger = require("./middlewares/custom-morgan");
const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", routes);
app.use(errorHandler);

module.exports = app;
