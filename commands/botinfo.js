const discord = require('discord.js')
exports.run = async (bot,message,args) => {
    let Embed = new discord.RichEmbed()
     .setColor('#00FF2A')
  
  .setTitle("Bot Info")
  .setDescription("**Private Bot!**")
  .addField("Bota je kreirao", "⚡ Veka ⚡ ᴼᴿᴵᴳᴵᴺᴬᴸ#7740")
  .addField("Ime Bota", "ExtremeCommunity")
  .addField("Bot je napravljen", "19.5.2019")
  .addField("Napravljen je preko", "[Discord.PY](https://www.python.org/)")
  .addField("Kontakt", "**__⚡ Veka ⚡ ᴼᴿᴵᴳᴵᴺᴬᴸ#7740__**")
  .addField("Socijalne Mreze", "| [Twich](https://www.twitch.tv/veka_peka312) | [Twitter](https://twitter.com/Veka14940405) | [YouTube](https://www.youtube.com/channel/UCyahu0PkDygigMlgbShM1nw) | [Instagram](https://www.instagram.com/veka312/?hl=hr) |")
  .setThumbnail(`https://cdn.discordapp.com/attachments/616276201689841752/616278545651597413/extreme_community.jpg`)
  .setTimestamp() 
	.setFooter(`${message.guild.name} Bot`, 'https://cdn.discordapp.com/attachments/616276201689841752/616278545651597413/extreme_community.jpg');

    message.channel.send(Embed)
}
module.exports.help = {
name: "status",
aliases: ["botinfo", "Botinfo", "BotInfo", "botInfo"]
}