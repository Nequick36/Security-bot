const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {
  
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send({embed:{description:`** :x: VI NEMATE DOZVOLU DA KORISITE OVU KOMANDU :x: **`, color:0xff0000}})
    if (!args[0]) return message.channel.send('en!vote <vote>');

    const embed = new Discord.RichEmbed()
        .setColor(0xffffff)
        .setDescription(args.join(' '))
        .addField(":white_check_mark:  Da", ":x: Ne")
        .setTitle('**__Voting__**');

    let msg = await message.channel.send(embed);

    await msg.react('✅'); 
    await msg.react('❌');

} 
module.exports.help = {
name: "vote",
aliases: ["Vote"]
}