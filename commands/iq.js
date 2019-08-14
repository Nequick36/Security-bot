const discord = require('discord.js')

exports.run = async (bot,message,args) => {
    let Embed = new discord.RichEmbed()
    .setTitle('**__IQ__**')
    .setColor(0xff0000)
    .setDescription(`| :thinking: | Tvoj IQ je ${Math.floor(Math.random() * 201)} | :thinking: |`)
    message.channel.send(Embed)
}
module.exports.help = {
name: "iq",
aliases: []

}
