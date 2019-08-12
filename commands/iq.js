const discord = require('discord.js')

exports.run = async (bot,message,args) => {
    let Embed = new discord.RichEmbed()
    .setTitle('| :white_check_mark:  | **__IQ__** | :white_check_mark: |')
    .setColor(0xff0000)
    .setDescription(`| :thinking: | Tvoj IQ je ${Math.floor(Math.random() * 201)} | :thinking: |`)
    message.channel.send(Embed)
}
module.exports.help = {
name: "iq",
aliases: []

}
