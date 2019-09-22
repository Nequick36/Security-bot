const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  if(message.author.id !== '532659544791318540') return message.channel.send(`** :x: VI NEMATE DOZVOLU DA KORISITE OVU KOMANDU :x: **`)
  let filter = m => m.author.id === message.author.id
  
  message.reply(`Waiting!`)
  message.channel.awaitMessages(filter, {
    max: 5
  }).then(collected => {
    message.channel.send(collected.first().content)
  })
}

module.exports.help = {
  name: "await",
  aliases: [],
  description: "Awaits a message(only for testing).",
  perm: "",
  role: "",
  group:"Simple"
}