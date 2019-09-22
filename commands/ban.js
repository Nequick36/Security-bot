const Discord = require("discord.js")
const replaceall = require("replaceall")


module.exports.run = async (bot, message, args) => {
let role = message.guild.roles.find(r => r.name === 'Pristup')
  let bannedUser = message.mentions.members.first();
   if(!message.member.roles.has(role.id))
       {
           message.channel.send("**:x: NEMAS DOZVOLU DA KORISTIS OVU KOMANDU :x:**");
           return;
       }

       if(!bannedUser)
       {
           message.channel.send(":x: **TAGAJ USERA KOJEG ZELITE BANATI!**");
           return;
       }
      if(message.mentions.members.first().hasPermission('MANAGE_GUILD')) return message.channel.send(`:x: **NE MOZETE BANATI CLANOVE SA DOZVOLOMN ADMINISTRATOR**`)
       let reason = args.slice(1).join(" ")
       if (!reason)
       {
         message.channel.send(":x: **NISTE STAVILI RAZLOG BANA!**")
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
     bannedUser.send(`:white_check_mark:  **Banovani** ste sa servera ExtremeCommunity od strane Osoblja: ${message.author.username}, Razlog: ${reason}`).catch(message.channel.send(`** ${bannedUser.user.tag} je banovan!**`))
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


