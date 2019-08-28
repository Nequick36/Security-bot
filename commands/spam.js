const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {
  message.delete()
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send({embed:{description:`| :x: |Nemas dozvolu za ovu komandu! | :x: |`, color:0xff0000}})
   
  message.channel.send('Spam')
  message.channel.send('Spam')
  message.channel.send('Spam')
  message.channel.send('Spam')
  message.channel.send('Spam')
} 
module.exports.help = {
name: "spam",
aliases: ["Spam"]
}