const TelegramBot = require("node-telegram-bot-api");
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

// Chạy Telegram Bot
const token = process.env.BOT_TOKEN || "your_telegram_bot_token";
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Xin chào! Tôi là bot của bạn 🚀");
});

bot.on("message", (msg) => {
  bot.sendMessage(msg.chat.id, `Bạn vừa nói: ${msg.text}`);
});

// Tạo route kiểm tra trạng thái bot (bắt buộc với Render)
app.get("/", (req, res) => {
  res.send("Bot is running!");
});

// Lắng nghe cổng để tránh lỗi Render
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
