const Discord = require("discord.js");
const eco = require("discord-economy");

module.exports.run = async (bot, message, args) => {
  eco.Daily(message.author.id).then(l => {
//l.updated tells you if the user already claimed his/her daily yes or no.
               if (l.updated) {

                 eco.FetchBalance(message.author.id).then(x => {
                   eco.AddToBalance(250).then(l =>
message.reply(`**:tada: ___DNEVNA NAGRADA__ :tada:**
Uzeli ste svoju dnevnu nagradu od 250$ a sada imate ${l.newbalance}
`));
                 })

               } else {
                 message.channel.send(`:x: **Vec ste uzeli svoju dnevnu nagradu! da je uzmete ponovo trebate cekati jos:** ${l.timetowait} :x:`)
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