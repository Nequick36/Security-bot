const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let role = message.guild.roles.find(role => role.name === 'GH Bot Developer')
  if (!message.member.roles.has(role.id)) return message.channel.send("⛔ **ACCESS DENIED** ⛔");
  message.channel.send(`Reloading all commands! Please wait few seconds.`)
  bot.destroy()
  message.channel.send(`Reload completed! 
Few next commands will not work!`)
    }

module.exports.help = {
  name: "reload",
  description: "Reload a command(Only for developers).",
  group:"Admin"
}
