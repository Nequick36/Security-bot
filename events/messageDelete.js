const fs = require('fs')
const discord = require('discord.js')
const replaceall = require('replaceall')
exports.run = async (bot, message) => {
  let logChannel = message.guild.channels.find(c => c.name === '🔸》chat-logs')
  let embed = new discord.RichEmbed()
  .setTitle(message.author.tag)
  .setDescription(`**Message`); 
}
