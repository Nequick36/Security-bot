const fs = require('fs')
const discord = require('discord.js')
exports.run = async (bot, message) => {
  let logChannel = message.guild.channels.find(c => c.name === 'chat-logs')
  logChannel.send(`Message deleted: [${message.channel.name}] ${message.author.username}: ${message.content.replace('<@', '<')}`)
  console.log(`Message deleted: [${message.channel.name}] ${message.author.username}: ${message.content}`);
}