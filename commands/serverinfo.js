const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let name = message.guild.name;
        let serverRegion = message.guild.region;
        let serverAvatar = message.guild.iconURL;
        let memberCount = message.guild.memberCount;
        let creation = message.guild.createdAt;
        let owner = message.guild.members.get("349250638632452096");
        let roleNum = message.guild.roles.size
        let chanNum = message.guild.channels.filter()

         var serverInfo = new Discord.RichEmbed()
              .setTitle(name)
              .setThumbnail(serverAvatar)
              .setColor(0xFF0000)
              .addField("Owner", owner.user.username)
              .addField("Region", serverRegion)
              .addField("Number of members", memberCount)
              .addField("Number of roles", roleNum)
              .addField("Number of  channels (text & vc)", chanNum)
              .addField("The server was created on", creation)
        message.channel.sendEmbed(serverInfo)
        console.log(owner);

}

module.exports.help = {
  name: "serverinfo",
  description: "Gives information about the server.",
  group: "Simple"
}