const Discord = require("discord.js");
const eco = require("discord-economy");

module.exports.run = async (bot, message, args) => {
  
  
    var flip = args[0] //Heads or Tails
    var amount = args[1] //Coins to gamble
 
 let embed = new Discord.RichEmbed()
.setColor("RED")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
 .addField(":x:» Pogreška", "Morate odabrati 'glava' ili 'pismo' ")
 .addField("✅» Korišćenje", ".casino glava 100")
 if (!flip || !['glava', 'pismo'].includes(flip)) return message.channel.send(embed)
  
  let embed2 = new Discord.RichEmbed()
.setColor("RED")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
   .addField(":x:» Pogreška", "Morate staviti iznos novca u koji se želite kladiti")
 .addField("✅» Korišćenje", ".casino glava 100")
    if (!amount) return message.channel.send(embed2)
  
  
    var output = await eco.FetchBalance(message.author.id)
    let embed3 = new Discord.RichEmbed()
.setColor("RED")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
     .addField(":x:» Pogreška", "Vi Nemate toliko novca")
 .addField("✅» Korišćenje", ".casino glava 100")
    if (output.balance < amount) return message.channel.send(embed3)
  
  
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
