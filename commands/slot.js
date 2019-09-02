const Discord = require("discord.js")
const eco = require("discord-economy")

module.exports.run = async (bot, message, args) => {
  let bet = args[0]
  
  if(!bet) return message.reply('How much do you want to bet?')
  
    let slots = ["🍎", "🍌", "🍒", "🍓", "🍈"];
    let result1 = Math.floor((Math.random() * slots.length));
    let result2 = Math.floor((Math.random() * slots.length));
    let result3 = Math.floor((Math.random() * slots.length));
    let name = message.author.displayName;
    let aicon = message.author.displayAvatarURL;
  

    if (slots[result1] === slots[result2] && slots[result3]) {
      eco.FetchBalance(message.author.id).then(user => {
    if(user.balance < bet) 
    {
      return message.reply(`You don't have that much money!`)
    } else {
     let wEmbed = new Discord.RichEmbed()
            .setFooter("You Won!", aicon)
            .setTitle(':slot_machine:Slots:slot_machine:')
            .addField('Result:', slots[result1] + slots[result2] + slots[result3], true)
            .setColor("GREEN");
        message.channel.send(wEmbed);
      eco.AddToBalance(message.author.id, bet*25).then(user => {
        
      })
    }
  }) 
        
      
    } else {
        let embed = new Discord.RichEmbed()
        eco.FetchBalance(message.author.id).then(user => {
    if(user.balance < bet) 
    {
      return message.reply(`You don't have that much money!`)
    } else {
      let embed = new Discord.RichEmbed()
            .setFooter('You Lost!', aicon)
            .setTitle(':slot_machine:Slots:slot_machine:')
            .addField('Result', slots[result1] + slots[result2] + slots[result3], true)
            .setColor("RED");
      eco.SubstractFromBalance(message.author.id, bet).then(user => {
      })
        message.channel.send(embed);
    }
  })
            
    }
}

module.exports.help = {
  name: "slot",
  aliases: [],
  perm: "",
  role: "",
  group: "economy"
}
 