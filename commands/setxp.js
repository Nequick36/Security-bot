const Discord = require("discord.js")
const dl = require('discord-leveling')

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`LOL did you really want to cheat?`)
  let user = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member
  let amount = args[1]
  
  dl.SetXp(user.id, parseInt(amount)).then(l => {
    message.channel.send(`${user.user.tag} now has ${l.xp} xp!`)
  })
}

module.exports.help = {
  name: "setxp",
  aliases: [],
  description: "Sets someone's xp.",
  perm: "",
  role: "",
  group:"Leveling"
}
