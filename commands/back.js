const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
let reason = args.join(" ")

let options = {
  reason: `${reason || 'BACK'}`,
  id: message.author.id,
  justafk: true
}

bot.afk.set(message.author.id, options)

message.channel.send({embed:{description:`${message.author.username} je dosao/la !\nReason: ${reason || 'BACK'}`, title: message.author.username, color: 0xff0000}})
  if(message.member.nickname) {
    if(!message.member.nickname.includes('[BACK] ')) {
    message.member.setNickname(`${message.author.username}`)
    }
  } else {
    message.member.setNickname(`[BACK] ${message.author.username}`)
  }
}

module.exports.help = {
  name: "back",
  aliases: ["Back"],
  description: "Makes you AFK.",
  perm: "",
  role: "",
  group:"Simple"
}