const fs = require('fs')
const discord = require('discord.js')
exports.run = async (bot, channel) => {
  let logChannel = bot.guilds.get('602090584924094470').channels.find(c => c.name === 'chat')
  logChannel.send({embed:{description: `New channel: ${channel.name} created`, color: 0xff0000}})
}