const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {
    // Permission Verification (Optional)
  
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send({embed:{description:`| :x: |Nemas dozvolu za ovu komandu! | :x: |`, color:0xff0000}})
    if (!args[0]) return message.channel.send('**Upustvo:** en!anketa <anketa>');

    const embed = new Discord.RichEmbed()
        .setColor(0xffffff)
        .setDescription(args.join(' '))

    let msg = await message.channel.send(embed);

			await msg.react('1⃣'); // 1
			await msg.react('2⃣'); // 2
			await msg.react('3⃣'); // 3
      await msg.react('4⃣'); // 4 
      await msg.react('5⃣'); // 5
      await msg.react('6⃣'); // 6
      await msg.react('7⃣'); // 7
      await msg.react('8⃣'); // 8
      await msg.react('9⃣'); // 9
      await msg.react('🔟'); // 10

} 
module.exports.help = {
name: "anketa",
aliases: ["Anketa"],
}