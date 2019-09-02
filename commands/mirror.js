const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let embed = new discord.RichEmbed()
  .setImage(message.author.avatarURL)
  .setTitle(message.author.username)
  .setColor("RED")
  .setDescription("**Oh! danas izgledas predivno **")
  message.channel.send(embed)

}

module.exports.help = {
 name: "mirror",
  aliases: [],
  perm: "",
  role: "",
  group: "simple"
}