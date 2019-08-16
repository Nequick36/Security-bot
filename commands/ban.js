const Discord = require("discord.js")

exports.run = async (bot, message, args) => {
let role = message.guild.roles.find(r => r.name === 'Pristup')
  let bannedUser = message.mentions.members.first();
       {
           message.channel.send("🛑**ACCESS DENIED! THIS IS AN ADMIN ONLY COMMAND.🛑**");
           return;
       }

       if(!bannedUser)
       {
           message.channel.send("Tagajte usera kojeg zelite banat");
           return;
       }
      if(message.mentions.members.first().hasPermission('MANAGE_MESSAGE')) return message.channel.send(`You can't warn a Server Manager!`)
       let reason = args.slice(1).join(" ")
       if (!reason)
       {
         message.channel.send(`${message.author.username} morate staviti razlog `)
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
     bannedUser.send(`Vi ste banani sa servera ExtremeCommunity, razlog: ${reason}`).catch(message.channel.send(`** ${bannedUser.user.tag} je banovan!**`))
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
  description: "Ban a user for obvious reasons.",
  perm: "",
  role: "Pristup",
  group:"ADMIN"
}