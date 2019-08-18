const Discord = require("discord.js")
const fs = require("fs");
const { RichEmbed } = require("discord.js")
const replaceall = require("replaceall")

module.exports.run = async (bot, message, args) => {
    let warnChannel = message.guild.channels.get("602090584924094470")
    let modRole = message.guild.roles.find(role => role.name === '@everyone')
    {
      
    }
     var user = message.mentions.users.first() 
     if (!user) return message.reply('cannot find user!')
    //if(message.mentions.members.first().hasPermission('MANAGE_GUILD')) return message.channel.send(`You can't warn a Server Manager!`)
     let report = args.slice(1).join(" ")
    if (!report)
      {
        message.channel.send("You have not specified a reason!")
        return;
      }
      
    message.delete()
     if(!report[user.id]) report[user.id] = {}
     if(!report[user.id].report) report[user.id].report = 0
    if(!report[user.id].reasons) report[user.id].reasons = ''

     var reportChannel = new RichEmbed()
         .setTitle("Report log")
         .addField("Reported by", message.author.username)
         .addField("Reported User", user.username)
         .addField('Reports', report[user.id].warns)
         .addField("Reason", report)
         .setColor(0xFF0000)
         .setThumbnail(user.avatarURL)
         .setTimestamp()
     reportChannel.send(reportChannel)
}
module.exports.help = {
    name: "report",
    aliases: ["Report"],
    description: "Warns a member.",
  perm: "",
  role: "",
  group: "Simple"
}  
