const discord = require('discord.js')
exports.run = async (bot,message,args) => {
    let Embed = new discord.RichEmbed()
     .setColor('#00FF2A')
  .addField("Klikni", " [:robot:](https://extremecommunitybot.glitch.me/help)")
  .setThumbnail(`https://cdn.discordapp.com/attachments/616276201689841752/616278545651597413/extreme_community.jpg`)
  .setTimestamp() 
	.setFooter(`${message.guild.name} Bot`, 'https://cdn.discordapp.com/attachments/616276201689841752/616278545651597413/extreme_community.jpg');

    message.channel.send(Embed)
}
module.exports.help = {
name: "help",
aliases: ["Help"]
}