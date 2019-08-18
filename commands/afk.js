const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
let reason = args.join(" ")

let options = {
  reason: `${reason || 'AFK'}`,
  id: message.author.id,
  justafk: true
}

bot.afk.set(message.author.id, options)

message.channel.send({embed:{description:`${message.author.username} je AFK nemojte ga/ju Ometati!!\nReason: ${reason || 'AFK'}`, title: message.author.username, color: 0xff0000}})
  if(message.member.nickname) {
    if(!message.member.nickname.includes('[AFK] ')) {
    message.member.setNickname(`[AFK] ${message.member.nickname}`)
    }
  } else {
    message.member.setNickname(`[AFK] ${message.author.username}`)
  }
}

module.exports.help = {
  name: "afk",
  aliases: ["Afk"],
  description: "Makes you AFK.",
  perm: "",
  role: "",
  group:"Simple"
}