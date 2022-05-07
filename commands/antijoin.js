const Discord = require("discord.js")
const eco = require("discord-economy")

module.exports.run = async (bot, message, args) => {
let reason = "AntiJoin System is ON"

if(args[0] === "on"){
  message.guild.invites.fetch().then(invites => {
  invites.each(i => i.delete())
})
}

if(args[0] === "off"){
  message.reply("AntiJoin Off")
  bot.destroy()
}
  
  if(!args[0]){
    message.reply("s!antijoin on **~~|~~** s!antijoin off")
  }
  
}

module.exports.help = {
  name: "antijoin",
  aliases: ["Antijoin", "aj", "Aj"],
  perm: "",
  role: "",
  group: "economy"
}
