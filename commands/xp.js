const Discord = require("discord.js");
const dl = require('discord-leveling')

module.exports.run = async (bot, message, args) => {
  let user = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member
  if(!message.mentions.members.first() && !message.guild.members.get(args[0])) {
    dl.Fetch(message.author.id).then(l => {
    message.channel.send(`Vi ste level ${l.level} i imate ${l.xp} xp-a!`)
  })
  } else {
    dl.Fetch(user.id).then(l => {
    message.channel.send(`${user.user.tag} je level ${l.level} i ima ${l.xp} xp-a!`)
  })
  }

}

module.exports.help = {
  name: "xp",
  aliases: ['Xp', 'level'],
  perm: "",
  role: "",
  group:"Leveling"
}
