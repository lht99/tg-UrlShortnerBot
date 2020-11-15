const TeleBot = require('telebot');
const config = require('../config');
const bot = new TeleBot(config.botToken);
const photo_url = "https://telegram.org/img/t_logo.png"

bot.sendPhoto(
  @tuanvnbot
  photo = photo_url,
  caption = "Telegram Logo"
);
module.exports = anh;
