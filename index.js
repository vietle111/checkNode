require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Xin chào! Tôi là bot Telegram của bạn 🚀");
});

bot.on("message", (msg) => {
  bot.sendMessage(msg.chat.id, `Bạn vừa nói: ${msg.text}`);
});

// Tạo route để Render nhận diện service
app.get("/", (req, res) => {
  res.send("Bot Telegram đang chạy!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
