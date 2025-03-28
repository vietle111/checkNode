const TelegramBot = require("node-telegram-bot-api");

// Thay YOUR_BOT_TOKEN bằng API Token của bạn
const token = "7827004586:AAFL74hMbPf3pFmg3VL4_RNSXbYqIgXmlaQ";
const bot = new TelegramBot(token, { polling: true });

// Xử lý lệnh /start
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Xin chào! Tôi là bot của bạn 🚀");
});

// Xử lý tin nhắn bất kỳ
bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `Bạn vừa nói: ${msg.text}`);
});
