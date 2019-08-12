exports.run = async (bot,message,args) => {
  if(!message.member.roles.some(r=>["Owner"].includes(r.name)))
      return message.reply("Sorry, you don't have permissions to use this!")
const Discord = require ('discord.js')

const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;

message.channel.send(`${member}\'s id is: \`${member.user.id}\`.`);

message.delete();
  }
  module.exports.help = {
name: "id",
aliases: ["Id"]
}