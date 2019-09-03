const Discord = require("discord.js")
const dl = require('discord-leveling')

module.exports.run = async (bot, message, args) => {
  let user = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member
  let amount = args[1]
  
  dl.SetLevel(user.id, parseInt(amount)).then(l => {
    message.channel.send(`${user.user.tag} je sada level ${l.level}!`)
  })
}

module.exports.help = {
  name: "setlevel",
  aliases: ['setlvl'],
  perm: "Developer",
  role: "*",
  group:"Leveling"
}
