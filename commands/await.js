const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  if(message.author.id !== '435406608479158273') return message.channel.send(`You can't use this command!`)
  let filter = m => m.author.id === message.author.id
  
  message.reply(`Wait 10 seconds!`)
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 10000
  }).then(collected => {
    message.channel.send(collected.content)
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