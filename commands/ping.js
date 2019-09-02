const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let ping = bot.ping
   message.reply(`Pong! The bot's average ping is ${Math.floor(ping)}ms.`)
}

module.exports.help = {
  name: "ping",
  aliases: [],
  perm: "",
  role: "",
  group:"SIMPLE"
}
