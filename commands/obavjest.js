const Discord = require('discord.js')

exports.run = async (bot,message,args) => {
   if(!bot.devs.includes(message.author.id)) return message.channel.send(`** | :x: | Nemas dozvolu za ovu komandu | :x: |**`)
    let Embed = new Discord.RichEmbed()
    
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if(!rUser) return message.channel.send("Napravi kanal logs!");
    let reason = args.join(" ").slice(22);


   let reportEmbed = new Discord.RichEmbed()
   .setDescription("**__OBAVJESTENJE__**")
   .setColor("#15f153")
   .addField("Reason", reason);

    let reportschannel = message.guild.channels.find(`name`, "「📯」obavjestenja");
    if(!reportschannel) return message.channel.send("Napravi Kanal 「📯」obavjestenja");


   message.delete();
  reportschannel.send(reportEmbed)

   return;
}    
module.exports.help = {
name: "obavjest",
aliases: ["Obavjest", "New", "new"]
}