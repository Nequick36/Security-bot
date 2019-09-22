const Discord = require("discord.js")
const dl = require('discord-leveling')

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`** :x: LOL, NE MOZES SEBI SETATI LEVEL TO SAMO MOZE VLASNIK SERVERA :x: **`)
  let user = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member
  let amount = args[1]
  
  dl.SetLevel(user.id, parseInt(amount)).then(l => {
    message.channel.send(`${user.user.tag} je sada level ${l.level}!`)
  })
}

module.exports.help = {
  name: "setlevel",
  aliases: ['setlvl'],
  perm: "ADMINISTRATOR",
  role: "*",
  group:"Leveling"
}
