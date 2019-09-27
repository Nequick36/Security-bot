const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  message.delete()
  let bug = message.content.split(" ").slice(1).join(" ");
       if(!bug) return message.reply("Upute : en!bugreport <bug>")
        var suggest = new Discord.RichEmbed()
             .addField("Bug", bug)
             .setColor(0xFF0000)
             .addField("Bug je prijavio", message.author.username)
             .setThumbnail(message.author.avatarURL)
             .setTimestamp()
        let suggestChannel = message.guild.channels.find(channel => channel.name === "bugreports")
        suggestChannel.send(suggest)
}

module.exports.help = {
  name: "bugreport",
  aliases: ["Bugreport"],
  perm: "",
  role: "",
  group: "Simple"
}
