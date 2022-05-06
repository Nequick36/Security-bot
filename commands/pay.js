const Discord = require("discord.js")
const eco = require("discord-economy")
module.exports.run = async (bot, message, args) => {
  //message.channel.send("This command is still a work in progress!")
  var user = message.mentions.users.first()
    var amount = args[1]
    
    if(isNaN(amount)) return 
    let embed = new Discord.RichEmbed()
.setColor("RED")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
 .addField(":x:» Pogreška", "Morate Dodati Iznos Novca Za Transfer")
 .addField(":CheckMark:» Korišćenje", ".pay @User#1991 100")
    message.channel.send(embed)
  
 if(message.author.id === user.id) return 
      let embed2 = new Discord.RichEmbed()
.setColor("RED")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
 .addField(":x:» Pogreška", "Ne Možete Sebi Poslati Novac Dodati Iznos Novca Za Transfer")
 .addField(":CheckMark:» Korišćenje", ".pay @User#1991 100")
    message.channel.send(embed2)
  message.channel.send("** :x: NE MOZETE SEBI POSLATI NOVAC :x: **")
  
    if (!user) return message.reply('** :x: NE MOZES SAM SEBI POSLATI NOVAC :x: **')
    if (!amount) return message.reply('** :x: VI NEMATE TOLIKO NOVCA :x: **')
  
 
    var output = await eco.FetchBalance(message.author.id)
    if (output.balance < amount) return message.reply('**:x: VI NEMATE TOLIKO NOVCA :x:**')
 
    var transfer = await eco.Transfer(message.author.id, user.id, amount)
    message.reply(`Uspjesno ste poslali novac!\nBalance od ${message.author.tag}: ${transfer.FromUser}\nBalance od ${user.tag}: ${transfer.ToUser}`);
}

module.exports.help = {
  name: "transfer",
  aliases: ["pay", "Pay"],
  perm: "",
  role: "",
  group:"SIMPLE"
}
