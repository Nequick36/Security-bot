const fs = require('fs')
const discord = require('discord.js')
const replaceall = require('replaceall')
exports.run = async (bot, message) => {
  let logChannel = message.guild.channels.find(c => c.name === 'logs')
  if(message.channel.name === "logs") return;
  let embed = new discord.RichEmbed()
  .setTitle(`${message.author.tag}`)
  .setThumbnail(message.author.displayAvatarURL)
  .setDescription(`**Message sent by ${message.author} was deleted in ${message.channel}** 
   ${message.content}`)
  .setColor('RED')
  .setTimestamp()
  logChannel.send(embed)
}
