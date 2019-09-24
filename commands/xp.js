const Discord = require("discord.js");
const dl = require('discord-leveling')

module.exports.run = async (bot, message, args) => {
  let user = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member
  if(!message.mentions.members.first() && !message.guild.members.get(args[0])) {
    dl.Fetch(message.author.id).then(l => {
    message.channel.send(`<@${message.author.id}>
**Vi Ste Level:** __${l.level}__ 
**Vi Imate:** __${l.xp}__ **XP-A**`)
  })
  } else {
    dl.Fetch(user.id).then(l => {
    message.channel.send(`<@${user.user.id}> 
**On je Level:** __${l.level}__ 
**On Ima:** __${l.xp}__ **XP-A**`)
  })
  }

}

module.exports.help = {
  name: "xp",
  aliases: ['level'],
  description: "Checks your Level and Xp.",
  perm: "",
  role: "",
  group:"Leveling"
}
