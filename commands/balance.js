const Discord = require("discord.js");
const eco = require("discord-economy");

module.exports.run = async (bot, message, args) => {
 
     eco.FetchBalance(message.author.id).then(l => {
  let embed = new Discord.RichEmbed()

    .setColor("#FF0000")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .setThumbnail (message.author.displayAvatarURL)
  .addField("👥» Korisnik: ", message.author.username)
  .addField("💰» Stanje na računu: ", l.balance)  
                message.channel.send(embed);
            })

}

module.exports.help = {
  name: "balance",
  aliases: ['wallet', 'bal', 'Bal', 'Balance'],
  perm: "",
  role: "",
  group:"Economy"
}
