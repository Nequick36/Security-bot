const fs = require('fs')
const discord = require('discord.js')
exports.run = async (bot, oldUser, newUser) => {
  let logChannel = bot.guilds.get('358634388461715456').channels.find(c => c.name === '🔸》chat-logs')
  
  if(oldUser.username !== newUser.username) {
    logChannel.send(`${oldUser.username} is now known as ${newUser.username}`)
  }
}