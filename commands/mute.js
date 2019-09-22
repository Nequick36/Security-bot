const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send({embed:{description:`**:x: VI NEMATE DOZVOLU DA KORISTITE OVU KOMANDU! :x:**`, color:0xff0000}})
    let tomute = message.mentions.members.first()
  if(!tomute) return message.channel.send({embed:{description:`**:x: MORATE TAGATI MEMBERA KOJEG ZELITE MUTATI :x:** `, color:0xff0000}})
  let muterole = message.guild.roles.find(r => r.name==="Extreme | Mute");
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Extreme | Mute",
        color: "#000000",
        permissions:[]
      })

      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false,
          VIEW_CHANNEL: false
        });
      });
    }catch(e){
      if(e) return message.channel.send(e)
    }
  }

  let reason = args.filter(arg => arg!==args[0]).join(" ") || "Razlog muta nije stavljen!"
try {
  await(tomute.addRole(muterole.id));
  message.channel.send({embed:{description:`${tomute} je tempmutovan od strane Osoblja: ${message.author.username} ,razlog muta: \`${reason}\``, color:0xff0000}})
} catch (e) {
  if (e) return message.channel.send(e+'\nError: Contant Owner!')
}
}
module.exports.help = {
    name:"mute",
    aliases:["Mute"],
    perm: "MANAGE_MESSAGES",
   role: "Pristup",
   group: "Admin"
}