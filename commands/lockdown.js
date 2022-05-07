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
  
  
  message.guild.channels.cache.forEach(channel => { //Get each channel
    if (channel.type === "text") { //Check if it's a text channel
        try {
            channel.updateOverwrite(role1, {
                SEND_MESSAGES: false,
                SPEAK: false,
                ADD_REACTIONS: false,
                READ_MESSAGE_HISTORY: true
            });

            channel.updateOverwrite(role2, {
                SEND_MESSAGES: null,
                SPEAK: null,
                ADD_REACTIONS: null,
            });
        } catch (error) { //Run this if there was an error setting the permissions
            //Error handling code here
        };
    };
});
  
message.guild.createChannel(`ticket-${message.author.id}`, 'text').then(channel => {
channel.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'),{SEND_MESSAGES: false})

    })
  
  
}

module.exports.help = {
  name: "addbalance",
  aliases: ["addbal", "addmoney"],
  perm: "",
  role: "",
  group: "economy"
}
