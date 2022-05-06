const Discord = require("discord.js");
const eco = require("discord-economy");

module.exports.run = async (bot, message, args) => {
 
   var user = message.mentions.users.first() || message.author;
  
     eco.FetchBalance(user.user.id).then(l => {
  let embed = new Discord.RichEmbed()
    
    .setColor("GREEN")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .setThumbnail (user.user.displayAvatarURL)
  .addField("👥» Korisnik: ", user.user.username)
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
