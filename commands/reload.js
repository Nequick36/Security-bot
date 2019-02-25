const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let role = message.guild.roles.find(role => role.name === 'GH Bot Developer')
  if (!message.member.roles.has(role.id)) return message.channel.send("⛔ **ACCESS DENIED** ⛔");
  
    }

module.exports.help = {
  name: "reload",
  aliases: [],
  description: "Reload a command(Only for developers).",
  perm: "",
  role: "",
  group:"Admin"
}
