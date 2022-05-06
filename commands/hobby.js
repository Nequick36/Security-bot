const Discord = require("discord.js")
const eco = require("discord-economy")

module.exports.run = async (bot, message, args) => {
  
        if (message.channel.id === "660410911390957568"){
  } else {
    message.delete();
    message.author.send(`**__POGREŠKA__ :  __${message.channel.name} nije kanal za ekonomiu. Kanal za ekonomiju je__ <#660410911390957568> **`);
    return;
  }
        

  
  if(bot.hobbyCooldown.has(message.author.id)) return message.channel.send(`                **__ :moneybag:  Hobby  :moneybag: __**
<@${message.author.id}> **__Sacekajte 1 sat prije sljedeceg posla!__**
`)
  else {
    bot.hobbyCooldown.set(message.author.id)
    setTimeout(function() {
      if(bot.hobbyCooldown.has(message.author.id)) bot.hobbyCooldown.delete(message.author)
    }, 3600000)
  }
  
    var output = await eco.Work(message.author.id, {
      failurerate: 30,
      money: Math.floor(Math.random() * 100),
      jobs: ['Uradili ste kucicu za ptice',
             'Napravili ste kamp kucicu za migrante',
             'Nasli ste stari mis i tastaturu, prodali je',
             'Nasli ste staru igricu i prodali je',
             'Usvojili ste psa, nahranili ste ga, prodali ste ga']
    })
    
     //   if (output.earned == 0) return message.reply('**__Niste dobro odradili svoj posao i niste dobili pare__**')

     
    message.channel.send(new Discord.RichEmbed()
             .setTitle("**__Hobby__**")
             .setDescription(`** ${output.job} i dobili:**  \`${output.earned}\`:money_with_wings: \n **I sada imate:**  \`${output.balance}\`:money_with_wings:`)
             .setFooter(`${message.author.tag}`)
             .setTimestamp()
             .setColor("BLUE") 

              )
}

module.exports.help = {
  name: "hobby",
  aliases: ["Hobby"],
  description: "",
  perm: "",
  role: "",
  group:"Economy"
}