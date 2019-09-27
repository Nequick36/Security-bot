const Discord = require("discord.js")
const eco = require("discord-economy")
const dl = require('discord-leveling')

module.exports.run = async (bot, message, args) => {
  let user = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member
  let userEco = await eco.FetchBalance(user.user.id).then()
  let roles = user.roles;
        let role_name = roles.map(role => {
          if(role.name === "@everyone") return
          return role.name;
        })

        let joined = user.joinedAt
        var profile = new Discord.RichEmbed()
            .addField("Ime", user)
            .addField("Usao/la je", joined)
            .addField("Coins", userEco.balance)
            .addField("Roles", role_name)
            .addField("ID", `${message.user.id}`)
            .setColor(0xFF0000)
            .setTitle(`Profile of ${user.user.username}`)
            .setThumbnail(user.user.avatarURL)
            .setTimestamp()
        message.channel.send(profile)
}

module.exports.help = {
  name: "profile",
  aliases: [],
  perm: "",
  role: "",
  group:"Simple"
}
