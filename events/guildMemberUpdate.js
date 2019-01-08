const fs = require('fs')
const discord = require('discord.js')
exports.run = async (bot, oldMember, newMember) => {
  let logChannel = oldMember.guild.channels.find(c => c.name === '🔸》chat-logs')
  logChannel.send(`\`\`\`${newMember}\`\`\``)
  let embed = new discord.RichEmbed()
  .setTitle(oldMember.user.tag)
  .addField("Old nickname", oldMember.nickname)
  .addField("New nickname", newMember.nickname)
  .setTHumbnail(oldMember.avatarURL)
  if(oldMember.nickname !== newMember.nickname) {
    logChannel.send(embed)
  }
}