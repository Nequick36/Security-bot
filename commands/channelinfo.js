const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  if(!message.author.id === '532659544791318540') return message.reply("This is a dev-only command as of the moment!")
  let channel = message.mentions.channels.first()
  if(!channel) return message.reply("Please mention a channel you want info on!")
  let topic = channel.topic
  if(topic === '')  topic = `No topic set`
  let embed = new Discord.RichEmbed()
  .setDescription(topic)
  message.channel.send(embed)
}

module.exports.help = {
  name: "channelinfo",
  aliases: [],
  perm: "",
  role: "",
  group:"SIMPLE"
}
