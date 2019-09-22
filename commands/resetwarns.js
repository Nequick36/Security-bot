const Discord = require("discord.js");
const fs = require("fs")

module.exports.run = async (bot, message, args) => {
    let warns = JSON.parse(fs.readFileSync('commands/warns.json', 'utf8'));
    if(!message.member.hasPermission("MANAGE_MESSAGES"))
    {
        message.channel.send("** :x: VI NEMATE DOVOLU DA KORITITE OVU KOMANDU :x: **");
        return;
    }
    var user = message.mentions.users.first() || message.guild.members.get(args[0])
    if (!user) return message.reply('** :x: MORATE TAGATI USERA :x: **')
    if(!warns[user.id]) warns[user.id] = {}
    if(!warns[user.id].warns) warns[user.id].warns = 0
   if(warns[user.id].reasons) warns[user.id].reason
   warns[user.id].warns = 0
   warns[user.id].reasons = ''
   message.channel.send({embed:{description:`${user.username} Su resetovani warnovi sad ih ima 0.`, color:0xff0000}})
   fs.writeFile('commands/warns.json', JSON.stringify(warns, null, 4), (err) => {
if(err) console.error(err)
})
}
module.exports.help = {
  name: "resetwarns",
  aliases: [],
  perm: "ADMINISTRATOR",
  role: "*",
  group:"Developers"
}
