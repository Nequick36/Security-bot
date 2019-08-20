const Discord = require("discord.js")
const dl = require('discord-leveling')

module.exports.run = async (bot, message, args) => {
  let user = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member
  let amount = args[1]
  
  dl.SetLevel(user.id, parseInt(amount)).then(l => {
    message.channel.send(`${user.user.tag} is now level ${l.level}!`)
  })
}

module.exports.help = {
  name: "setlevel",
  aliases: ['setlvl'],
  description: "Sets someone's level.",
  perm: "Administrator",
  role: "*",
  group:"Leveling"
}
