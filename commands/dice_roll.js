const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  var diceRoll = Math.floor(Math.random() * 6) + 1;
    message.reply(diceRoll + "Ima ljudi sa tim rolom");
}

module.exports.help = {
  name: "roll",
  aliases: [],
  perm: "",
  role: "",
  group:"SIMPLE"
}
