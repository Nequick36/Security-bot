const discord = require('discord.js')
exports.run = async (bot,message,args) => {
    let Embed = new discord.RichEmbed()
     .setColor('#00FF2A')
  
  .setTitle("Bot Info")
  .addField("Created By", "This bot created by: ⚡ Veka ⚡ ᴼᴿᴵᴳᴵᴺᴬᴸ#7740")
  .addField("Made With", "[Discord.JS](http://discord.js.org)")
  .addField("Contant Me", "**__⚡ Veka ⚡ ᴼᴿᴵᴳᴵᴺᴬᴸ#7740__**")
  .addField("Social Media", "[Twitter](https://twitter.com/Veka14940405) | [YouTube](https://www.youtube.com/channel/UCyahu0PkDygigMlgbShM1nw) | [Instagram](https://www.instagram.com/veka312/?hl=hr)")
  .setThumbnail(`https://cdn.discordapp.com/attachments/597170622212079646/600627995069382656/ExtremeNetwork.jpg`)
  .setTimestamp() 
	.setFooter(`${message.guild.name} Bot`, 'https://cdn.discordapp.com/attachments/597170622212079646/600627995069382656/ExtremeNetwork.jpg');

    message.channel.send(Embed)
}
module.exports.help = {
name: "status",
aliases: ["botinfo"]

}
