const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let role = message.guild.roles.find(role => role.name === '*')
  if (!message.member.roles.has(role.id)) return message.channel.send("⛔ **ACCESS DENIED** ⛔");
  let commandName = args[0]
  if(!commandName) return message.channel.send(`Usage: !reload <commandName>`)
  try {
    delete require.cache[require.resolve(`./${commandName}.js`)]
    bot.commands.delete(commandName)
    let pull = require(`./${commandName}.js`)
    bot.commands.set(commandName, pull)
  } catch (err) {
    return message.channel.send(`${err}`)
  }
  message.channel.send(`Command ${commandName} was reloaded!`)
    }

module.exports.help = {
  name: "reload",
  aliases: [],
  description: "Reload a command(Only for developers).",
  perm: "",
  role: "",
  group:"Admin"
}
