const Discord = require ('discord.js')
exports.run = async (bot,message,args) => {

const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;

message.channel.send(`${member}\ ID je: \`${member.user.id}\`.`);

message.delete();
}

module.exports.help = {
  name: "id",
  aliases: ['Id'],
  perm: "",
  role: "",
  group:"Simple"
}