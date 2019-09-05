  
const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args, config) => {


    let author = db.fetch(`money_${message.author.id}`)

    if (args[0] == 'coal') {
        if (!message.guild.roles.find("name", 'Coal')) return message.channel.send('I could not find a role by the name of `Coal`, check with the owners.')
        if (author < 250) return message.channel.send('You need atleast `250$` to purchase the moderator role.') // if the authors balance is less than 700$ return this, since the role costs 700$ in the store
        
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", 'Coal'))

        db.subtract(`money_${message.author.id}`, 500)
        message.channel.send(message.author.tag + ' You successfully bought the Moderator role for `700$`')
    } else if(args[0] == 'iron') {
        if (!message.guild.roles.find("name", 'Iron')) return message.channel.send('I could not find a role by the name of `Iron`, check with the owners.')
        if (author < 500) return message.channel.send('You need atleast `500$` to purchase the admin role.') // if the authors balance is less than 700$ return this, since the role costs 700$ in the store
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", 'Admin')) // get the role & add it

        db.subtract(`money_${message.author.id}`, 500)
        message.channel.send(message.author.tag + ' You successfully bought the Iron role for `500$`')
    }





}
module.exports.help = {
    name: "buy",
  aliases: ['Buy'],
  perm: "",
  role: "",
  group:"Economy"
}