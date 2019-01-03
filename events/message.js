const fs = require('fs')
const discord = require('discord.js')
exports.run = async (bot, message) => {
  let logChannel = message.guild.channels.find(c => c.name === 'chat-logs')
  // if(message.author.bot) {}
  // else logChannel.send(`Message send: [${message.channel.name}] ${message.author.username}: ${message.content}`)
  // console.log(`[${message.channel.name}] ${message.author.username}: ${message.content}`);
}