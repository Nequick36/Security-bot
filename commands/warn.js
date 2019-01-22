const Discord = require("discord.js")
const fs = require("fs");
const { RichEmbed } = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let warns = JSON.parse(fs.readFileSync('commands/warns.json', 'utf8'));
    let warnChannel = message.guild.channels.get("515835722188587038")
    let modRole = message.guild.roles.find(role => role.name === 'Moderation Team')
     if(!message.member.hasPermission("MANAGE_MESSAGES"))
     {
         message.channel.send("🛑 **ACCESS DENIED! THIS IS A MOD/ADMIN ONLY COMMAND. 🛑**");
         return;
     }
     var user = message.mentions.users.first() 
     if (!user) return message.reply('cannot find user!')
    //if(message.mentions.members.first().hasPermission('MANAGE_GUILD')) return message.channel.send(`You can't warn a Server Manager!`)
     let warning = message.content.split(" ").slice(2).join(" "); 
    if (!warning)
      {
        message.channel.send("You have not specified a reason!")
        return;
      }
    message.delete()
     if(!warns[user.id]) warns[user.id] = {}
     if(!warns[user.id].warns) warns[user.id].warns = 0
    if(!warns[user.id].reasons) warns[user.id].reasons = ''
    
     user.send("You have been warned in GameHub for: " + warning).catch(message.channel.send(`** ✅ ${user.tag} has been warned  **`))
    warns[user.id].warns++
    if(warns[user.id].reasons === '') warns[user.id].reasons = `${warning}`
    else warns[user.id].reasons = `${warns[user.id].reasons}` + `|!` + `${warning}`

     var WarningInfo = new RichEmbed()
         .setTitle("Warn log")
         .addField("Warned by", message.author)
         .addField("User", user)
         .addField('Warnings', warns[user.id].warns)
         .addField("Reason", warning)
         .setColor(0xFF0000)
         .setThumbnail(user.avatarURL)
         .setTimestamp()
     warnChannel.send(WarningInfo)
    if(warns[user.id].warns >= 3) {
      user.send({embed:{description:`You have ${warns[user.id].warns} warnings in GameHub! You will be kicked, but if you break more rules you will be banned!`, color:0xff0000}})

      message.guild.members.forEach(member => {
        if(member.roles.has(modRole.id)) member.send({embed:{description:`${user.username} has ${warns[user.id].warns} warnings!`, color:0xff0000}})
      })
    }
    fs.writeFile('commands/warns.json', JSON.stringify(warns, null, 4), (err) => {
 if(err) console.error(err)
})
}

module.exports.help = {
    name: "warn",
    aliases: [],
    description: "Warns a member.",
  perm: "MANAGE_MESSAGES",
  role: "",
  group: "admin"
  

}  
