require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");

// Lấy token từ biến môi trường
const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Xin chào! Tôi là bot của bạn 🚀");
});

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `Bạn vừa nói: ${msg.text}`);
});
