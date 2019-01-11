const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 let role = mess
  let user = message.mentions.members.first()
 if(!message.mentions.members.first().roles.has(role.id)) return message.reply("That user is not muted!")
   if(!message.author.hasPermission("MANAGE_MESSAGES")) return message.reply("🛑 **ACCESS DENIED! THIS IS A MOD/ADMIN ONLY COMMAND. 🛑**")
  
  user.removeRole(role.id) 
   message.reply(`${user} has been unmuted!`)
}

module.exports.help = {
  name:"unmute",
  description:"unmutes a user"
}
// work in progress um ok