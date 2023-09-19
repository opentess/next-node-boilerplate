const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const messageRouter = require("./routes/messages.router");
const menuRouter = require("./routes/menu.router");
const app = express();
const port = 3000;

app.use(cors());
app.use(morgan("combined"));
app.use((req, res, next) => {
  const start = Date.now();

  console.log(req.originalUrl);
  next();
  const delta = Date.now() - start;
  console.log(delta, "ms");
});

app.use("/messages", messageRouter);
app.use("/menu", menuRouter);
app.listen(port, () => {
  console.log(`Application loading on ${port}`);
});
