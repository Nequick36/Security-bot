const Discord = require("discord.js");
const ms = require("ms"); 

module.exports.run = async (bot, message, args) => {
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("**__:x: VI NEMATE DOZVOLU DA KORISITE OVU KOMANDU :x:__**")
  if(!tomute) return message.reply("**__:x: MORATE TAGATI MEMBERA KOJEG ZELITE TEMPMUTATI :x:__**");
  //if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
  let muterole = message.guild.roles.find(`name`, "Extreme | Mute");

  //start of create role

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

          ADD_REACTIONS: false

        });

      });

    }catch(e){

      console.log(e.stack);

    }

  }

  //end of create role

  let mutetime = args[1]
  if(!mutetime) return message.reply("Upute: en!tempmute <user> <vrijeme> <razlog> ");
  
  let reason = message.content.split(" ").slice(3).join(" ")
  if(!reason) return message.reply("Upute: en!tempmute <user> <vrijeme> <razlog> ")
  let embed = new Discord.RichEmbed()
  .setTitle(`${tomute.user.username} je tempmutovan`)
  .addField("Vrijeme", mutetime)
  .addField("razlog muta", reason)
  .setThumbnail(tomute.user.avatarURL)

  

  await(tomute.addRole(muterole.id));

  message.reply(`<@${tomute.id}> **__je tempmutovan na:__** __${ms(ms(mutetime))}__`);
  message.guild.channels.get("619572519074136085").send(embed)
  setTimeout(function(){
    if(!tomute.roles.has(muterole.id)) return;
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted!`);
    message.guild.channels.get("619572519074136085").send({embed:{description: `**${tomute.user.username} je unmutovan    **`, color:0xff0000}})
  }, ms(mutetime));
//end of module
}

module.exports.help = {
  name: "tempmute",
  aliases: ["Tempmute", "TempMute"],
  perm: "",
  role: "EC | Osoblje ",
  group: "Admin"

}