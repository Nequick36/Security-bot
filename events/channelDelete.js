const fs = require('fs')
const discord = require('discord.js')
exports.run = async (bot, channel) => {
  let logChannel = bot.guilds.get('358634388461715456').channels.find(c => c.name === '🔸》moderation-chat-logs')
  logChannel.send({embed:{description: `Channel deleted: ${channel.name}`, color: 0xff0000}})
}