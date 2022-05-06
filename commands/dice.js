const Discord = require("discord.js");
const eco = require("discord-economy");

module.exports.run = async (bot, message, args) => {
  
        if (message.channel.id === "660410911390957568"){
  } else {
    message.delete();
    message.author.send(`**__POGREŠKA__ :  __${message.channel.name} nije kanal za ekonomiu. Kanal za ekonomiju je__ <#660410911390957568> **`);
    return;
  }
  
  
    var roll = args[0]
    var amount = args[1]
 
    if (!roll || ![1, 2, 3, 4, 5, 6].includes(parseInt(roll))) return message.reply('| :x: | **__Navedite jedan broj od 1 do 6__** | :x: |')
    if (!amount) return message.reply('| :x: | **__Morate staviti sumu novaca koju zelite uloziti u roll__** | :x: |')
 
    var output = eco.FetchBalance(message.author.id)
    if (output.balance < amount) return message.reply('| :x: | **__Vi nemate toliki iznos novca__** | :x: |')
 
    var gamble = await eco.Dice(message.author.id, roll, amount).catch(console.error)
    message.reply({embed:{description: `**__Kocka je stala na:__  ${gamble.dice} __I vi ste:__  ${gamble.output} __Sada imate:__  ${gamble.newbalance}:money_with_wings: **`, color:0xff0000}})
 
  }

module.exports.help = {
  name: "dice",
  aliases: ["Dice", "Roll", "roll", "betroll", "Betroll", "bet"],
  description: "Roll.",
  perm: "",
  role: "",
  group:"Economy"
}