const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {
  message.delete()
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send({embed:{description:`** :x: VI NEMATE DOZVOLU DA KORISITE OVU KOMANDU :x: **`, color:0xff0000}})
   
message.channel.send(`
< @here > **__NOVI MUSIC EVENT__** < @here >
Udjite u voice channel [ **__Music Event__** ]
I pustate muziku sa Rythm botom i ko zadnji ostane dobije role Diamond i 300$ na nasem Official Botu
`)
  
} 
module.exports.help = {
name: "send",
aliases: ["Send"]
}