const Discord = require("discord.js")
const replaceall = require('replaceall')

exports.run = async (bot, messages) => {
  let logChannel = messages.guild.channels.find(`name`, "🔸》chat-logs")
  logChannel.send(``)
}