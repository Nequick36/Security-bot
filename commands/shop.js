const Discord = require("discord.js")
const eco = require("discord-economy")

module.exports.run = async (bot, message, args) => {
 let serverAvatar = message.guild.iconURL;
         var Shop = new Discord.RichEmbed()
             .setTitle("Shop - available roles.")
             .setThumbnail(serverAvatar)
             .addField("Bronze - $500", "The lowest role")
             .addField("Gold - $1500", "The second lowest role")
             .addField("Diamond - $3000 ", "The second highest role") 
             .addField("Platinum - $10000", "The highest possible role")
             .setColor(0xFF0000)
             .setFooter("To get high roles you need to have the previous lower role i.e. Platinum require diamond and diamond requires gold")
              message.channel.sendEmbed(Shop)  
}

module.exports.help = {
  name: "shop",
  description:"A shop listing all the different items you can buy.",
  group: "economy"
}
 