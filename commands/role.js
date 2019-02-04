const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let role = message.guild.roles.find(r => r.name === args.join(" "))
  if(!role) return message.channel.send(`Can't find role named ${args.join(" ")}`)
  let members = message.guild.members.filter(m => m.roles.has(role.id))
  let rEmbed = new Discord.RichEmbed()
  message.channel.send(members.map(member => {
    return `${member.nickname || member.user.username}`
  }))
  message.channel.send(`${members.size} members has role ${role.name}!`)
  }   

module.exports.help = {
  name: "role",
  aliases: [],
  description: "Shows role's info.",
  perm: "",
  role: "",
  group:"Staff/Admin"
}