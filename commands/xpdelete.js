const Discord = require("discord.js");
const eco = require("discord-economy");
const dl = require('discord-leveling')

module.exports.run = async (bot, message, args) => {

    var user = message.mentions.users.first() || bot.fetchUser(args[0])
    if (!user) return message.reply('Please, Specify a user I have to delete in my database!')
 
    if (!message.member.hasPermission('ADMINISTRATOR') && !message.member.roles.has(message.guild.roles.find(r => r.name === '*').id)) return message.reply('You need to be admin to execute this command!')
 
    var output = await dl.Delete(user.id)
    if (output.deleted == true) return message.reply('** :x: USPJESNO STE IZBRISALI USERA IZ MOJEG DATABASE FAJLA :x: **')
 
    message.reply('** :x: TAJ USER NIJE U MOJOJ BAZI PODATAKA:x: **')

}

module.exports.help = {
  name: "xpdelete",
  aliases: ['lvldelete', 'leveldelete'],
  perm: "",
  role: "",
  group:"Leveling"
}
