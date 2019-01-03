const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let user = message.member
  user.setNickname(args.join(" "))
}

module.exports.help = {
  name: "nick",
  description: "Nicks you.",
  group:"Simple"
}