const Discord = require("discord.js")
const eco = require("discord-economy")

module.exports.run = async (bot, message, args) => {

  message.reply("AntiJoin On")
  
bot.on("guildMemberAdd", (member) => {

})

}

module.exports.help = {
  name: "antijoin",
  aliases: ["Antijoin", "aj", "Aj"],
  perm: "",
  role: "",
  group: "economy"
}
