const Discord = require("discord.js")
const fs = require("fs");
const { RichEmbed } = require("discord.js")
const replaceall = require("replaceall")

module.exports.run = async (bot, message, args) => {
    let warns = JSON.parse(fs.readFileSync('commands/warns.json', 'utf8'));
    let warnChannel = message.guild.channels.get("602090584924094470")
    let modRole = message.guild.roles.find(role => role.name === 'EC | Vlasnik Team')
     if(!message.member.hasPermission("MANAGE_MESSAGES"))
     {
         message.channel.send("🛑 **ACCESS DENIED! THIS IS A MOD/ADMIN ONLY COMMAND. 🛑**");
         return;
     }
     var user = message.mentions.users.first() 
     if (!user) return message.reply('cannot find user!')
    //if(message.mentions.members.first().hasPermission('MANAGE_GUILD')) return message.channel.send(`You can't warn a Server Manager!`)
     let warning = args.slice(1).join(" ")
    if (!warning)
      {
        message.channel.send("You have not specified a reason!")
        return;
      }
  console.log(warning)
      
    message.delete()
     if(!warns[user.id]) warns[user.id] = {}
     if(!warns[user.id].warns) warns[user.id].warns = 0
    if(!warns[user.id].reasons) warns[user.id].reasons = ''
    
     user.send(`**Warnani** ste na serveru ExtremeCommunity zbog: ` + warning).catch(message.channel.send(`** ✅ ${user.tag} je warnovan!  **`))
    warns[user.id].warns++
    if(warns[user.id].reasons === '') warns[user.id].reasons = `${warning}`
    else warns[user.id].reasons = `${warns[user.id].reasons}` + `|!` + `${warning}`

     var WarningInfo = new RichEmbed()
         .setTitle("Warn log")
         .addField("Warned by", message.author.username)
         .addField("User", user.username)
         .addField('Warnings', warns[user.id].warns)
         .addField("Reason", warning)
         .setColor(0xFF0000)
         .setThumbnail(user.avatarURL)
         .setTimestamp()
     warnChannel.send(WarningInfo)
    if(warns[user.id].warns >= 5) {
      user.send({embed:{description:`You have ${warns[user.id].warns} warnings in ExtremeCommunity! You will be kicked, but if you break more rules you will be banned!`, color:0xff0000}})
     
      message.guild.members.forEach(member => {
        if(member.roles.has(modRole.id)) member.send({embed:{description:`${user.username} ima ${warns[user.id].warns} warnova morate ga kikat komandom en!kick <user> 5 warns!`, color:0xff0000}})
      })
    }
    fs.writeFile('commands/warns.json', JSON.stringify(warns, null, 5), (err) => {
 if(err) console.error(err)
})
}

module.exports.help = {
    name: "warn",
    aliases: ["Warn"],
  perm: "MANAGE_MESSAGES",
  role: "Pristup",
  group: "admin"

}  
