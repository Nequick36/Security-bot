const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
  const kazino = args[0]
  const zarada = args[0]
  const shop = args[0]
  const balance = args[0]
  const staff = args[0]



        let embed1 = new Discord.RichEmbed()
  .setColor("GREEN")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .addField("🎰» Kazino", "Sve komande za kazino")
  .addField(".casino", "Head-Tails/Glava Pismo prije bacanja novčića birate glavu ili pismu, ako novčić padne na stranu koju sve vi odabrali dobit ćete Novac")
  .addField(".dice", "Dice/Kocka jednostavnim bacanjem kocke dobijate novac ako kocka padne na broj 5 ili 6")
  .addField(".slot", "Fruit Machine/Mašina za voće je mašina za kockanje koja kreira igru na sreću za svoje klijente")
       if (kazino){ return message.channel.send(embed1) } else {}

  
          let embed2 = new Discord.RichEmbed()
  .setColor("GREEN")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .addField("💰» Zarada", "Sve komande za kazino")
  .addField(".work", "Idete na posao i dobijete novac")
  .addField(".hobby", "Bavite se svojim hobijem i dobijete novac")
  .addField(".crime", "Uradite loše dijelo za novac")
  .addField(".daily", "Dobijate 500 <:Bitcoin:971362942924783616> Svakih 24h")
       if (zarada){ return message.channel.send(embed2) } else {}
  
  
          let embed3 = new Discord.RichEmbed()
  .setColor("GREEN")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .addField("🏪» Shop", "Sve komande za kazino")
  .addField(".shop", "Prikazuje sve Rolove/Rankove koje možete kupiti")
  .addField(".buy", "Kupujete stvari iz Shopa '.shop'")
       if (shop){ return message.channel.send(embed3) } else {}
  
  
          let embed4 = new Discord.RichEmbed()
  .setColor("GREEN")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .addField("💳» Balance", "Sve komande za kazino")
  .addField(".balance", "Sa ovom komandom možete da vidite koliko imate novca na računu")
  .addField(".topbalance", "Pokazuje Top 10 članova sa najviše novca")
  .addField(".transfer", "Ovom komandom možete nekome dati novac")
       if (balance){ return message.channel.send(embed4) } else {}
  
  
          let embed5 = new Discord.RichEmbed()
  .setColor("GREEN")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .addField("👮‍♂️» Staff", "Sve komande za kazino")
  .addField(".addbalance", 'Dodaje članu određenu sumu novca')
  .addField(".removebalance", "Uklanja članu određenu sumu novca")
  .addField(".eval", "Komanda Za Vlasnike")
       if (staff){ return message.channel.send(embed5) } else {}
  
  
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