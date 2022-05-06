const Discord = require("discord.js")
const eco = require("discord-economy")

module.exports.run = async (bot, message, args) => {
  let amount = message.content.split(" ").slice(2).join(" ");
  
  let embed = new Discord.RichEmbed()
.setColor("#FF0000")
  .setAuthor('CzvVesti | Pomoć', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
   .addField(":x:» Pogreška", "Morate Tagovati Korisnika kojem zelite dodati Novac")
 .addField("✅» Korišćenje", ".addbalance @User#1991 100")
       if (!amount) return message.channel.send(embed)

        var user = message.mentions.users.first() || message.guild.members.get(args[0])
          let embed2 = new Discord.RichEmbed()
          .setColor("#FF0000")
  .setAuthor('CzvVesti | Pomoć', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
          .addField(":x:» Pogreška", "Morate Dodati Iznos Novca")
 .addField("✅» Korišćenje", ".addbalance @User#1991 100")

          
         if (!user) return message.channel.send(embed2)


        eco.FetchBalance(user.id).then(x => {
                   eco.AddToBalance(user.id, amount).then(l =>
                     message.reply(`You have successfuly added ${amount} coins to ${user.tag}'s account.`));
                 })
}

module.exports.help = {
  name: "addbalance",
  aliases: ["addbal", "addmoney"],
  perm: "",
  role: "",
  group: "economy"
}
