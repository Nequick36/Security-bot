const fs = require('fs')
const discord = require('discord.js')
exports.run = async (bot, oldMember, newMember) => {
  let logChannel = oldMember.guild.channels.find(c => c.name === '🔸》chat-logs')
  let nickEmbed = new discord.RichEmbed()
  nickEmbed.setTitle(newMember.user.tag)
  nickEmbed.setColor('BLUE')
  nickEmbed.addField("Old nickname", oldMember.nickname)
  nickEmbed.addField("New nickname", newMember.nickname)
  nickEmbed.setThumbnail(oldMember.avatarURL)
  if(oldMember.nickname !== newMember.nickname) {
    logChannel.send(nickEmbed)
  }
}