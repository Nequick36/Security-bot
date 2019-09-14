const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let Embed = new Discord.RichEmbed()
             .setTitle("=================    **__Shop__**    ================")
             .addField("**Rankovi**", "**Roles**")
             .addField("Coal - $250", "Rank")
             .addField("Iron - $750", "Rank")
             .addField("Gold - $1000 ", "Rank") 
             .addField("Redstone - $1500", "Rank")
             .addField("Lapis - $2500", "Rank")
             .addField("Diamond - $5000", "Rank")
             .addField("Emerald - $7500", "Rank")
             .addField("Vip - $8000", "Rank")
             .addField("Vip+ - $8750", "Rank")
             .addField("Premium - $10000", "Rank")
             .addField("**Piće**", "**Sokovi**")
             .addField("Vodka - 5$", "Alkohol")
             .addField("Kafa - 2$", "Piće")
             .addField("Piva - 3$", "Alkohol")
             .addField("=================    **__Shop__**    ================", "**en!buy <item-name>**")
             .setColor("GREEN")

  message.channel.send(Embed)
}
module.exports.help = {
name: "shop",
aliases: ["Shop"]
}