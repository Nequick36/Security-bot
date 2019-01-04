const fs = require('fs')
const discord = require('discord.js')
exports.run = async (bot, channel) => {
  let logChannel = channel.guild.channels.find(c => c.name === '🔸》moderation-chat-logs')
  logChannel.send({embed:{description: `Channel deleted: ${channel.name}`, color: 0xff0000}})
}