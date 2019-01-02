const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let roles = message.member.roles;
        let role_name = roles.map(role => {
          if(role.name === "@everyone") return
          return role.name;
        })

        let joined = message.member.joinedAt
        var profile = new Discord.RichEmbed()
            .addField("Name", message.author)
            .addField("Joined at", joined)
            .addField("Roles", role_name)
            .setColor(0xFF0000)
            .setTitle("Your profile")
            .setThumbnail(message.author.avatarURL)
            .setTimestamp()
        message.channel.send(profile)
        console.log(message.mentions.members.first())
}

module.exports.help = {
  name: "profile",
  description: "Checks Your own custom profile.",
  group:"Simple"
}