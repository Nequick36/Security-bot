const Discord = require("discord.js");
const eco = require("discord-economy");

module.exports.run = async (bot, message, args) => {
  
        if (message.channel.id === "660410911390957568"){
  } else {
    message.delete();
    message.author.send(`**__POGREŠKA__ :  __${message.channel.name} nije kanal za ekonomiu. Kanal za ekonomiju je__ <#660410911390957568> **`);
    return;
  }
  
  
  
  
    var flip = args[0] //Heads or Tails
    var amount = args[1] //Coins to gamble
 
    if (!flip || !['heads', 'trails'].includes(flip)) return message.reply('| :x: | **__Morate staviti heads ili trails__** | :x: |')
    if (!amount) return message.reply('** | :x: | __Stavite iznos novca koji hocete da ulozite__ | :x: |**')
 
    var output = await eco.FetchBalance(message.author.id)
    if (output.balance < amount) return message.reply('**| :x: | __Vi nemate toliki iznos novca__ | :x: |**')
 
    var gamble = await eco.Coinflip(message.author.id, flip, amount).catch(console.error)
    message.channel.send(new Discord.RichEmbed()
             .setTitle("**__Kazino__**")
             .setDescription(`**__Vi ste:__ ${gamble.output}! __Sada imate__: ${gamble.newbalance}:money_with_wings: **`)
             .setFooter(`${message.author.tag}`)
             .setTimestamp()
             .setColor("BLUE") 

              ) 
  }
module.exports.help = {
  name: "casino",
  aliases: ["Casino", "Kazino", "kazino"],
  perm: "",
  role: "",
  group: "Simple"
};
