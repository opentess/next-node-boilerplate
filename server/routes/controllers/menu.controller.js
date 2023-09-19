function getMenu(req, res) {
  res.status(200).json({
    test: "data",
  });
}

module.exports = {
  getMenu,
};
