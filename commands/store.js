
const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args, config) => {



     
    let embed = new Discord.RichEmbed()
    .setTitle(`${client.user.tag} Store!`)
    .setDescription('**Use +buy <item> to buy!**')
    .addField(`Coal`, '`250$`\nGives you the coal role!')
    .addField(`Iron`, '`500$`\nGives you the iron role!') // can add up to 25(I believe)
    .setColor("RANDOM") 

    message.channel.send(embed)



}
module.exports.help = {
name: "store",
aliases: ["Store"]
}