const Discord = require("discord.js");
const eco = require("discord-economy");
const fs = require("fs")

module.exports.run = async (bot, message, args) => {
 
  let user = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member
  let userEco = eco.FetchBalance(message.user.user.id).then()

        var profile = new Discord.RichEmbed()
            .setDescription("Sada imate kod sebe : \n" + "\`" + userEco.balance + "\`")
            .setFooter(`${user.user.username}`)
            .setColor(0xFF0000)
            .setTitle(`**__Stanje na racunu__**`)
            .setThumbnail(user.user.avatarURL)
            .setTimestamp()
        message.channel.send(profile)

}

module.exports.help = {
  name: "balance",
  aliases: ["Bal", "money", "Money", "balance", "Balance"],
  perm: "",
  role: "",
  group:"Economy"
}
