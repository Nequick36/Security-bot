const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let embed = new discord.RichEmbed()
  .setImage(message.author.avatarURL)
  .setTitle(message.author.username)
  .setColor("RED")
  .setDescription("**You're looking great today! :D**")
  message.channel.send(embed)

}

module.exports.help = {
 name: "mirror",
  aliases: [],
 description: "Gives you your reflection",
  perm: "",
  role: "",
  group: "simple"
}