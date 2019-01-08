const fs = require('fs')
const discord = require('discord.js')
const replaceall = require('replaceall')
exports.run = async (bot, oldMessage, newMessage) => {
  let logChannel = oldMessage.guild.channels.find(c => c.name === '🔸》chat-logs')
  let embed = new discord.RichEmbed()
  .setTitle(`${oldMessage.member.nickname} has edited a message`)
  .setColor('BLUE')
  .setThumbnail(oldMessage.author.displayAvatarURL)
  .addField("Before", `${oldMessage.content || 'none'}`)
  .addField("After", `${newMessage.content || 'none'}`)
  .addField("Message edited in", oldMessage.channel) //ok now for nicks and message deletion
    if(oldMessage.author.bot) {}
  else {
    if(oldMessage.content.includes('https://') && newMessage.content.includes('https://')) return
logChannel.send(embed);
  }
}