const fs = require('fs')
const discord = require('discord.js')
exports.run = async (bot, message) => {
  
  console.log(`[${message.channel.name}] ${message.author.username}: ${message.content}`);
}