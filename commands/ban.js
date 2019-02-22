const Discord = require("discord.js")
const replaceall = require("replaceall")


module.exports.run = async (bot, message, args) => {
let role = message.guild.roles.find(r => r.name === 'Administrator')
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
      
       let reason = message.content.split(" ").slice(2).join(' ');
       if (!reason)
       {
         message.channel.send("You have not specified a reason!")
         return;
       }
      if(reason.includes(bannedUser)) {
        
      }
     var banInfo = new Discord.RichEmbed()
         .setTitle("Ban log")
         .addField("Banned user", bannedUser.user.username)
         .addField("Banned by", message.author.username)
         .addField("Reason", reason)
         .setThumbnail(bannedUser.user.avatarURL)
         .setColor(0xFF0000)
     let banChannel = message.guild.channels.find(channel => channel.name === "🔸》moderation")
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


