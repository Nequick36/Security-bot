const Discord = require("discord.js")
const eco = require("discord-economy")

module.exports.run = async (bot, message, args) => {
 let serverAvatar = message.guild.iconURL;
         var Shop = new Discord.RichEmbed()
             .setTitle("     **__Shop__**     ")
             .setThumbnail(serverAvatar)
             .addField("Coal - $250", "Rank")
             .addField("Iron - $750", "Rank")
             .addField("Gold - $1000 ", "Rank") 
             .addField("Redstone - $1500", "Rank")
             .addField("Lapis - $2500", "Rank")
             .addField("Diamond - $5000", "Rank")
             .addField("Emerald - $7500", "Rank")
             .addField("Piće", "Sokovi")
             .addFiled("Vodka - 5$", "Alkohol")
             .addField("Kafa - 2$", "Piće")
             .addField("Piva - 3$", "Alkohol")
             .setColor(0xFF0000)
         message.channel.sendEmbed(Shop)  
}

module.exports.help = {
  name: "shop",
  aliases: [],
  description:"A shop listing all the different items you can buy.",
  perm: "",
  role: "",
  group: "economy"
}
 