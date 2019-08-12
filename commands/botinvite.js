const discord = require('discord.js')
exports.run = async (bot, message, args, tools) => {
    let link = await bot.generateInvite(['ADMINISTRATOR'])
    let InviteEmbed = new discord.RichEmbed()
    .setColor(0xff0000)
     .setTitle("Click Here")
    .setDescription("**Bot Invite**")
    .setURL('https://discordapp.com/api/oauth2/authorize?client_id=610107625383919616&permissions=8&scope=bot')
    
    message.channel.send(InviteEmbed)
}
module.exports.help = {
name: "botinvite",
aliases: ["botinv"]
}