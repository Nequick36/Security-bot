const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {


  const kazino = args[0];

        let embed1 = new Discord.RichEmbed()
  .setColor("GREEN")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .addField("🎰» Kazino", "Sve komande za kazino")
  .addField(".casino", "Head-Tails/Glava Pismo prije bacanja novčića birate glavu ili pismu, ako novčić padne na stranu koju sve vi odabrali dobit ćete Novac")
  .addField(".dice", "Dice/Kocka jednostavnim bacanjem kocke dobijate novac ako kocka padne na broj 5 ili 6")
  .addField(".slot", "Fruit Machine/Mašina za voće je mašina za kockanje koja kreira igru na sreću za svoje klijente")
       if (kazino){ return message.channel.send(embed1) } else {}

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
}
module.exports.help = {
name: "help",
aliases: ["pomoc", "Help", "Pomoc", "pomoć", "Pomoć", "komande", "Komande", "komanda", "Komanda"]
}