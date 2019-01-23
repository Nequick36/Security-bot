const Discord = require("discord.js");
const eco = require("discord-economy");
const dl = require('discord-leveling')

module.exports.run = async (bot, message, args) => {
  let user = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member
  if(!message.mentions.members.first() && !message.guild.members.get(args[0])) {
    dl.Fetch(message.author.id).then(l => {
    message.channel.send(`You are level ${l.level} and you have ${l.xp} xp!`)
  })
  } else {
    dl.Fetch(user.id).then(l => {
    message.channel.send(`${user.user.tag} is level ${l.level} and have ${l.xp} xp!`)
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
