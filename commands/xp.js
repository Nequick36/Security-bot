const Discord = require("discord.js");
const dl = require('discord-leveling')

module.exports.run = async (bot, message, args) => {
  let Embed = new Discord.RichEmbed()

        .addField("Level", `${l.level}`)
        .addField("Xp", `${l.xp}`)
        .setFooter(`${message.author.username}`)
  
  
message.channel.send(Embed)
}
module.exports.help = {
  name: "xp",
  aliases: ['Xp', 'level'],
  perm: "",
  role: "",
  group:"Leveling"
}
