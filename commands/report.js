const Discord = require("discord.js")
const fs = require("fs");
const { RichEmbed } = require("discord.js")
const replaceall = require("replaceall")

module.exports.run = async (bot, message, args) => {
    let warnChannel = message.guild.channels.get("622385111748575232")

     var user = message.mentions.users.first() 
     if (!user) return message.reply('** :x: MORATE TAGATI USERA KOJEG ZELITE REPORTATI :x: **')
    //if(message.mentions.members.first().hasPermission('MANAGE_GUILD')) return message.channel.send(`You can't warn a Server Manager!`)
     let warning = args.slice(1).join(" ")
    if (!warning)
      {
        message.channel.send("** :x: MORATE STAVITI RAZLOG REPORTA! :x: **")
        return;
      }
  console.log(warning)
      
    message.delete()

     var WarningInfo = new RichEmbed()
         .setTitle("Report log")
         .addField("Reported by", message.author.username)
         .addField("Reported User", user.username)
         .addField("Reason", warning)
         .setColor(0xFF0000)
         .setThumbnail(user.avatarURL)
         .setTimestamp()
     warnChannel.send(WarningInfo)

 }
module.exports.help = {
    name: "report",
    aliases: ["Report"],
  perm: "",
  role: "",
  group: "Simple"

}  
