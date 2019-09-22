const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let suggestion = message.content.split(" ").slice(1).join(" ");
       if(!suggestion) return message.reply("** :x: Upute en!suggest <pitanje> :x: **")
        message.channel.send("**Vase pitanje je prosljedjeno Osoblju odgovoricemo vam u sto brzem roku** " + message.author)
        var suggest = new Discord.RichEmbed()
             .addField("Pitanje", suggestion)
             .setColor(0xFF0000)
             .addField("Pitanje je poslao ", message.author.username)
             .setThumbnail(message.author.avatarURL)
             .setTimestamp()
        let suggestChannel = message.guild.channels.find(channel => channel.name === "suggestions")
        suggestChannel.send(suggest)
}

module.exports.help = {
  name: "suggest",
  aliases: ["Suggest"],
  perm: "",
  role: "",
  group: "Simple"
}
