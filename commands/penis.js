const Discord = require('discord.js')

module.exports.run = async(client, message, args) => {
    var choices = [
       ' 8==D ',
       ' 8===D ',
       ' 8====D ',
       ' 8=====D ',
       ' 8======D ',
       ' 8=======D ',
       ' 8========D ',
       ' 8=========D ',
       ' 8==========D ',
       ' 8===========D ',
       ' 8============D ',
       ' 8=============D ',
       ' 8==============D ',
       ' 8===============D ',
       ' 8================D ',
       ' 8=================D ',
       ' 8==================D ',
       ' 8===================D ',
       ' 8====================D ',
       ' 8=====================D ',
       ' 8======================D '
      
    ]
    var embed = new Discord.RichEmbed()
    .setDescription(`${choices[Math.floor(Math.random() * choices.length)]}`)
    .setColor("RANDOM")

    message.channel.send(embed)
   
}


module.exports.help = {
    name: "penis",
    aliases: ["Penis"]
}