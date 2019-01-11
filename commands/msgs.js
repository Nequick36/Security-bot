const Discord = require("discord.js")
const fs = require('fs') //what have you done here

module.exports.run = async (bot, message, args) => {
  let msgs = JSON.parse(fs.readFileSync('events/msgs.json', 'utf8'));
  message.channel.send({embed:{description:`You have sent ${msgs[message.author.id].count || '0'} messages!`, color:0xff0000}})
}

module.exports.help = {
  name: "msgs",
  description: "Shows count of your messages.",
  group:"Simple"
}
