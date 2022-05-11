const Discord = require("discord.js")
const eco = require("discord-economy")

module.exports.run = async (bot, message, args) => {
  
  
      if(args[0] === "lockdown"){
          let embed = new Discord.RichEmbed()
  .setColor("GREEN")
  .setAuthor('CzvVesti | Security', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .addField("🔐» Lockdown", "Sve komande za Lockdown")
  .addField("s!lockdown", "Zaključava sve kanale")
  .addField("s!unlockdown", "Odključava sve kanale")
       message.channel.send(embed)
}
  
        if(args[0] === "anti"){
          let embed1 = new Discord.RichEmbed()
  .setColor("GREEN")
  .setAuthor('CzvVesti | Security', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .addField("🚫» Anti", "Sve komande za Anti")
  .addField("s!antilink", "Briše sve linkove")
  .addField("s!antimention", "Briše sve poruke koje sadrže pominjanje")
       message.channel.send(embed1)
}
  
        if(args[0] === "server"){
          let embed3 = new Discord.RichEmbed()
  .setColor("GREEN")
  .setAuthor('CzvVesti | Security', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .addField("💻» Server", "Sve komande za Server")
  .addField("s!verificationlevel", "Stavlja Verification Level na Highest")
       message.channel.send(embed3)
}
  
          if(args[0] === "vlasnik"){
          let embed3 = new Discord.RichEmbed()
  .setColor("GREEN")
  .setAuthor('CzvVesti | Security', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .addField("👑» Vlasnik", "Sve komande za Vlasnik")
  .addField("s!eval", "Bavite se svojim hobijem i dobijete novac")
  .addField("s!reload", "Reloada bota")
  .addField("s!allraid", "Pokreće sve AntiRaid Sisteme")
       message.channel.send(embed3)
}
  
  if (!args[0]){
        let embed9 = new Discord.RichEmbed()
    .setColor("GREEN")
  .setAuthor('CzvVesti | Security', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .setThumbnail (message.author.displayAvatarURL)
  .addField("🔐» Lockdown", "Komanda: s!help lockdown") 
  .addField("🚫» Anti", "Komanda: s!help anti") 
  .addField("💻» Server", "Komanda: s!help server") 
  .addField("👑» Vlasnik", "Komanda: s!help vlasnik") 
    
  message.channel.send(embed9)
  }
  
}

module.exports.help = {
  name: "help",
  aliases: ["pomoc", "komande"],
  perm: "",
  role: "",
  group: "economy"
}
