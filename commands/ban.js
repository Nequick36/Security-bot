const Discord = require("discord.js")
const replaceall = require("replaceall")


module.exports.run = async (bot, message, args) => {
let role = message.guild.roles.find(r => r.name === 'Pristup')
  let bannedUser = message.mentions.members.first();
   if(!message.member.roles.has(role.id))
       {
           message.channel.send("🛑**ACCESS DENIED! THIS IS AN ADMIN ONLY COMMAND.🛑**");
           return;
       }

       if(!bannedUser)
       {
           message.channel.send("Sorry, I couldn't find that user");
           return;
       }
      if(message.mentions.members.first().hasPermission('MANAGE_GUILD')) return message.channel.send(`You can't warn a Server Manager!`)
       let reason = args.slice(1).join(" ")
       if (!reason)
       {
         message.channel.send("You have not specified a reason!")
         return;
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
     bannedUser.send(`**Banovani** ste sa servera ExtremeCommunity, Razlog: ${reason}`).catch(message.channel.send(`** ${bannedUser.user.tag} je banovan!**`))
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
  role: "Pristup",
  group: "Admin"
}


