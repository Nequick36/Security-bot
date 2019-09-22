const Discord = require("discord.js");
const ms = require("ms"); 

module.exports.run = async (bot, message, args) => {
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("**:x: VI NEMATE DOZVOLU DA KORISTITE OVU KOMANDU!! :x:**")
  if(!tomute) return message.reply("**:x: MORATE TAGATI USERA KOJEG ZELITE TEMPMUTATI :x:**");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("**:x: NE MOZETE MUTATI CLANOVE SA DOZVOLOM ADMINISTRATOR :x:**");
  let muterole = message.guild.roles.find(`name`, "Extreme | Mute");

  //start of create role

  if(!muterole){

    try{
      muterole = await message.guild.createRole({
        name: "Extreme | Mute",
        
        color: "#BBBBBB",
        
        permissions:[]

      })

      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          
          VIEW_CHANNEL: false,
          
          SEND_MESSAGES: false,
          
          ADD_REACTIONS: false
          
        });
        
      });
      
    }catch(e){
      
      console.log(e.stack);
    }
  }
  
  //end of create role
  
  let mutetime = args[1]
  if(!mutetime) return message.reply(":x: Niste stavili vreme! , Upute: en!tempmute <vrjeme> <razlog-muta> :x:");
  
  let reason = message.content.split(" ").slice(3).join(" ")
  if(!reason) return message.reply(":x: Niste stavili razlog, Upute: en!tempmute <vrijeme> <razlog-muta> :x:")
  let embed = new Discord.RichEmbed()
  .setTitle(`${tomute.user.username} has been muted`)
  .addField("Duration", mutetime)
  .addField("reason", reason)
  .setThumbnail(tomute.user.avatarURL)

  

  await(tomute.addRole(muterole.id));

  message.reply(`<@${tomute.id}> **Je mutovan na:** ${ms(ms(mutetime))}`);
  message.guild.channels.get("602090584924094470").send(embed)
  setTimeout(function(){
    if(!tomute.roles.has(muterole.id)) return;
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> **Je unmutovan/a**`);
    message.guild.channels.get("602090584924094470").send({embed:{description: `**${tomute.user.username} Je unmutovan/a**`, color:10000}})
  }, ms(mutetime));
}

module.exports.help = {
  name: "tempmute",
  aliases: ["tempMute"],
  perm: "MANAGE_MESSAGES",
  role: "Pristup",
  group: "Admin"

}