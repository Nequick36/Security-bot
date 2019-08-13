const discord = require('discord.js')
exports.run = async (bot,message,args) => {
    let Embed = new discord.RichEmbed()
     .setColor('#00FF2A')
  
  .setTitle("Bot Informacije")
  .addField("﹝:skull:﹞Ime Bota", "ExtremeCommunity#0316")
  .addField(":crown:﹞Bot developer", "Anonimni")
  .addField("﹝:name_badge:﹞Originalni server", "https://discord.gg/AtzVUXF")
  .addField("﹝:biohazard:﹞Bot invite", "Private bot!")
  .setThumbnail(`https://cdn.discordapp.com/attachments/597170622212079646/600627995069382656/ExtremeNetwork.jpg`)
  .setTimestamp() 
	.setFooter(`${message.guild.name} Bot`, 'https://cdn.discordapp.com/attachments/597170622212079646/600627995069382656/ExtremeNetwork.jpg');

    message.channel.send(Embed)
}
module.exports.help = {
name: "status",
aliases: ["botinfo"]

}
