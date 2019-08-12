const discord = require("discord.js")
exports.run = async (bot, message, args) => {
  let Embed = new discord.RichEmbed()
  .setColor(0xff0000)
  
  .addField("**__ExtremeCommunity Help__**", " :arrow_forward:  Ovaj bot je napravljen za zabavu i moderation u serveru!") 
  .addField("**Bot Komande**", " :arrow_forward:  Komande bota možete vidjeti ako napišete en!komande")
  .addField("**SRB Bot**", " :arrow_forward:  Bot je napravljen na ``Srpskom jeziku`` za sve Balkanske servere!")
     .setThumbnail(`${message.author.displayAvatarURL}`)
  .setTimestamp() 
	.setFooter(`${message.guild.name} Bot`, 'https://cdn.discordapp.com/attachments/597170622212079646/600627995069382656/ExtremeNetwork.jpg');
  
  message.channel.send(Embed)
}
module.exports.help = {
name: "help",
aliases: ["Help"] 
}