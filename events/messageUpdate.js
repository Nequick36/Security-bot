const fs = require('fs')
const discord = require('discord.js')
const replaceall = require('replaceall')
exports.run = async (bot, oldMessage, newMessage) => {
  let logChannel = oldMessage.guild.channels.find(c => c.name === '🔸》chat-logs')
  let embed = new discord.RichEmbed()
  .setTitle(`${oldMessage.author} has edited a message`)
  .setThumbnail(oldMessage.author.displayAvatarURL)
  .addField("Before", oldMessage.content)
  .addField("After", `${newMessage.content}`)
  .addField("Message edited in", `${oldMessage.channel}`)
    if(oldMessage.author.bot) {}
  else {
    if(oldMessage.content.includes('https://') && newMessage.content.includes('https://')) return
logChannel.send(embed);
  }
}