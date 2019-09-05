const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let Embed = new Discord.RichEmbed()
             .setTitle("=================    **__Shop__**    ================")
             .addField("**Rankovi**", "**Roles**")
             .addField("Coal - $250", "Rank")
             .addField("Iron - $500", "Rank")
             .addField("=================    **__Shop__**    ================", "**en!buy <item-name>**")
             .setColor("GREEN")

  message.channel.send(Embed)
}
module.exports.help = {
name: "shop",
aliases: ["Shop"]
}