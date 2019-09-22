const fs = require('fs')
const discord = require('discord.js')
const replaceall = require('replaceall')
exports.run = async (bot, oldMessage, newMessage) => {
  let logChannel = oldMessage.guild.channels.find(c => c.name === 'chat-logs')
  let embed = new discord.RichEmbed()
  .setTitle(`${oldMessage.member.user.username} je editovo poruku`)
  .setColor('BLUE')
  .setThumbnail(oldMessage.author.displayAvatarURL)
  .addField("Stara Poruka", `${oldMessage.content || 'none'}`)
  .addField("Nova Poruka", `${newMessage.content || 'none'}`)
  .addField("Poruka editovana u", oldMessage.channel) 
    if(oldMessage.author.bot) {}
  else {
    if(oldMessage.content.includes('https://') && newMessage.content.includes('https://')) return
logChannel.send(embed);
  }
}