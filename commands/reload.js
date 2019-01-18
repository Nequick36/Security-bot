const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let role = message.guild.roles.find(role => role.name === 'GH Bot Developer')
  if (!message.member.roles.has(role.id)) return message.channel.send("⛔ **ACCESS DENIED** ⛔");
let commandName = args[0]
if(!commandName) return message.reply(`Can't find that command!`)
        try {
            let props = require(`../commands/${commandName}`);
            if (props.init) props.init(bot); //what does init do?//idk i got this from a friend ok
            bot.commands.set(commandName, props);
            message.channel.send(`Successfully reloaded command ${commandName}`)
            return false;
        } catch (err) {
            return message.reply(`${err || `Can't find that command!`}`)
        }
    }//ok now to edit this

module.exports.help = {
  name: "reload",
  aliases: [],
  description: "Reload a command(Only for developers).",
  perm: "",
  role: "",
  group:"Admin"
}
