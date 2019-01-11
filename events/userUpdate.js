const fs = require('fs')
const discord = require('discord.js')
exports.run = async (bot, oldUser, newUser) => {
  let logChannel = bot.guilds.get('358634388461715456').channels.find(c => c.name === '🔸》chat-logs')
  let embed = new discord.RichEmbed()
  .setTitle(`${oldUser.tag} has changed their username`)
  .addField("Old username", oldUser.username)
  .addField("New username", newUser.username)
  .setColor("BLUE")
  
  if(oldUser.username !== newUser.username) {
    logChannel.send(embed)
  }
}