const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");
const morgan = require("morgan");
const indexRouter = require("./routers");

app.use(
  morgan("      :method :url :status :res[content-length] - :response-time ms")
);
app.use(cors());
app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`Listening to PORT: ${PORT}...`);
});
