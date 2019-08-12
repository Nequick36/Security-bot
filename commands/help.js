const discord = require('discord.js')
exports.run = async (bot,message,args) => {
  let Embed = new discord.RichEmbed()
    .setColor("RANDOM")

    .addField(":warning: ** Komanda ne postoji!**:warning:", "Ukucaj **en!Help** da vidis listu komandi")
    .setThumbnail('https://cdn.glitch.com/d7910d8b-6cc6-497a-a0ff-a46b276a3899%2Ferror.gif?v=1562176286793')
    message.channel.send(Embed)
}
module.exports.help = {
me: "Help",
aliases: []
}