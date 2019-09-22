const discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`** :x: VI NEMATE DOZVOLU DA KORISITE OVU KOMANDU! :x: **`)
  let msg = args.join(" ")
  if(!msg) return message.channel.send(`Uputsvo: ${bot.prefix}dmall <poruka>`)
  let Embed = new discord.RichEmbed()
// .setTitle('Dmall')
  .setColor(0xff0000)
  .addField("Message", msg)
  message.guild.members.forEach(member => {
    member.send(Embed)
})
  message.channel.send(`Dmall is complete please wait 7 seconds`)
}
module.exports.help = {
  name:"dmall",
  aliases:[]
}
