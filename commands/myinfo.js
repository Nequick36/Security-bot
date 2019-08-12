const discord = require('discord.js')

exports.run = async (bot,message,args) => {
    let Embed = new discord.RichEmbed()
    .setTitle('My Info')
    .setColor(0xff0000)

  .addField("**Vase ime**", message.author.username)
  .addField("**Ušli ste**", message.guild.joinedAt)
  .addField("**Vaš ID**", message.author.id )
  .addField("**Vaša slika**",":arrow_down: ")
  .setImage(message.author.displayAvatarURL)
    
    message.channel.send(Embed)
}
module.exports.help = {
name: "myinfo",
aliases: ["my-info", "My-Info", "My-info"]
}