const Discord = require("discord.js");
const eco = require("discord-economy");
const dl = require('discord-leveling')

module.exports.run = async (bot, message, args) => {
  dl.Fetch(message.author.id).then(l => {
    message.channel.send(`You are level ${l.level} and you have ${l.xp} xp!`)
  })
}

module.exports.help = {
  name: "xp",
  aliases: ['level'],
  description: "Checks your Level and Xp.",
  perm: "",
  role: "",
  group:"Leveling"
}
