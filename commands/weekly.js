const Discord = require("discord.js");
const eco = require("discord-economy");

module.exports.run = async (bot, message, args) => {
  eco.Weekly(message.author.id).then(w => {
               if (w.updated) {

                 eco.FetchBalance(message.author.id).then(x => {
                   eco.AddToBalance(5000).then(d => {
let embed = new Discord.RichEmbed()
.setColor("#00FF0C")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .addField("🎁» Dnevna Nagrada", "Čestitamo uzeli ste sedmičnu nagradu od 5000$")
  .addField("💰» Trenutno Stanje Računa", d.newbalance)
                   
message.channel.send(embed);
                 })})

               } else {
                 let embed2 = new Discord.RichEmbed()
.setColor("#FF0000")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .addField("🎁» Sedmična Nagrada", "Već ste uzali svoju sedmičnu nagradu")
  .addField("⌚» Preostalo Vremena", "Preostalo Vam je još " + w.timetowait + " do vaše semične nagrade")
                 message.channel.send(embed2)
               }
           })
}

module.exports.help = {
  name: "weekly",
  aliases: ["sedmična"],
  perm: "",
  role: "",
  group:"Economy"
}