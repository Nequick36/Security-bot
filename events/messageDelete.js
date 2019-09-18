const fs = require('fs')
const discord = require('discord.js')
const replaceall = require('replaceall')
exports.run = async (bot, message) => {
  let logChannel = message.guild.channels.find(c => c.name === 'chat-logs')
  if(message.channel.name === "chat-logs") return;
  let embed = new discord.RichEmbed()
  .setTitle(`${message.author.tag}`)
  .setThumbnail(message.author.displayAvatarURL)
  .setDescription(`**Poruka poslata od ${message.author} je izbrisana u ${message.channel}** 
   ${message.content}`)
  .setColor('RED')
  .setTimestamp()
  logChannel.send(embed)
}
