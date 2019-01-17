const Discord = require("discord.js")
const fs = require('fs') //what have you done here

module.exports.run = async (bot, message, args) => {
  let msgs = JSON.parse(fs.readFileSync('events/msgs.json', 'utf8'));
  console.log(msgs)
  msgs.sort(function(a, b){return a.count - b.count})
  console.log(msgs)
}

module.exports.help = {
  name: "msgsleaderboard",
  description: "Shows leaderboard of messages.",
  group:"Simple"
}
