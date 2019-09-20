const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {
  message.delete()
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send({embed:{description:`| :x: |Nemas dozvolu za ovu komandu! | :x: |`, color:0xff0000}})
   
message.channel.send(`
< @here > **NOVI MUSIC EVENT** < @here >
Udjite u voice channel [ **Music Event** ]
I pustate muziku sa Rythm botom i ko zadnji ostane dobije role Diamond i 300$ na nasem Official Botu
`)
  
} 
module.exports.help = {
name: "send",
aliases: ["Send"]
}