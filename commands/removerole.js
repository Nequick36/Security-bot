const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let roleA = message.guild.roles.find(r => r.name === 'Ne-Brisat')
  if(!message.member.roles.has(roleA.id)) return message.reply("Sorry pal, you can't do that.");//you didnt see anything lol
    let rMember = message.guild.member(message.mentions.members.first()) || message.guild.members.get(args[0]);
    if(!rMember) return message.reply("Couldn't find that user");
    let role = args.slice(1).join(" ")
    if(!role) return message.reply("Specify a role!");
    let gRole = message.guild.roles.find(r => r.name === role);
    if(!gRole) return message.reply("Couldn't find that role.");
    if(!rMember.roles.has(gRole.id)) return message.reply("They don't have that role.");

    await(rMember.removeRole(gRole.id));
  message.channel.send(`I removed role ${role} from user ${rMember.user.tag}!`)

    try{

      await rMember.send(`RIP, you lost the ${gRole.name} role.`)

    }catch(e){

      message.channel.send(`RIP to <@${rMember.id}>, We removed ${gRole.name} from them. We tried to DM them, but their DMs are locked.`)
    }
}

module.exports.help = {
  name: "removerole",
  aliases: [],
  description: "Removes a role from a specified user.",
  perm: "",
  role: "Ne-Brisat",
  group: "Admin"
}