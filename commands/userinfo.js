const Discord = require('discord.js')

exports.run = async (bot,message,args) => {
    let Embed = new Discord.RichEmbed()
    
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send(":x: Taguj igraca kojem zelis vidit Info :x:");
  
    let reason = args.join(" ").slice(22);
   let reportEmbed = new Discord.RichEmbed()
   
   
   .setDescription("**__User Info__**")
   .setColor("#40FFF9")
   .addField("**NickName:**", `${rUser}`)
   .addField("**ID:**", `${rUser.id}`)
   .addField("**Kada je ušao/la**", `${rUser.joinedAt}`)
   .addField("**Vrijeme**", message.createdAt)

message.channel.send(reportEmbed)
  
   return;
}    
module.exports.help = {
name: "userinfo",
aliases: ["user-info"]
}