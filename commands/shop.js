const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let Embed = new Discord.RichEmbed()
  message.channel.send(`



Member+ - 125
Coal -
Iron -
Gold -
Redstone -
Lapis -
Diamond -
Emerald -           .addField("Member+ - $125", "Rank")
Vip -        .addField("Coal - $250", "Rank")
Vip+ -            .addField("Iron - $750", "Rank")
Premium -            .addField("Gold - $1000 ", "Rank") 
Ultra -            .addField("Redstone - $1250", "Rank")
Master - $            .addField("Lapis - $1500", "Rank")
Supeme - $17500           .addField("Diamond - $3000", "Rank")
Titan - $200000              .addField("Emerald - $5500", "Rank")
             .addField("Vip - $8000", "Rank")
             .addField("Vip+ - $8750", "Rank")
             .addField("Premium - $10000", "Rank")
             .addField("Ultra - $12500", "Rank")
             .addField("Master - $15000", "Rank")
             .addField("Supreme - $17500", "Rank")
             .addField("Titan - $20000", "Rank")
           ("**en!buy <item-name>
`)
             .addField("Member+ - $125", "Rank")
             .addField("Coal - $250", "Rank")
             .addField("Iron - $750", "Rank")
             .addField("Gold - $1000 ", "Rank") 
             .addField("Redstone - $1250", "Rank")
             .addField("Lapis - $1500", "Rank")
             .addField("Diamond - $3000", "Rank")
             .addField("Emerald - $5500", "Rank")
             .addField("Vip - $8000", "Rank")
             .addField("Vip+ - $8750", "Rank")
             .addField("Premium - $10000", "Rank")
             .addField("Ultra - $12500", "Rank")
             .addField("Master - $15000", "Rank")
             .addField("Supreme - $17500", "Rank")
             .addField("Titan - $20000", "Rank")
             .setDescription("**en!buy <item-name>**")
             .setColor("GREEN")

  message.channel.send(Embed)
}
module.exports.help = {
name: "shop",
aliases: ["Shop"]
}