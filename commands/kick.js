const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => { 
  
  let kickedUser = message.mentions.members.first();
  if(!message.member.hasPermission("MANAGE_MESSAGES"))
       {
           message.channel.send("🛑 **ACCESS DENIED! THIS IS MOD/ADMIN ONLY COMMAND. 🛑**");
           return;
       }
       if(!kickedUser)
       {
           message.channel.send("Sorry, I couldn't find that user");
           return;
       }

       let reason = args.slice(1).join(" ")
       if (!reason)
       {
         message.channel.send("You have not specified a reason!")
         return;
       }
     var kickInfo = new Discord.RichEmbed()
         .setTitle("Kick log")
         .addField("Kicked user", kickedUser.user.username)
         .addField("Kicked by", message.author.username)
         .addField("Reason", reason)
         .setThumbnail(kickedUser.user.avatarURL)
         .setColor(0xFF0000)
     let kickChannel = message.guild.channels.find(channel => channel.name === "logs")
     kickChannel.send(kickInfo)
     message.delete()
     kickedUser.send(`You have been kicked out of GameHub for: ${reason}`).catch(message.channel.send(`** ${kickedUser.user.tag} has been kicked!**`))
     setTimeout(function(){
  //code
       message.guild.member(kickedUser).kick(reason)
              .then(console.log(reason))
              .catch(console.error);
}, 1000);
  }

module.exports.help = {
  name: "kick",
  aliases: ["Kick"],
  description: "Kicks a user for obvious reasons.",
  perm: "",
  role: "Pristup",
  group:"ADMIN"
}
