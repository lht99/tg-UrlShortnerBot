const TeleBot = require('telebot');
const config = require('../config');
const bot = new TeleBot(config.botToken);


const help = (msg) => {
	const replyMarkup = bot.inlineKeyboard([
		[bot.inlineButton('Source Code', { url: 'fb.com/letuan281992' })],
		[bot.inlineButton('Support Chat', { url: 'fb.com/letuan281992' })],
	]);
	msg.reply
		.text(
			`<b>Hi ${msg.chat.first_name}, You Have Requested For Help!</b>\n` +
				`\nHow To Use Bot 101:\n` +
				`<b>To Short Url</b> - Copy Paste The Link And Send \n` +
				`<b>To Bypass Url</b> - Use /bp Along With The Url You Want To Bypass\n` +
				`\n<code>Bot Tuan : </code>@letuanvn`,
			{
				asReply: true,
				parseMode: 'html',
				replyMarkup,
			}
		)
		.catch((err) => console.log(err));
};

module.exports = help;
