const Discord = require("discord.js")
const eco = require("discord-economy")

module.exports.run = async (bot, message, args) => {
  let developers = bot.devs
        let embed = new Discord.RichEmbed()

    .setColor("RED")
  .setAuthor('CzvVesti | Security', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .setThumbnail (message.author.displayAvatarURL)
  .addField("❌» Nemate dozvolu da koristite ovu komandu", "Ovu komandu mogu koristiti samo Developeri Bota") 
        
  if(!developers.includes(message.author.id)) return message.channel.send(embed)
  
bot.on("guildMemberAdd", (member) => {

            member.send("AntiJoin System is ON")
                member.kick();
})

}

module.exports.help = {
  name: "antijoin",
  aliases: ["Antijoin", "aj", "Aj"],
  perm: "",
  role: "",
  group: "economy"
}
