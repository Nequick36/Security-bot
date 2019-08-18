const Discord = require("discord.js")
const fs = require("fs");
const { RichEmbed } = require("discord.js")
const replaceall = require("replaceall")

module.exports.run = async (bot, message, args) => {
    let warns = JSON.parse(fs.readFileSync('commands/report.json', 'utf8'));
    let warnChannel = message.guild.channels.get("602090584924094470")
    let modRole = message.guild.roles.find(role => role.name === '@everyone')
     if(!message.member.hasPermission("SEND_MESSAGES"))
     {
         message.channel.send("🛑 **ACCESS DENIED! THIS IS A MOD/ADMIN ONLY COMMAND. 🛑**");
         return;
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
    if(report[user.id].warns >= 5) {
      user.send({embed:{description:`You have ${warns[user.id].report} warnings in ExtremeCommunity! You will be kicked, but if you break more rules you will be banned!`, color:0xff0000}})
     
      message.guild.members.forEach(member => {
        if(member.roles.has(modRole.id)) member.send({embed:{description:`${user.username} ima ${warns[user.id].report} warnova morate ga kikat komandom en!kick <user> 5 warns!`, color:0xff0000}})
      })
    }
    fs.writeFile('commands/report.json', JSON.stringify(report, null, 5), (err) => {
 if(err) console.error(err)
})
}

module.exports.help = {
    name: "report",
    aliases: ["Report"],
    description: "Warns a member.",
  perm: "",
  role: "",
  group: "Simple"
  

}  
