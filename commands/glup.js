const Discord = require('discord.js')

module.exports.run = async(client, message, args) => {
    var choices = [
              '● **slabo, al nisi bas ni pametan**',
              '● **Brate glup si i za skole**',
              '● **glup si ko kurac**',
              '● **sredina... nisi ni glup ni pametan**',
              '● **IQ 200 minus 300**',
              '● **smrdis na govna**',
              '● **znam da si ti seronjo.... naravno da si glup**',
              '● **da, nazalost glup si, al ipak ima malo pameti u tebi**',
              '● **mislis da sam ja retard?     (glup si)**',
              '● **pa onako malo si gluplji al nista strasno**'
        
    ]
    var embed = new Discord.RichEmbed()
    .setDescription(`${choices[Math.floor(Math.random() * choices.length)]}`)
    .setColor("RANDOM")

    message.channel.send(embed)
}
module.exports.help = {
 name: "glup",
 aliases: ["Glup"],
}