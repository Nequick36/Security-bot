const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => { 
  
  let kickedUser = message.mentions.members.first();
  if(!message.member.hasPermission("MANAGE_MESSAGES"))
       {
  if(!kickedUser) return message.channel.send({embed:{description:`**:x: VI NEMATE DOZVOLU DA KORISITE OVU KOMANDU :x:** `, color:0xff0000}})
           return;
       }
       if(!kickedUser)
       {
           message.channel.send("**:x: MORATE TAGATI USERA KOJEG ZELITE KIKATI :x:**");
           return;
       }

       let reason = args.slice(1).join(" ")
       if (!reason)
       {
         message.channel.send("**:x: NISTE STAVILI RAZLOG KIKA :x:**")
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
     kickedUser.send(`:white_check_mark:  **Kikani** ste sa Servera ExtremeCommunity od strane Osoblja: ${message.author.username}, Razlog: ${reason}`).catch(message.channel.send(`** ${kickedUser.user.tag} je kikovan!**`))
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
  perm: "MANAGE_MESSAGE",
  role: "Pristup",
  group:"ADMIN"
}
