const Discord = require('discord.js')

module.exports.run = async(client, message, args) => {
    var choices = [
        '● **|.-=|=-.|  _ ! Da !_ |.-=|=-.|**',
        '● **|.-=|=-.|  _ ! Ne !_ |.-=|=-.|!**',
        '● **|.-=|=-.|  _ ! Ne !_ |.-=|=-.|!**'
      
      
    ]
    var embed = new Discord.RichEmbed()
    .setAuthor('Pitanje !?!?','http://www.pngmart.com/files/3/8-Ball-Pool-PNG-Photos.png')

    .setDescription(`${choices[Math.floor(Math.random() * choices.length)]}`)
    .setColor("RANDOM")

    message.channel.send(embed)
}
module.exports.help = {
name: "question",
aliases: ["pitanje"],
}