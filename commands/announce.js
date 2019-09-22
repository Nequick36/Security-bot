const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let role = message.guild.roles.find(r => r.name === '*')
  if(!message.member.roles.has(role.id))
         {
             message.channel.send("** :x: VI NEMATE DOZVOLU DA KORISTITE OVU KOMANDU! :x: **");
             return;
         }
  let channel = message.mentions.channels.first()
  if(!channel) return message.channel.send(`** :x: MORATE TAGATI KANAL U KOJEM ZELITE POSLATI OBAVJESTENJE :x: **`)
  let announcement = args.slice(1).join(" ")
  if(!announcement) return message.reply("** :x: MORATE STAVITI PORUKU KOJU ZELITE POSLATI :x: **")
  let embed = new Discord.RichEmbed()
  .setDescription(announcement)
  .setColor("RED")
  channel.send(embed)
  message.reply("**Your message has been announced!**")
}    
module.exports.help = {
name: "obavjest",
aliases: ["Obavjest", "New", "new"],
}