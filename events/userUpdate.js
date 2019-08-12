const fs = require('fs')
const discord = require('discord.js')
exports.run = async (bot, oldUser, newUser) => {
  let logChannel = bot.guilds.get('602090584924094470').channels.find(c => c.name === 'logs')
  let embed = new discord.RichEmbed()
  .setTitle(`${oldUser.tag} has changed their username`)
  .addField("Old username", oldUser.username)
  .addField("New username", newUser.username)
  .setColor("BLUE")
  
  if(oldUser.username !== newUser.username) {
    logChannel.send(embed)
  }
}