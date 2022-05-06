const Discord = require("discord.js");
const eco = require("discord-economy");

module.exports.run = async (bot, message, args) => {
  eco.Daily(message.author.id).then(d => {
//l.updated tells you if the user already claimed his/her daily yes or no.
               if (d.updated) {

                 eco.FetchBalance(message.author.id).then(x => {
                   eco.AddToBalance(250).then(d =>
message.reply(`**:tada: ___DNEVNA NAGRADA__ :tada:**
Uzeli ste svoju dnevnu nagradu od 250$ a sada imate ${d.newbalance}
`));
                 })

               } else {
                 message.channel.send(`:x: **Vec ste uzeli svoju dnevnu nagradu! da je uzmete ponovo trebate cekati jos:** ${d.timetowait} :x:`)
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