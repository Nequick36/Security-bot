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
    }, 30000)
  }
    var output = await eco.Work(message.author.id, {
      failurerate: 30,
      money: Math.floor(Math.random() * 100),
      hobbys: ['Napravili ste kućicu za ptice',
             'Napravili ste kamp za migrante',
             'Našli ste stari miš i prodali ga',
             'Nasli ste staru igricu i prodali je',
             'Nasli ste stare CD diskove i prodali je',
             'Usvojili ste psa, nahranili ste ga, prodali ste ga']
      
    })
      let embed2 = new Discord.RichEmbed()

    .setColor("RED")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .setThumbnail (message.author.displayAvatarURL)
  .addField("😢» Na žalost", "Poslodavac nije zadovoljan kako ste uradili posao i niste dobili Novac") 
  .addField("💰» Trenutno", output.balance)
      
    if (output.earned == 0) return message.channel.send(embed2)
  
                     
                          let embed3 = new Discord.RichEmbed()

            .setColor("GREEN")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
 .addField("⚒» Radili ste kao", output.hobbys)
 .addField("💳» Zaradili ste", output.earned + " <:Bitcoin:971362942924783616>") 
 .addField("💰» Trenutno", output.balance + " <:Bitcoin:971362942924783616>")
                                                          
                     message.channel.send(embed3)

}

module.exports.help = {
  name: "hobby",
  aliases: ["Hobby","hobi", "Hobi"],
  perm: "",
  role: "",
  group:"Economy"
}
