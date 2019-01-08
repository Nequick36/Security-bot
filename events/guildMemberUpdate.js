const fs = require('fs')
const discord = require('discord.js')
exports.run = async (bot, oldMember, newMember) => {
  let logChannel = oldMember.guild.channels.find(c => c.name === '🔸》chat-logs')
  logChannel.send(`\`\`\`${newMember}\`\`\``)
  let embed = new discord.RichEmbed()
  .setTitle(oldMember.user.tag)
  .addField("Old nickname", oldMember.nickname)
  .addField("New nickname", newMember.nickname)
  .setTHumbnail(old)
  if(oldMember.nickname !== newMember.nickname) {
    logChannel.send(`${oldMember.nickname} is now known as ${newMember.nickname}`)
  }
}