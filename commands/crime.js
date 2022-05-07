const Discord = require("discord.js")
const eco = require('discord-economy')

module.exports.run = async (bot, message, args) => {
      let embed = new Discord.RichEmbed()

    .setColor("RED")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .setThumbnail (message.author.displayAvatarURL)
  .addField("👨‍🏭» Molimo Vas sačekajte", "30 minuta prije sljedeće pljačke")  
  
  if(bot.crimeCooldown.has(message.author.id)) return message.channel.send(embed)
      else {
    bot.crimeCooldown.set(message.author.id)
    setTimeout(function() {
      if(bot.crimeCooldown.has(message.author.id)) bot.crimeCooldown.delete(message.author)
    }, 1800000)
  }
    var output = await eco.Work(message.author.id, {
      failurerate: 90,
      money: Math.floor(Math.random() * 500),
      jobs: ['Opljačkali Trafiku',
             "Opljačkali Banku",
             "Opljačkali Benzinsku Pumpu",
             "Opljačkali Prodavnicu",
             "Ukrali telefon",
             "Ukrali torbicu"]
      
    })
    
      let embed2 = new Discord.RichEmbed()

    .setColor("RED")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .setThumbnail (message.author.displayAvatarURL)
  .addField("😢» Na žalost", "Uhvatila Vas je policija 🚔 i platili ste kaznu od 150 <:Bitcoin:971362942924783616>") 
        eco.SubstractFromBalance(message.author.id, 150).then(l => {})    

  .addField("💰» Trenutno", output.balance)
    if (output.earned == 0) return message.channel.send(embed2)

                     
                          let embed3 = new Discord.RichEmbed()

            .setColor("GREEN")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
 .addField("⚒» Uspješno ste", output.job)
 .addField("💳» Zaradili ste", output.earned + " <:Bitcoin:971362942924783616>") 
 .addField("💰» Trenutno", output.balance + " <:Bitcoin:971362942924783616>")
                                                          
                     message.channel.send(embed3)
  
}

module.exports.help = {
  name: "crime",
  aliases: ["Crime", "kradja", "Kradja", "Zlocin", "zlocin"],
  perm: "",
  role: "",
  group:"Economy"
}