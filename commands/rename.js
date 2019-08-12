const discord = require("discord.js")
exports.run = async (bot, message, args) => {
  if(!bot.devs.includes(message.author.id)) return message.channel.send(`🛑 **NE MOŽE!🛑**`)
  let user = message.mentions.members.first()
  let name = args[1]
  if(!user || !name) return message.channel.send('Pomoc: en!rename <@member> <ime>')
  user.setNickname(name)
  message.channel.send(`Nick od ${user.user.username} sad je ${name}`)
}
module.exports.help = {
name: "rename",
aliases: []
}