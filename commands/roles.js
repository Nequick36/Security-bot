const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let roles = message.guild.roles
  let sorted = roles.sort(function(a, b) {b.position-a.position})
  let mapped = sorted.map(role => {
    return `\n${role.name}   ${role.members.size} members`
  })
  let splited = mapped.split(',')
  if(splited.length > 40) return message.channel.send('')
  message.channel.send(`\`\`\`${mapped}\`\`\``)
}

module.exports.help = {
  name: "roles",
  aliases: [],
  description: "Shows all roles.",
  perm: "",
  role: "",
  group:"Simple"
}