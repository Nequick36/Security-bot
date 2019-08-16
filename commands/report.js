const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let modRole = message.guild.roles.find(role => role.name === 'Pristup')
   let rUser = message.guild.member(message.mentions.users.first())
   if(!rUser) return message.reply("You have not mentioned a user to report!")
  let reason = args.slice(1).join(" ")
  if(!reason) return message.reply("You have not specified a reason")
  let embed = new Discord.RichEmbed()
  .setTitle("Report Log")
  .addField("Reported user", rUser.user.username)
  .addField("Reported by", message.author.username)
  .addField("Reported for:", reason)
  .setColor("RED")
  .setTimestamp()
  message.channel.send("That user has been reported!")
  message.delete()
  
  }

module.exports.help = {
  name: "report",
  aliases: [],
  description: "Reports a user for a specified reason",
  perm: "",
  role: "",
  group:"Simple"
}