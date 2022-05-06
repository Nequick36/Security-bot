const Discord = require("discord.js");
const eco = require("discord-economy");

module.exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
  
  eco.FetchBalance(message.author.id).then(l => {
    .setColor("#FF0000")
  .setAuthor('CzvVesti | Pomoć', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .tDescriptioes
                message.channel.send(`${message.author.username} Vi imate **${l.balance}**:money_with_wings: `);
            })

}

module.exports.help = {
  name: "balance",
  aliases: ['wallet', 'bal', 'Bal', 'Balance'],
  perm: "",
  role: "",
  group:"Economy"
}
