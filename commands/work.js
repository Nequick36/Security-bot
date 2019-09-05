const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {


    
    if (args[0] == 'Ucitelj') {

        let amount = Math.floor(Math.random() * 100) + 1; // 1-500 random number. whatever you'd like

        let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, radili ste kao Ucitelj i zaradili ste ${amount} :D`)
        .setColor("RANDOM")
        
    
        message.channel.send(embed)
        db.add(`money_${message.author.id}`, amount)
    } else if(args[0] == 'constructor') {
        let amount = Math.floor(Math.random() * 100) + 1; // 1-500 random number. whatever you'd like

        let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, you worked as a constructor & got payed ${amount}$ for rebuilding the empire state building.`)
        .setColor("RANDOM")
        
    
        message.channel.send(embed)
        db.add(`money_${message.author.id}`, amount)
    } else if(args[0] == 'programer') {
        let amount = Math.floor(Math.random() * 135) + 1; // 1-500 random number. change to whatever you'd like

        let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, you worked as a programmer for epicgames, you fixed their game & earned ${amount}$!`)
        .setColor("RANDOM")
        
    
        message.channel.send(embed)
        db.add(`money_${message.author.id}`, amount)
    }

}
module.exports.help = {
  name: "work",
  aliases: [],
  perm: "",
  role: "",
  group:"Economy"
}