const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let unbannedUser = args
         console.log(unbannedUser)
   if(!message.member.hasPermission("MANAGE_GUILD"))
         {
             message.channel.send("** :x: VI NEMATE DOZVOLU DA KORISITE OVU KOMANDU :x: **");
             return;
         }
         if(!unbannedUser)
         {
             message.channel.send("** :x: MORATE STAVITI ID USERA KOJEG ZELITE UNBANAT :x: **");
             return;
         }
        
        if(message.guild.members.get(args)) return message.channel.send(`** :x: TAJ MEMBER NIJE BANAN :x: **`)
       setTimeout(function(){
    //code
       message.guild.unban(args)
                .then(console.log)
                .catch(console.error);
       message.channel.send(`** USPJESNO STE UNBANALI USERA SA IDOM: ${args} :x: **`)
 }, 500);
}

module.exports.help = {
  name: "unban",
  aliases: [],
  perm: "MANAGE_GUILD",
  role: "Pristup",
  group: "admin"
}
