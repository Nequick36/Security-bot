const discord = require('discord.js')
exports.run = async (bot, message, args, tools) => {
    let Embed = new discord.RichEmbed()
    .setColor(0xff0000)
    .setDescription("**Bot Invite**")
    .setURL('https://Ovo.je.private.bot.com/')
    
    message.channel.send(Embed)
}
module.exports.help = {
name: "botinvite",
aliases: ["botinv"]
}