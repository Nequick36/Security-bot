const fs = require('fs')
const discord = require('discord.js')
exports.run = async (bot, oldMember, newMember) => {
  let logChannel = oldMember.guild.channels.find(c => c.name === 'chat-logs')

}