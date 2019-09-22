const Discord = require("discord.js")
const fs = require("fs")

module.exports.run = async (bot, message, args) => {
    let warns = JSON.parse(fs.readFileSync('commands/warns.json', 'utf8'));
    if(!message.member.hasPermission("SEND_MESSAGES"))
    {
        message.channel.send("🛑 **ACCESS DENIED! THIS IS A MOD/ADMIN ONLY COMMAND. 🛑**");
        return;
    }
    var user =  message.guild.members.get(args[0]) || message.mentions.members.first()
    if (!user) return message.reply('Tagaj usera kojem zelis vidit broj warnova!')
    if(!warns[user.id]) warns[user.id] = {}
    if(!warns[user.id].warns) warns[user.id].warns = 0
    if(!warns[user.id].reasons) warns[user.id].reasons = ':x: **UPOZORENJA** Nema warnova'
   if(warns[user.id].warns === 0) return message.channel.send({embed:{description:`:x: **UPOZORENJA** ${user.user.username} nema warnova.`, color:0xff0000}})
   let reasons = warns[user.id].reasons.split('|!')
   let warnsNum = reasons.length
   let embed = new Discord.RichEmbed()
   .setTitle(`${user.user.username}`)
   .setColor('RED')
   .addField(`:x:UPOZORENJA`, `${warns[user.id].warns}`)
   for(let i = 0; i<reasons.length; i++) {
     embed.addField(`Reason #${i+1}`, `${reasons[i]}`)
   }
   message.channel.send(embed)
}

module.exports.help = {
    name: "warns",
  aliases: [],
  perm: "",
  role: "",
  group:""

}
