const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let role = message.guild.roles.find(r => r.name === args.join(" "))
  if(!role) return message.channel.send(`Can't find role named ${args.join(" ")}`)
  let members = message.guild.members.filter(m => m.roles.has(role.id))
  message.channel.send(`${members.size} member(s) has role ${role.name}`)
  }   

module.exports.help = {
  name: "role",
  aliases: [],
  description: "Command used to control roles.",
  perm: "",
  role: "",
  group:"Staff/Admin"
}