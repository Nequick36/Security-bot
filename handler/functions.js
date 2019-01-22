let Discord = require('discord.js')
module.exports = {
  embed: async function(title, color, description, channel) {
    let CustomEmbed = new Discord.RichEmbed()
    .setTitle(`${title || ''}`)
    .setColor(`${color || 0xff000}`)
    .setDescription(`${description || ''}`)
    return CustomEmbed
  }
}