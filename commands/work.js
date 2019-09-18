const Discord = require("discord.js")
const eco = require('discord-economy')

module.exports.run = async (bot, message, args) => {
  if(bot.workCooldown.has(message.author.id)) return message.channel.send(`
@${message.author.tag}
**Sacekajte 60 Sekundi prije sljedeceg posla!**
`)
  else {
    bot.workCooldown.set(message.author.id)
    setTimeout(function() {
      if(bot.workCooldown.has(message.author.id)) bot.workCooldown.delete(message.author)
    }, 60)
  }
    var output = await eco.Work(message.author.id, {
      failurerate: 10,
      money: Math.floor(Math.random() * 200),
    })
    //10% chance to fail and earn nothing. You earn between 1-500 coins. And you get one of those 3 random jobs.
    if (output.earned == 0) return message.reply('Niste dobro uradili svoj posao i niste dobili **pare**!')
 
    message.channel.send(`${message.author.username}
Radili ste kao \` ${output.job} \` i zaradili ste :money_with_wings: ${output.earned}
Vi sada imate :money_with_wings: ${output.balance}`)
}

module.exports.help = {
  name: "work",
  aliases: [],
  perm: "",
  role: "",
  group:"Economy"
}