const discord = require("discord.js")
exports.run = async (bot, message, args) => {
  let Embed = new discord.RichEmbed()
  .setColor(0xff0000)
  
   .setDescription(`${message.author.username}`)
   .setImage(message.author.displayAvatarURL)

  message.channel.send(Embed)
}
module.exports.help = {
name: "avatar",
aliases: ["Avatar"]
}
