 const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Sorry pal, you can't do that.");//you didnt see anything lol
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!rMember) return message.reply("Couldn't find that user");
    let roleName = args.join(" ").slice(23);
    if(!roleName) return message.reply("Specify a role!");
  console.log(roleName)
    let gRole = message.guild.roles.find(role => role.name === roleName);
    if(!gRole) return message.reply("Couldn't find that role.");
    if(rMember.roles.has(gRole.id)) return message.reply("They already have that role.");

    await(rMember.addRole(gRole.id));

    try{

      await rMember.send(`Congrats, you have been given the role ${gRole.name}`)

    }catch(e){

      message.channel.send(`Congrats to <@${rMember.id}>, they have been given the role ${gRole.name}. We tried to DM them, but their DMs are locked.`)

    }
  }


module.exports.help = {
  name: "addrole",
  aliases: [],
  description: "Adds a role to specififed user.",
  perm: "",
  role: "",
  group: "ADMIN"
  
}