const discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Nemas dozvolu za tu komandu!")
  let msg = args.join(" ")
  if(!msg) return message.channel.send(` **Uputsvo**: ${bot.prefix}**__dm <member> <poruka>__**`)  
    let target = message.guild.member(message.mentions.users.first() || message.guild.member.get(args[0]));
  
  if(!target) return message.reply(" :x:  Taguj Igraca kojem zelis poslati poruku :x:");
    let reason = args.join(" ").slice(22);
   let Embed = new discord.RichEmbed()
  
  .setTitle("**__Poruka__**")
  .setColor("RANDOM")
  .addField("Poruka", msg)
  
  target.send(Embed)
 message.delete()
}
module.exports.help = {
  name:"dm",
  aliases:["Dm"]
}