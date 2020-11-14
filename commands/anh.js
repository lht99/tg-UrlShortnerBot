const TeleBot = require('telebot');
const config = require('../config');
const bot = new TeleBot(config.botToken);
const chat_id = ("Me")
const photo_url = "https://telegram.org/img/t_logo.png"

bot.sendPhoto(
  chat_id = chat_id,
  photo = photo_url,
  caption = "Telegram Logo"
);
module.exports = anh;
