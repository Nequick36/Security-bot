const fs = require('fs')
const discord = require('discord.js')
exports.run = async (bot, channel) => {
  let logChannel = bot.guilds.get('602090584924094470').channels.find(c => c.name === 'logs')
  logChannel.send({embed:{description: `Channel deleted: ${channel.name}`, color: 0xff0000}})
}