const discord = require('discord.js')

exports.run = async (bot,message,args) => {
    let Embed = new discord.RichEmbed()
    .setColor(0xff0000)
    .setDescription(`Random Number ${Math.floor(Math.random() * 301)}`)
    message.channel.send(Embed)
}
module.exports.help = {
name: "randomnumber",
aliases: []

}