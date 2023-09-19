const path = require("path");

function getMessages(req, res) {
  res.status(200).json({
    data: 10,
  });
  // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg'));
}

function postMessage(req, res) {
  console.log("Updating messages...");
  res.status(200).json({
    data: 15,
  });
}

module.exports = {
  getMessages,
  postMessage,
};
