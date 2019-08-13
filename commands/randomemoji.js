const Discord = require('discord.js')

module.exports.run = async(client, message, args) => {
    var choices = [
        ' :/ ',
        ' :( ',
        ' :) ',
        ' :( ',
        ' :-D ',
        ' :D ',
        ' :8 ',
        ' :-( ',
        ' :-) ',
        ' :/ ',
        ' xD ',
        ' -,- ',
        ' :->',
        ' O-O',
        ' O_O',
        ' '-' ',
        ' $_$',
        ' ¯\_(ツ)_/¯',
        ' ゜-゜',
        ' °︵°',
        ' >.<',
        ' +-+',
        ' Dx',
        ' ( ͡° ͜ʖ ͡°)'
     
    ]
    var embed = new Discord.RichEmbed()
    .setDescription(`${choices[Math.floor(Math.random() * choices.length)]}`)
    .setColor("RANDOM")

    message.channel.send(embed)
   

}
module.exports.help = {
 name: "randomemoji",
 aliases: ["smiley"]
}