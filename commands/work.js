const Discord = require("discord.js")
const eco = require('discord-economy')

module.exports.run = async (bot, message, args) => {
      let embed = new Discord.RichEmbed()

    .setColor("RED")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .setThumbnail (message.author.displayAvatarURL)
  .addField("👨‍🏭» Molimo Vas sačekajte 5 minuta prije sljedećeg posla")  
  
  if(bot.workCooldown.has(message.author.id)) return message.channel.send(embed)
  else {
    bot.workCooldown.set(message.author.id)
    setTimeout(function() {
      if(bot.workCooldown.has(message.author.id)) bot.workCooldown.delete(message.author)
    }, 300000)
  }
    var output = await eco.Work(message.author.id, {
      failurerate: 5,
      money: Math.floor(Math.random() * 600),
    })
      let embed2 = new Discord.RichEmbed()

    .setColor("RED")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .setThumbnail (message.author.displayAvatarURL)
  .addField("💰» Na žalost", "Poslodavac nije zadovoljan kako ste uradili posao i niste dobili Novac") 
      
    if (output.earned == 0) return message.reply('Niste dobro uradili svoj posao i niste dobili **pare**!')
 
    message.channel.send(`${message.author.username}
Radili ste kao \` ${output.job} \` i zaradili ste :money_with_wings: ${output.earned}
Vi sada imate :money_with_wings: ${output.balance}`)
}

module.exports.help = {
  name: "work",
  aliases: ["Work","poso", "posao", "Poso", "Posao"],
  perm: "",
  role: "",
  group:"Economy"
}