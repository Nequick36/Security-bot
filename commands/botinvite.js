const discord = require('discord.js')
exports.run = async (bot, message, args, tools) => {
    let link = await bot.generateInvite(['ADMINISTRATOR'])
    let InviteEmbed = new discord.RichEmbed()
    .setColor(0xff0000)
     .setTitle("Private Bot -.-")
    .setDescription("**Bot Invite**")
    .setURL('https://Ovo je private bot.com/')
    
    message.channel.send(InviteEmbed)
}
module.exports.help = {
name: "botinvite",
aliases: ["botinv"]
}