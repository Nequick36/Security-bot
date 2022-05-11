const Discord = require("discord.js")
const eco = require("discord-economy")
const fs = require("fs")

module.exports.run = async (bot, message, args) => {
  let developers = bot.devs
        let embed = new Discord.RichEmbed()

    .setColor("RED")
  .setAuthor('CzvVesti | Security', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .setThumbnail (message.author.displayAvatarURL)
  .addField("❌» Nemate dozvolu da koristite ovu komandu", "Ovu komandu mogu koristiti samo Developeri Bota") 
        
  if(!developers.includes(message.author.id)) return message.channel.send(embed)
  
  
  
  if(args[0] === "on"){
          let embed9 = new Discord.RichEmbed()
    .setColor("GREEN")
  .setAuthor('CzvVesti | Security', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .setThumbnail (message.author.displayAvatarURL)
  .addField("🚫» Anti Mention", "ON") 
    
  message.channel.send(embed9) 
    
bot.on("message", (message) => {

   if(message.mentions.users.size > 1){
      message.delete()
      message.reply("Anti Mention System je uključen!")
    }
  })
}
  
  
if(args[0] === "off"){
  message.reply("Anti Mention is: OFF")
  
fs.readdir("./commands", (err, files) => {
    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile <= 0){
        console.log("couldn't find commands")
        return;
    }
    jsfile.forEach((f, i) => {
         let props = require(`./commands/${f}`)
         console.log(`${f} loaded!`)
         bot.commands.set(props.help.name, props)

     });
   });
}
  
  if(!args[0]){
          let embed9 = new Discord.RichEmbed()
    .setColor("GREEN")
  .setAuthor('CzvVesti | Security', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .setThumbnail (message.author.displayAvatarURL)
  .addField("🚫» Anti Mention ON", "s!antimention on")
  .addField("🚫» Anti Mention OFF", "s!antimention off")          
    
  message.channel.send(embed9)  
  }
  
  
} 
  module.exports.help = {
  name: "antimention",
  aliases: ["Antimention", "am", "Am"],
  perm: "",
  role: "",
  group: "economy"
}