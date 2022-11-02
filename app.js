require("dotenv").config();

const express = require("express");
const app = express();
const morganBody = require("morgan-body");
const routes = require("./routes");
const cors = require("cors");
const compression = require("compression");
const helmet = require("helmet");

app.use(express.urlencoded({ extended: true, limit: "5mb" }));
app.use(express.json({ limit: "5mb" }));
app.use(cors())

morganBody(app);
app.use((error, req, res, next) => {
  return error instanceof SyntaxError
    ? res.status(500).send({ message: "Invalid data structure" })
    : next();
});
app.disable("x-powered-by");
app.use(helmet());
app.use(compression({
  level: 6,
  threshold: 0
}))
app.use(routes);

const PORT = process.env.SERVICE_PORT || 8080;
const SERVICE = process.env.SERVICE_NAME || "Express JS";
app.listen(PORT, () => {
  console.log(`${SERVICE} running on port ${PORT}`);
});
