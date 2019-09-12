const discord = require("discord.js")
exports.run = async (bot, message, args) => {
  let Embed = new discord.RichEmbed()
	.setTitle('Support Server')
	.setURL('https://discord.gg/qmNMmwa')
  
  .setColor(0xff0000)
  
  .setDescription("Za **Help** oko bota pitajte Vlasnika ⚡ Veka ⚡ 《Vlasnik》") 
  .setThumbnail(`${message.author.displayAvatarURL}`)
  .setTimestamp()  
  message.channel.send(Embed)
}
module.exports.help = {
name: "support",
aliases: ["Support", "SupportSrw", "Supportsrw", "SupportServer", "Supportserver"]
}
  
