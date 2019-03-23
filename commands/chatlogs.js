const Discord = require("discord.js")
const moment = require('moment')
require("moment-duration-format");
const fs = require('fs')

module.exports.run = async (bot, message, args) => {
  let file = fs.readFileSync('./chatlogs.txt')
  let date = args[0]
  if(!date) return message.channel.send(`Please enter date for chat logs!
Format: DD:MM:YYYY`)
  
}

module.exports.help = {
  name: "chatlogs",
  aliases: [],
  description: "Shows chat logs.",
  perm: "",
  role: "GameHub Staff",
  group:"Staff"
}
