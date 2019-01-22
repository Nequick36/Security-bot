const Discord = require("discord.js")
const sqlite = require('sqlite3')

module.exports.run = async (bot, message, args) => {
 message.guild.members.forEach(member => {
   
 })
}

module.exports.help = {
  name: "sql",
  aliases: [],
  description: "Runs a sql code.",
  perm: "ADMINISTRATOR",
  role: "GH Bot Developer",
  group:"Developer"
}