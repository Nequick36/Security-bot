const discord = require('discord.js')
exports.run = async (bot,message,args) => {
   message.delete()
    let Embed = new discord.RichEmbed()
     .setColor('BLUE')
    
.setTitle(`**Broj membera** ${message.guild.memberCount} **Online Memberi** ${message.guild.members.filter(user => user.presence.status === 'online').size}`)

    message.channel.send(Embed)
}
module.exports.help = {
name: "members",
aliases: ["Members"]
}