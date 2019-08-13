const Discord = require("discord.js")
const replaceall = require("replaceall")


module.exports.run = async (bot, message, args) => {
  
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send({embed:{description:` | :x: | Nemas dozvolu za ovu komandu!  | :x: | `, color:0xff0000}})
    let user = message.mentions.members.first()
    if(!user) return message.channel.send({embed:{description:`| :x: | Ne mogu da pronadjem tog membera! | :x: |`, color:0xff0000}})
    let reason = args.filter(arg => arg!==args[0]).join(" ") || 'Razloog nije dat'
    try {
        user.ban(`Staff: ${message.author.tag}, Razlog: ${reason}`)
        message.channel.send({embed:{description:` | :white_check_mark: | ${user} **__je banan zbog__** \`${reason}\``, color:0xff0000}})
    } catch (e) {
        if(e) return message.channel.send(e+'\nError: Kontaktirajte ownera!')
    }
  
     
     var banInfo = new Discord.RichEmbed()
         .setTitle("Ban log")
         .addField("Banned user", bannedUser.user.username)
         .addField("Banned by", message.author.username)
         .addField("Reason", reason)
         .setThumbnail(bannedUser.user.avatarURL)
         .setColor(0xFF0000)
     let banChannel = message.guild.channels.find(channel => channel.name === "logs")
     banChannel.send(banInfo)
     message.delete()
     bannedUser.send(`You have been banned from GameHub for: ${reason}`).catch(message.channel.send(`** ${bannedUser.user.tag} has been banned!**`))
     setTimeout(function(){
  //code
       message.guild.member(bannedUser).ban(7)
              .then(console.log(reason))
              .catch(console.error);
}, 1000);
  }

module.exports.help = {
  name: "ban",
  aliases: [],
  description: "Bans a user for obvious reasons.",
  perm: "MANAGE_MESSAGES",
  role: "",
  group: "Admin"
}


