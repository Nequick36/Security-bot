const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
let reason = args.join(" ")

let options = {
  reason: `${reason || 'AFK'}`,
  id: message.author.id,
  justafk: true
}

bot.afk.set(message.author.id, options)

message.channel.send({embed:{description:`You are now afk!\nReason: ${reason || 'AFK'}`, title: message.author.username, color: 0xff0000}})
}

module.exports.help = {
  name: "afk",
  aliases: [],
  description: "Makes you AFK.",
  perm: "",
  role: "",
  group:"Simple"
}