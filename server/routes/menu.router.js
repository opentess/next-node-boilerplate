const express = require("express");
const menuController = require("./controllers/menu.controller");

const menuRouter = express.Router();

menuRouter.get("/", menuController.getMenu);

module.exports = menuRouter;
