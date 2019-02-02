const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let channels = message.guild.channels
  let mapped = channels.map(channel => {
    return `\n${channel.name}`
  })
  message.channel.send(`\`\`\`${mapped}\`\`\``)
}

module.exports.help = {
  name: "roles",
  aliases: [],
  description: "Shows all channels.",
  perm: "",
  role: "",
  group:"Simple"
}