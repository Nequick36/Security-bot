const Discord = require("discord.js")
const eco = require("discord-economy")

module.exports.run = async (bot, message, args) => {

if(args[0] === "on"){
  message.reply("AntiJoin On")
  bot.on("guildMemberAdd", async (member) => {
    member.kick({ reason: "Antijoin was enabled"})
  })
}

if(args[0] === "off"){
  message.reply("AntiJoin Off")
  bot.destroy()
}
  
}

module.exports.help = {
  name: "antijoin",
  aliases: ["Antijoin", "aj", "Aj"],
  perm: "",
  role: "",
  group: "economy"
}
