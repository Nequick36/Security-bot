const Discord = require("discord.js");
const eco = require("discord-economy");

module.exports.run = async (bot, message, args) => {
  eco.Daily(message.author.id).then(l => {
//l.updated tells you if the user already claimed his/her daily yes or no.
               if (l.updated) {

                 eco.FetchBalance(message.author.id).then(x => {
                   eco.AddToBalance(message.author.id, 250).then(l =>
                     message.reply(`**Uzeli ste svoju dnevnu platu od 250:money_with_wings: sada imate ${l.newbalance}:money_with_wings:** `));
                 })

               } else {
                 message.channel.send(`Sorry, you already claimed your daily coins!\nBut no worries, over ${l.timetowait} you can use daily again!`)
               }
           })
}

module.exports.help = {
  name: "daily",
  aliases: [],
  perm: "",
  role: "",
  group:"Economy"
}