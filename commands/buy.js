const Discord = require("discord.js")
const eco = require("discord-economy")

module.exports.run = async (bot, message, args) => {
     
       
  

  
  let item = message.content.split(" ").slice(1).join(" ")
if  (!item) return message.reply("You have not specified an item!");
eco.FetchBalance(message.author.id).then(User => {
  if(item === 'coal' || item === 'Coal') {
    let role = message.guild.roles.find(role => role.name === 'Coal')
    if(message.member.roles.has(role.id)) return message.channel.send("Vec ste kupili taj rank!")
    if(User.balance < 250) return message.channel.send(`Sorry but you don't have $250.`)
    eco.SubstractFromBalance(message.author.id, 250).then(u => {
      message.channel.send(`<@${message.author.id}> Uspjesno ste kupili Coal Rank`)
      message.member.addRole(role.id)
    })
  }
 else if(item === 'Iron' || item === 'iron') {
    let role = message.guild.roles.find(role => role.name === 'Iron')
    let currentRole = message.guild.roles.find(role => role.name === 'Iron')
    if(message.member.roles.has(currentRole.id)) return message.channel.send("Vec ste kupili taj rank!")
    let prevrole = message.guild.roles.find(role => role.name === 'Coal')
if(!message.member.roles.has(prevrole.id)) return message.channel.send(`Sorry but you need the bronze role in order to purchase this role.`)
    if(User.balance < 750) return message.channel.send(`Sorry but you don't have $750.`)
    eco.SubstractFromBalance(message.author.id, 750).then(u => {
      message.channel.send(`<@${message.author.id}> Uspjesno ste kupili Iron Rank`)
      message.member.addRole(role.id)
    })
  }
   else if(item === 'Vodka' || item === 'vodka') {
    if(User.balance < 5) return message.channel.send(`Sorry but you don't have $5.`)
    eco.SubstractFromBalance(message.author.id, 5).then(u => {
      message.channel.send(`<@${message.author.id}> Uspjesno ste kupili Vodku`)
    })
  }
     else if(item === 'Kafa' || item === 'Kafa') {
    if(User.balance < 2) return message.channel.send(`Sorry but you don't have $2.`)
    eco.SubstractFromBalance(message.author.id, 2).then(u => {
      message.channel.send(`<@${message.author.id}> Uspjesno ste kupili Kafu`)
    })
  }
       else if(item === 'Hljeb' || item === 'hljeb') {
    if(User.balance < 3) return message.channel.send(`Sorry but you don't have $2.`)
    eco.SubstractFromBalance(message.author.id, 3).then(u => {
      message.channel.send(`<@${message.author.id}> Uspjesno ste kupili Hljeb`)
    })
  }
       else if(item === 'Kolac' || item === 'kolac') {
    if(User.balance < 4) return message.channel.send(`Sorry but you don't have $4.`)
    eco.SubstractFromBalance(message.author.id, 4).then(u => {
      message.channel.send(`<@${message.author.id}> Uspjesno ste kupili Kolac`)
    })
  }
     else if(item === 'Piva' || item === 'piva') {
    if(User.balance < 3) return message.channel.send(`Sorry but you don't have $3.`)
    eco.SubstractFromBalance(message.author.id, 3).then(u => {
      message.channel.send(`<@${message.author.id}> Uspjesno ste kupili Pivu`)
    })
  }
 else if(item === 'gold' || item === 'Gold') {
    let role = message.guild.roles.find(role => role.name === 'Gold')
    let currentRole = message.guild.roles.find(role => role.name === 'Gold')
    if(message.member.roles.has(currentRole.id)) return message.channel.send("Vec ste kupili taj rank!")
    let prevrole = message.guild.roles.find(role => role.name === 'Iron')
if(!message.member.roles.has(prevrole.id)) return message.channel.send(`Sorry but you need the gold role in order to purchase this role.`)
    if(User.balance < 1000) return message.channel.send(`Sorry but you don't have $1000.`)
    eco.SubstractFromBalance(message.author.id, 1000).then(u => {
      message.channel.send(`<@${message.author.id}> Uspjesno ste kupili Gold Rank`)
      message.member.addRole(role.id)
    })
  }

   else if(item === 'Redstone' || item === 'redstone') {
    let role = message.guild.roles.find(role => role.name === 'Redstone')
    let currentRole = message.guild.roles.find(role => role.name === 'Redstone')
    if(message.member.roles.has(currentRole.id)) return message.channel.send("Vec ste kupili taj rank!")
    let prevrole = message.guild.roles.find(role => role.name === 'Gold')
if(!message.member.roles.has(prevrole.id)) return message.channel.send(`Sorry but you need the Diamond role in order to purchase this role.`)
    if(User.balance < 1500) return message.channel.send(`Sorry but you don't have $1500.`)
    eco.SubstractFromBalance(message.author.id, 1500).then(u => {
      message.channel.send(`<@${message.author.id}> Uspjesno ste kupili Redstone Rank`)
      message.member.addRole(role.id)
    })
}
   else if(item === 'lapis' || item === 'Lapis') {
    let role = message.guild.roles.find(role => role.name === 'Lapis')
    let currentRole = message.guild.roles.find(role => role.name === 'Lapis')
    if(message.member.roles.has(currentRole.id)) return message.channel.send("Vec ste kupili taj rank!")
    let prevrole = message.guild.roles.find(role => role.name === 'Redstone')
if(!message.member.roles.has(prevrole.id)) return message.channel.send(`Sorry but you need the gold role in order to purchase this role.`)
    if(User.balance < 2500) return message.channel.send(`Sorry but you don't have $2500.`)
    eco.SubstractFromBalance(message.author.id, 2500).then(u => {
      message.channel.send(`<@${message.author.id}> Uspjesno ste kupili Lapis Rank`)
      message.member.addRole(role.id)
    })
  }
   else if(item === 'Diamond' || item === 'diamond') {
    let role = message.guild.roles.find(role => role.name === 'Diamond')
    let currentRole = message.guild.roles.find(role => role.name === 'Diamond')
    if(message.member.roles.has(currentRole.id)) return message.channel.send("Vec ste kupili taj rank!")
    let prevrole = message.guild.roles.find(role => role.name === 'Lapis')
if(!message.member.roles.has(prevrole.id)) return message.channel.send(`Sorry but you need the gold role in order to purchase this role.`)
    if(User.balance < 5000) return message.channel.send(`Sorry but you don't have $5000.`)
    eco.SubstractFromBalance(message.author.id, 5000).then(u => {
      message.channel.send(`<@${message.author.id}> Uspjesno ste kupili Diamond Rank`)
      message.member.addRole(role.id)
    })
  }
   else if(item === 'Emerald' || item === 'emerald') {
    let role = message.guild.roles.find(role => role.name === 'Emerald')
    let currentRole = message.guild.roles.find(role => role.name === 'Emerald')
    if(message.member.roles.has(currentRole.id)) return message.channel.send("Vec ste kupili taj rank!")
    let prevrole = message.guild.roles.find(role => role.name === 'Diamond')
if(!message.member.roles.has(prevrole.id)) return message.channel.send(`Sorry but you need the gold role in order to purchase this role.`)
    if(User.balance < 7500) return message.channel.send(`Sorry but you don't have $7500.`)
    eco.SubstractFromBalance(message.author.id, 7500).then(u => {
      message.channel.send(`<@${message.author.id}> Uspjesno ste kupili Emerald Rank`)
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