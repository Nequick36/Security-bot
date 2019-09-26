const Discord = require("discord.js")
const eco = require("discord-economy")
module.exports.run = async (bot, message, args) => {
  //message.channel.send("This command is still a work in progress!")
  var user = message.mentions.users.first()
    var amount = args[1]
    if(isNaN(amount)) return message.reply('** :x: STAVITE VAZECI BROJ :x: **')
 if(message.author.id === user.id) return message.channel.send("** :x: NE MOZETE SEBI POSLATI NOVAC :x: **")
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
