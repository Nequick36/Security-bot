const Discord = require("discord.js")
const eco = require("discord-economy")
module.exports.run = async (bot, message, args) => {
  message.channel.send("This command is still a work in progress!")
}

module.exports.help = {
  name: "transfer",
  aliases: [],
  description: "transfers money to other people",
  perm: "",
  role: "",
  group:"SIMPLE"
}
