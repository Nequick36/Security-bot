const Discord = require("discord.js")
const eco = require("discord-economy")

module.exports.run = async (bot, message, args) => {
  let user = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member
  let roles = user.roles;
        let role_name = roles.map(role => {
          if(role.name === "@everyone") return
          return role.name;
        })

        let joined = user.joinedAt
        var profile = new Discord.RichEmbed()
            .addField("Name", user)
            .addField("Joined at", joined)
            .addField("Roles", role_name)
            .setColor(0xFF0000)
            .setTitle("Your profile")
            .setThumbnail(user.avatarURL)
            .setTimestamp()
        message.channel.send(profile)
        console.log(message.mentions.members.first())
}

module.exports.help = {
  name: "profile",
  description: "Checks Your own custom profile.",
  group:"Simple"
}
