require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

// Kiểm tra xem biến môi trường có bị thiếu không
if (!process.env.BOT_TOKEN) {
  console.error("🚨 BOT_TOKEN không được thiết lập! Kiểm tra biến môi trường.");
  process.exit(1);
}

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.on("message", (msg) => {
  bot.sendMessage(msg.chat.id, `Bạn vừa nói: ${msg.text}`);
});

// Tạo route để kiểm tra server có hoạt động không
app.get("/", (req, res) => {
  res.send("🚀 Bot Telegram đang chạy!");
});

app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
});
