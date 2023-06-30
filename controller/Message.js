const { default: axios } = require("axios");
const Message = require("../model/messages");

exports.postMessage = async (req, res) => {
  try {
    const type = req.body.type;
    const message = req.body.message;
    await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      JSON.stringify({ type: type, message: message })
    );
    const response = await Message.create({ type: type, message: message });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ err: error });
  }
};

exports.postBotMessage = async (req, res) => {
  try {
    const { message } = req.body.data;
    const botMessage = { type: "incoming", message: message };
    const response = await Message.create(botMessage);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ err: error });
  }
};

exports.getMessage = async (req, res) => {
  try {
    const messages = await Message.findAll();
    res.status(200).json(messages);
    // console.log(messages);
  } catch (error) {
    res.status(500).json(error);
  }
};
