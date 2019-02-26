 const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let role = message.guild.roles.find(r => r.name === 'Administrator')
  if(!message.member.roles.has(role.id)) return message.reply("Sorry pal, you can't do that.");//you didnt see anything lol
    let rMember = message.guild.member(message.mentions.members.first()) || message.guild.members.get(args[0]);
    if(!rMember) return message.reply("Couldn't find that user");
    let roleName = args.slice(1).join(" ")
    if(!roleName) return message.reply("Specify a role!");
    let gRole = message.guild.roles.find(role => role.name === roleName);
    if(!gRole) return message.reply("Couldn't find that role.");
    if(rMember.roles.has(gRole.id)) return message.reply("They already have that role.");

    await(rMember.addRole(gRole.id));
  message.channel.send(`I gave ${rMember.user.tag} role ${roleName}!`)

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
  perm: "ADMINISTRATOR",
  role: "",
  group: "ADMIN"
  
}