const Discord = require("discord.js")
const eco = require("discord-economy")

module.exports.run = async (bot, message, args) => {
     
         let item = message.content.split(" ").slice(1).join(" ")
if  (!item) return message.reply("You have not specified an item!");
eco.FetchBalance(message.author.id).then(User => {
  if(item === 'Bronze' || item === 'bronze') {
    let role = message.guild.roles.find(role => role.name === 'Bronze')
    if(message.member.roles.has(role.id)) return message.channel.send("You have already purchased the bronze role!")
    if(User.balance < 500) return message.channel.send(`Sorry but you dont have $500.`)
    eco.SubstractFromBalance(message.author.id, 500).then(u => {
      message.channel.send(`<@${message.author.id}> bought Bronze role!`)
      message.member.addRole(role.id)
    })
  }
 else if(item === 'gold' || item === 'Gold') {
    let role = message.guild.roles.find(role => role.name === 'Gold')
    let currentRole = message.guild.roles.find(role => role.name === 'Gold')
    if(message.member.roles.has(currentRole.id)) return message.channel.send("You have already purchased the gold role!")
    let prevrole = message.guild.roles.find(role => role.name === 'Bronze')
if(!message.member.roles.has(prevrole.id)) return message.channel.send(`Sorry but you need the bronze role in order to purchase this role.`)
    if(User.balance < 1500) return message.channel.send(`Sorry but you dont have $1500.`)
    eco.SubstractFromBalance(message.author.id, 1500).then(u => {
      message.channel.send(`<@${message.author.id}> bought Gold role!`)
      message.member.addRole(role.id)
    })
  }

 else if(item === 'diamond' || item === 'Diamond') {
    let role = message.guild.roles.find(role => role.name === 'Diamond')
    let currentRole = message.guild.roles.find(role => role.name === 'Diamond')
    if(message.member.roles.has(currentRole.id)) return message.channel.send("You have already purchased the diamond role!")
    let prevrole = message.guild.roles.find(role => role.name === 'Gold')
if(!message.member.roles.has(prevrole.id)) return message.channel.send(`Sorry but you need the gold role in order to purchase this role.`)
    if(User.balance < 3000) return message.channel.send(`Sorry but you dont have $3000.`)
    eco.SubstractFromBalance(message.author.id, 3000).then(u => {
      message.channel.send(`<@${message.author.id}> bought Diamond role!`)
      message.member.addRole(role.id)
    })
  }
   else if(item === 'platinum' || item === 'Platinum') {
    let role = message.guild.roles.find(role => role.name === 'Platinum')
    let currentRole = message.guild.roles.find(role => role.name === 'Platinum')
    if(message.member.roles.has(currentRole.id)) return message.channel.send("You have already purchased the platinum role!")
    let prevrole = message.guild.roles.find(role => role.name === 'Diamond')
if(!message.member.roles.has(prevrole.id)) return message.channel.send(`Sorry but you need the Diamond role in order to purchase this role.`)
    if(User.balance < 10000) return message.channel.send(`Sorry but you dont have $10000.`)
    eco.SubstractFromBalance(message.author.id, 10000).then(u => {
      message.channel.send(`<@${message.author.id}> bought Platinum role!`)
      message.member.addRole(role.id)
    })
  }
})
       
}
module.exports.help = {
    name: "buy",
  aliases: [],
   description: "Buys an item from the shop.",
  perm: "",
  role: "",
  group:"Economy"
}