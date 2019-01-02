const fs = require('fs')
const discord = require('discord.js')
exports.run = async (bot, oldMessage, newMessage) => {
  let logChannel = message.guild.channels.find(c => c.name === 'chat-logs')
  logChannel.send(`Message edited: 
Old Message: [${oldMessage.channel.name}] ${oldMessage.author.username}: ${oldMessage.content}
New Message: [${newMessage.channel.name}] ${newMessage.author.username}: ${newMessage.content}`)
  console.log(`Message edited: 
Old Message: [${oldMessage.channel.name}] ${oldMessage.author.username}: ${oldMessage.content}
New Message: [${newMessage.channel.name}] ${newMessage.author.username}: ${newMessage.content}`);
}