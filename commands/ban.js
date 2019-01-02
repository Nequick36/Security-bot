const Discord = require("discord.js")



module.exports.run = async (bot, message, args) => {

  let bannedUser = message.mentions.users.first();
   if(!message.member.hasPermission("MANAGE_MESSAGES"))
       {
           message.channel.send("🛑**ACCESS DENIED! THIS IS A STAFF-ONLY COMMAND.🛑**");
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
     var kickInfo = new Discord.RichEmbed()
         .setTitle("Kick log")
         .addField("Kicked user", bannedUser)
         .addField("Kicked by", message.author)
         .addField("Reason", reason)
         .setThumbnail(bannedUser.avatarURL)
         .setColor(0xFF0000)
     let banChannel = message.guild.channels.find(channel => channel.name === "⛄》moderation")
     banChannel.send(kickInfo)
     message.delete()
     bannedUser.send(`You have been banned from GameHub for: ${reason}`).catch(message.channel.send(`*** ${bannedUser.tag} has been banned!***`))
     setTimeout(function(){
  //code
       message.guild.member(bannedUser).kick(reason)
              .then(console.log(reason))
              .catch(console.error);
}, 1000);
  }

module.exports.help = {
  name: "ban",
  description: "Bans a user for obvious reasons.",
  group: "Admin"
}


