const Discord = require("discord.js");
const eco = require("discord-economy");
const dl = require('discord-leveling')

module.exports.run = async (bot, message, args) => {

    var user = message.mentions.users.first() || bot.fetchUser(args[0])
    if (!user) return message.reply('Please, Specify a user I have to delete in my database!')
 
    if (!message.member.hasPermission('ADMINISTRATOR') && !message.member.roles.has(message.guild.roles.find(r => r.name === 'GH Bot Developer').id)) return message.reply('You need to be admin to execute this command!')
 
    var output = await dl.Delete(user.id)
    if (output.deleted == true) return message.reply('Succesfully deleted the user out of the database!')
 
    message.reply('Error: Could not find the user in database.')

}

module.exports.help = {
  name: "xpdelete",
  aliases: ['lvldelete', 'leveldelete'],
  perm: "",
  role: "",
  group:"Leveling"
}
