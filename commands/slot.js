const Discord = require("discord.js")
const eco = require("discord-economy")

module.exports.run = async (bot, message, args) => {
  let bet = args[0]
  eco.FetchBalance(message.author.id).then(user => {
    if(user.balance < bet) return message.reply(`You don't have that much money!`)
  })
  if(!bet) return message.reply('How much do you want to bet?')
  
    let slots = ["🍎", "🍌", "🍒", "🍓", "🍈"];
    let result1 = Math.floor((Math.random() * slots.length));
    let result2 = Math.floor((Math.random() * slots.length));
    let result3 = Math.floor((Math.random() * slots.length));
    let name = message.author.displayName;
    let aicon = message.author.displayAvatarURL;
  

    if (slots[result1] === slots[result2] && slots[result3]) {
        let wEmbed = new Discord.RichEmbed()
            .setFooter("You Won!", aicon)
            .setTitle(':slot_machine:Slots:slot_machine:')
            .addField('Result:', slots[result1] + slots[result2] + slots[result3], true)
            .setColor("RANDOM");
        message.channel.send(wEmbed);
      eco.AddToBalance(message.author.id, bet*5).then(user => {
        
      })
    } else {
        let embed = new Discord.RichEmbed()
            .setFooter('You Lost!', aicon)
            .setTitle(':slot_machine:Slots:slot_machine:')
            .addField('Result', slots[result1] + slots[result2] + slots[result3], true)
            .setColor("RANDOM");
      eco.SubstractFromBalance(message.author.id, bet).then(user => {
      })
        message.channel.send(embed);
    }
}

module.exports.help = {
  name: "slot",
  description:"Slot machine.",
  group: "economy"
}
 