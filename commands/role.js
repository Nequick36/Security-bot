const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let role = message.guild.roles.find(r => r.name === args.join(" "))
  if(!role) return message.channel.send(`** :x: MORATE IMENOVATI ROLE! :x: ** ${args.join(" ")}`)
  let members = message.guild.members.filter(m => m.roles.has(role.id))
  let rEmbed = new Discord.RichEmbed()
  message.channel.send(members.map(member => {
    return `${member.nickname || member.user.username}`
  }))
  message.channel.send(`Ima ${members.size} sa rolom: ${role.name}!`)
  }   

module.exports.help = {
  name: "role",
  aliases: [],
  perm: "",
  role: "*",
  group:"Staff/Admin"
}