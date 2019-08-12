const Discord = require('discord.js')

exports.run = async (bot,message,args) => {
   if(!bot.devs.includes(message.author.id)) return message.channel.send(`** | :x: | Nemas dozvolu za ovu komandu | :x: |**`)
    let Embed = new Discord.RichEmbed()
    
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if(!rUser) return message.channel.send("Napravi kanal logs!");
    let reason = args.join(" ").slice(22);


   let reportEmbed = new Discord.RichEmbed()
   .setDescription("**__Update__**")
   .setColor("#15f153")
   .addField("Reason", reason);

    let reportschannel = message.guild.channels.find(`name`, "「📌」update");
    if(!reportschannel) return message.channel.send("Napravi Kanal 「📌」update");


   message.delete();
  reportschannel.send(reportEmbed)

   return;
}    
module.exports.help = {
name: "update",
aliases: ["Update", "upDate", "UpDate"]
}