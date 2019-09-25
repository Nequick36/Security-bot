const Discord = require("discord.js")
const fs = require("fs");
const { RichEmbed } = require("discord.js")
const replaceall = require("replaceall")

module.exports.run = async (bot, message, args) => {
    let warns = JSON.parse(fs.readFileSync('commands/warns.json', 'utf8'));
    let warnChannel = message.guild.channels.get("619572519074136085")
    let modRole = message.guild.roles.find(role => role.name === 'EC | Vlasnik Team')
     if(!message.member.hasPermission("MANAGE_MESSAGES"))
     {
   return message.channel.send({embed:{description:`**:x: VI NEMATE DOZVOLU DA KORISITE OVU KOMANDU :x:** `, color:0xff0000}})
      
     }
     var user = message.mentions.users.first() 
     if (!user) return message.reply('** :x: MORATE TAGATI MEMBERA KOJEG ZELITE BANATI :x: **')
    //if(message.mentions.members.first().hasPermission('MANAGE_GUILD')) return message.channel.send(`You can't warn a Server Manager!`)
     let warning = args.slice(1).join(" ")
    if (!warning)
      {
        message.channel.send("** :x: MORATE STAVITI RAZLOG WARNA :x: **")
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
      user.send({embed:{description:`**Vi imate ${warns[user.id].warns} Warnova zato ste dobili kick sa servera: ExtremeCommunity**`, color:0xff0000}})
     
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
