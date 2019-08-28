const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {
    // Permission Verification (Optional)
  
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send({embed:{description:`| :x: |Nemas dozvolu za ovu komandu! | :x: |`, color:0xff0000}})
  
message.channel.send(`
<> **NOVI MUSIC EVENT**
Udjite u voice channel [ **Music Event** ]
I pustate muziku sa Rythm botom i ko zadnji ostane dobije role Titan i 250$ na nasem Official Botu
`)
  
} 
module.exports.help = {
name: "send",
aliases: ["Send"]
}