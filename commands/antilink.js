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
  .addField("🚫» Anti Link ON", "ON")
    
  message.channel.send(embed9)      
bot.on("message", (message) => {
  if (message.content.includes("https://") 
      || message.content.includes("http://") 
      || message.content.includes("www")
      || message.content.includes("instagram.com")                            
      || message.content.includes("discord.com")                            
      || message.content.includes("discord.gg")                            
      || message.content.includes("youtube.com")                            
      || message.content.includes("facebook.com")) {
    message.delete(1);
    message.reply("Anti Link System je uključen!")
  }
 })
}
  
  
if(args[0] === "off"){
  message.reply("AntiLink is: OFF")
  
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
  .addField("🚫» Anti Link ON", "s!antilink on")
  .addField("🚫» Anti Link OFF", "s!antilink off")          
    
  message.channel.send(embed9)  
  }
  
  
} 
  module.exports.help = {
  name: "antilink",
  aliases: ["Antilink", "al", "Al"],
  perm: "",
  role: "",
  group: "economy"
}