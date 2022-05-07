const Discord = require("discord.js")
const eco = require("discord-economy")

module.exports.run = async (bot, message, args) => {
    let developers = bot.devs
        let embed9 = new Discord.RichEmbed()

    .setColor("RED")
  .setAuthor('CzvVesti | Security', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .setThumbnail (message.author.displayAvatarURL)
  .addField("❌» Nemate dozvolu da koristite ovu komandu", "Ovu komandu mogu koristiti samo Developeri Bota") 
        
  if(!developers.includes(message.author.id)) return message.channel.send(embed9)
  

  let embed = new Discord.RichEmbed()
      .setColor("GREEN")
    .setAuthor('CzvVesti | Security', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .setThumbnail (message.author.displayAvatarURL)
  .addField("✅» LockDown", "Zaključavanje kanala započinje") 
  
  
  message.guild.channels.cache.forEach(channel => { 
    if (channel.type === "text") {
        try {
            channel.updateOverwrite(message.guild.roles.find(r => r.name === '@everyone'), {
                SEND_MESSAGES: false
            });
        } catch (error) { 
           
        };
    };
});
  

  
  
}

module.exports.help = {
  name: "lockdown",
  aliases: ["ld", "lock"],
  perm: "",
  role: "",
  group: "economy"
}
