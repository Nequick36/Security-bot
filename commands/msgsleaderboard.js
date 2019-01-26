const Discord = require("discord.js")
const fs = require('fs') //what have you done here

module.exports.run = async (bot, message, args) => {
  let msgs = JSON.parse(fs.readFileSync('events/msgs.json', 'utf8'));
  let array = []
  msgs.forEach(r => {
    array.push(r)
  })
  console.log(array)
  array.sort(function(a, b){return a.count - b.count})
}

module.exports.help = {
  name: "msgsleaderboard",
  aliases: ['msglb'],
  description: "Shows leaderboard of messages.",
  perm: "",
  role: "",
  group:"Simple"
}
