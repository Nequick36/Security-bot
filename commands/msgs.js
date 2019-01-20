const Discord = require("discord.js")
const fs = require('fs') //what have you done here

module.exports.run = async (bot, message, args) => {
  let msgs = JSON.parse(fs.readFileSync('events/msgs.json', 'utf8'));
  let user = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member
  if(!message.mentions.members.first() && !message.guild.members.get(args[0])) return message.channel.send({embed:{description:`You have sent ${user.id} messages!`, color:0xff0000}})
  message.channel.send({embed:{description:`${user.user.username} has ${msgs[user.id].count || '0'} messages!`, color:0xff0000}})
}

module.exports.help = {
  name: "msgs",
  aliases: ['messages'],
  description: "Shows count of your messages.",
  perm: "",
  role: "",
  group:"Simple"
}
