const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  return message.channel.send(`Disabled!`)
  let roles = message.guild.roles
  let sorted = roles.sort(function(a, b) {b.position-a.position})
  let mapped = sorted.map(role => {
    return `\n${role.name}   ${role.members.size} members`
  })
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