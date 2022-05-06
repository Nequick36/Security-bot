const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

      let embed = new Discord.RichEmbed()
  .setColor("GREEN")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .addField("🎰» Kazino", "Komanda: .help kazino")
  .addField("💰» Zarada", "Komanda: .help zarada")
  .addField("🏪» Shop", "Komanda: .help shop")
  .addField("💳» Balance", "Komanda: .help balance")
  .addField("👮‍♂️» Staff", "Komanda: .help staff")
  message.channel.send(embed)
      
  let casino = args[0]
        let embed = new Discord.RichEmbed()
  .setColor("GREEN")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .addField("")
  if (casino) return message.channel.send("something")
  
  
  
  message.channel.send(``)
  
}
module.exports.help = {
name: "help",
aliases: ["pomoc", "Help", "Pomoc", "pomoć", "Pomoć", "komande", "Komande", "komanda", "Komanda"]
}