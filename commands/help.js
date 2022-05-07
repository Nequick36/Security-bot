const Discord = require("discord.js")
const eco = require("discord-economy")

module.exports.run = async (bot, message, args) => {
        let embed9 = new Discord.RichEmbed()

    .setColor("RED")
  .setAuthor('CzvVesti | Security', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .setThumbnail (message.author.displayAvatarURL)
  .addField("🔐» Lockdown", "Komanda: s!help lockdown") 
  .addField("🚫» Anti", "Komanda: s!help anti") 
        
}

module.exports.help = {
  name: "help",
  aliases: ["pomoc", "komande"],
  perm: "",
  role: "",
  group: "economy"
}
