const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let ping = bot.ping
   message.reply(`Pong! The bot's average ping is ${ping}ms.`)
}

module.exports.help = {
  name: "ping",
  description: "Gets the bot's average ping",
  group:"SIMPLE"
}
