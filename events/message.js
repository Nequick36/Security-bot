const fs = require('fs')
const discord = require('discord.js')
exports.run = async (bot, message) => {
  let logChannel = message.guild.channels.find(c => c.name === '🔸》moderation-chat-logs')
  if(message.content.startsWith('!')) logChannel.send({embed:{description: `${message.author.tag} used command ${message.content} in channel ${message.channel.name}.`, color: 0xff0000}})
}