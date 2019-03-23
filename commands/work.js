const Discord = require("discord.js")
const eco = require('discord-economy')

module.exports.run = async (bot, message, args) => {
  if(bot.workCooldown.has(message.author.id)) return message.channel.send(`You need to wait 5 minutes!`)
  else {
    bot.workCooldown.set(message.author.id)
    setTimeout(function() {
      if(bot.workCooldown.has(message.author.id)) bot.workCooldown.delete(message.author)
    }, 300000)
  }
    var output = await eco.Work(message.author.id, {
      failurerate: 10,
      money: Math.floor(Math.random() * 500),
    })
    //10% chance to fail and earn nothing. You earn between 1-500 coins. And you get one of those 3 random jobs.
    if (output.earned == 0) return message.reply('Aww, you did not do your job well so you earned nothing!')
 
    message.channel.send(`${message.author.username}
You worked as a \` ${output.job} \` and earned :money_with_wings: ${output.earned}
You now own :money_with_wings: ${output.balance}`)
}

module.exports.help = {
  name: "work",
  aliases: [],
  description: "Allows you to work a job",
  perm: "",
  role: "",
  group:"Economy"
}