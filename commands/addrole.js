const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let role = message.guild.roles.find(r => r.name === 'Ne-Brisat')
  if(!message.member.roles.has(role.id)) return message.reply("| :x: | Vi nemate dozvolu da koristite ovu komandu! | :x: |");//you didnt see anything lol
    let rMember = message.guild.member(message.mentions.members.first()) || message.guild.members.get(args[0]);
    if(!rMember) return message.reply("Kome zelite dati role");
    let roleName = args.slice(1).join(" ")
    if(!roleName) return message.reply("Morate staviti tacno ime Rola!");
    let gRole = message.guild.roles.find(role => role.name === roleName);
    if(!gRole) return message.reply("Taj role ne postoji");
    if(rMember.roles.has(gRole.id)) return message.reply("They already have that role.");

    await(rMember.addRole(gRole.id));
  message.channel.send(`${rMember.user.tag} Upravo ste obavjestili Staff-Team o pokusaju grifa to jest da ste dobili role: ${roleName}`)

    try{

      await rMember.send(`:white_check_mark:  Dobili ste role: ${gRole.name}`)

    }catch(e){

      message.channel.send(` <@${rMember.id}>, je dobio role${gRole.name}`)

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