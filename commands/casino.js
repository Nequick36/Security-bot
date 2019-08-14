const Discord = require("discord.js")
const eco = require('discord-economy')
exports.run = async (bot, message, args) => {
    var flip = args[0] //Heads or Tails
    var amount = args[1] //Coins to gamble
 
    if (!flip || !['heads', 'tails'].includes(flip)) return message.reply(`| :x: | Izaberite heads ili tails! | :x: |`)
    if (!amount) return message.reply(' | :x: | U koliko para hocete da se kladite! | :x: |')
 
    var output = await eco.FetchBalance(`${message.guild.id}_${message.author.id}`)
    if (output.balance < amount) return message.reply('| :x: | Nemas dovoljno para! | :x: |')
  
  //10% chance to fail and earn nothing. You earn between 1-500 coins. And you get one of those 3 random jobs.
    if (output.earned == 0) return message.reply('| :( | vise srece drugi put! | :( |')
 
    var gamble = await eco.Coinflip(`${message.guild.id}_${message.author.id}`, flip, amount).catch(console.error)
    message.channel.send({embed:{description:`Ti si ${gamble.output}! Tvoje pare: ${gamble.newbalance} | :moneybag: |`, color:0xff0000}})
       }
module.exports.help = {
name: "casino",
aliases: []
}