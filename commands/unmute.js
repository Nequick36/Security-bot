const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 let role = message.guild.roles.find(r => r.name === 'Extreme | Mute') 
  let user = message.mentions.members.first()
  if(!user) return message.channel.send({embed:{description:`| :x: | Please tag member for unmute! | :x: |`, color:0xff0000}})
  
 if(!user.roles.has(role.id)) return message.channel.send({embed:{description:`Member is not muted!`, color:0xff0000}})
 if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send({embed:{description:`| :x: | You not premited to command! | :x: |`, color:0xff0000}})
  
  user.removeRole(role.id) 
  message.channel.send({embed:{description:`| :white_check_mark: | ${user} is unmuted! | :white_check_mark: |`, color:0xff0000}})
}

module.exports.help = {
  name:"unmute",
  aliases: ["Unmute"],
  fperm: "MANAGE_MESSAGES",
  role: "Pristup",
  group: "Admin"

}