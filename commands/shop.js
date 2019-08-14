const Discord = require("discord.js")
const eco = require("discord-economy")

module.exports.run = async (bot, message, args) => {
 let serverAvatar = message.guild.iconURL;
         var Shop = new Discord.RichEmbed()
             .setTitle("=================    **__Shop__**    ================")
             .setThumbnail(serverAvatar)
             .addField("**Rankovi**", "Coal - $250 , Iron - $750 , Gold - 1000$ , Redstone - 1500$ , Lapis - 2500$ ,Diamond - 5000$ , Emerald - 7500$ ", "Rank")
             .addField("Coal - $250 , Iron - $750 , Gold - 1000$ , Redstone - 1500$", "Lapis - 2500$ ,Diamond - 5000$ , Emerald - 7500$ ", "Rank")
             .addField("**Piće - Sokovi**", "Vodka - 5$ , Piva - 3$ , Kafa - 2$")
             .addField("**Hrana - Food**", "Hljeb - 3$ , Kolac - 4$")
             .addField("=================    **__Shop__**    ================", "**Jos Uskoro**!")
             .setFooter(`en!buy <item-role>`)
             .setColor("GREEN")
         message.channel.sendEmbed(Shop)  
}

module.exports.help = {
  name: "shop212",
  aliases: [],
  description:"A shop listing all the different items you can buy.",
  perm: "",
  role: "",
  group: "economy"
}
 