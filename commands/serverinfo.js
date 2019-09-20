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
             .setColor("RANDOM")  .addField("**Ime Servera**", message.guild.name)
             .setColor("RANDOM")  .addField(":crown: **Server Owner**", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
             .setColor("RANDOM")  .addField("**Server Verification Level**", message.guild.verificationLevel)
             .setColor("RANDOM")  .addField(":white_check_mark:  **Server Napravljen**", message.guild.createdAt)
             .setColor("RANDOM")  .addField(":flag_black: **Regija server**", message.guild.region)
             .setColor("RANDOM")  .addField("**:one: Broj Membera**", memberCount)
             .setColor("RANDOM")  .addField("**:two:Broj Botova**", botCount)
             .setColor("RANDOM")  .addField("**:three: Broj Rolova**", roleNum)
             .setColor("RANDOM")  .addField("**:four: Broj Kategorija**", categoryCount)
             .setColor("RANDOM")  .addField("**:six: Broj Textualnih Kanala**", TextchanNum)
             .setColor("RANDOM")  .addField("**:seven: Broj Voice Kanala**", VoiceChanNum)
             .setColor("RANDOM")  .addField("**:eight: Broj Online Membera**", onlineNum)
             .setColor("RANDOM")  .addField("**:tools: Server Napravljen**", creation)
             .setColor("RANDOM")  .addField("**Server ID**", "534103580920250399")
             .setColor("RANDOM")  .addField("**Owner ID**", "532659544791318540")
         .setColor("RANDOM")      .addField("Broj Animated Emojija", "17")
          .setColor("RANDOM")     .adField("Broj Obicnih Emojija", "47")
        message.channel.sendEmbed(serverInfo)
        console.log(owner);

}

module.exports.help = {
  name: "serverinfo",
  aliases: [],
  perm: "",
  role: "",
  group: "Simple"
}