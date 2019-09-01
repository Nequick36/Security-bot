const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let bug = message.content.split(" ").slice(1).join(" ");
       if(!bug) return message.reply("You have not specified a suggestion!")
        message.channel.send("**Your suggestion has been submitted** " + message.author)
        var suggest = new Discord.RichEmbed()
             .addField("Bug", bug)
             .setColor(0xFF0000)
             .addField("Bug reported by", message.author.username)
             .setThumbnail(message.author.avatarURL)
             .setTimestamp()
        let suggestChannel = message.guild.channels.find(channel => channel.name === "logs")
        suggestChannel.send(suggest)
}

module.exports.help = {
  name: "bugreport",
  aliases: ["Bugreport"],
  description:"Makes a suggestion.",
  perm: "",
  role: "",
  group: "Simple"
}
