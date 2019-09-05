const db = require('quick.db')
const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    let bal = db.fetch(`money_${message.guild.id}_${message.author.id}`)

    if (bal === null) bal = 0;

    message.channel.send('You have a balance of `' + bal + '`')


}
module.exports.help = {
name: "bal",
aliases: ["Balance","Money","money"]
}