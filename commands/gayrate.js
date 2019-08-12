const discord = require('discord.js')

exports.run = async (bot,message,args) => {
    let Embed = new discord.RichEmbed()
    .setTitle('| :gay_pride_flag: | **__Gay Rate__** | :gay_pride_flag: |')
    .setColor(0xff0000)
    .setDescription(`| :gay_pride_flag: | Tvoj gayrate je ${Math.floor(Math.random() * 201)} | :thinking: |`)
    message.channel.send(Embed)
}
module.exports.help = {
name: "gayrate",
aliases: ["Gayrate"]
}