const express = require("express");
const messagesController = require("./controllers/message.controller");

const messageRouter = express.Router();

messageRouter.use((req, res, next) => {
  console.log(req.ip, "something");
  next();
});
messageRouter.get("/", messagesController.getMessages);
messageRouter.post("/", messagesController.postMessage)

module.exports = messageRouter;
