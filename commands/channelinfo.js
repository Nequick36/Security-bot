const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  if(!message.author.id === '532659544791318540') return message.reply("** :x: VI NEMATE DOZVOLU DA KORISTITE OVU KOMANDU :x: **")
  let channel = message.mentions.channels.first()
  if(!channel) return message.reply("** :x: MORATE TAGATI KANAL :x: **")
  let topic = channel.topic
  if(topic === '')  topic = `** :x: OPIS KANALA NIJE POTAVLJEN! :x: **`
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
