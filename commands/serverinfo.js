const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let name = message.guild.name;
        let serverRegion = message.guild.region;
        let serverAvatar = message.guild.iconURL;
        let memberCount = message.guild.members.filter(user => user.user.bot === false).size
        let onlineNum = message.guild.members.filter(user => user.presence.status === 'online').size
        let categoryCount = message.guild.channels.filter(channel => channel.type === 'category').size
        let botCount = message.guild.members.filter(user => user.user.bot === true).size
        let creation = message.guild.createdAt;
        let owner = message.guild.owner
        let roleNum = message.guild.roles.size
        let TextchanNum = message.guild.channels.filter(channel => channel.type === 'text').size
        let VoiceChanNum = message.guild.channels.filter(channel => channel.type === 'voice').size

         var serverInfo = new Discord.RichEmbed()
           
              .setThumbnail(serverAvatar)
              .setColor(0xFF0000)
              .setDescription("Server Info")
              .addField("**Ime Servera**", message.guild.name)
              .addField(":crown: **Server Owner**", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
              .addField("**Server Verification Level**", message.guild.verificationLevel)
              .addField(":white_check_mark:  **Server Napravljen**", message.guild.createdAt)
              .addField(":flag_black: **Regija server**", message.guild.region)
              .addField("Broj Membera", memberCount)
              .addField("Broj Botova", botCount)
              .addField("Broj Rolova", roleNum)
              .addField("Broj Kategorija", categoryCount)
              .addField("Broj Textualnih Kanala", TextchanNum)
              .addField("Broj Voice Kanala", VoiceChanNum)
              .addField("Borj online Membera", onlineNum)
              .addField("Server Napravljen", creation)
        message.channel.sendEmbed(serverInfo)
        console.log(owner);

}

module.exports.help = {
  name: "serverinfo",
  aliases: [],
  description: "Gives information about the server.",
  perm: "",
  role: "",
  group: "Simple"
}