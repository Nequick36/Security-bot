const Discord = require("discord.js")
const eco = require("discord-economy")
const config = ("./botconfig.json")
module.exports.run = async (bot, message, args) => {
  let amount = message.content.split(" ").slice(2).join(" ");
        if (!message.member.hasPermission("ADMINISTRATOR"{
 let embed = new Discord.RichEmbed()
.setColor("#FF0000")
  .setAuthor('CzvVesti | Pomoć', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
 .addField(":x:» Pogreška", "Morate Dodati Iznos Novca")
 .addField("✅» Korišćenje", config.prefix + "addbalance 100 @User#1991")
       if (!amount) return message.channel.send(embed)
  
        var user = message.mentions.users.first() || message.guild.members.get(args[0])
         if (!user) return message.reply('**__:x: KOJEM MEMBERU ZELITE DODATI COINSA :x:__*')


        eco.FetchBalance(user.id).then(x => {
                   eco.AddToBalance(user.id, amount).then(l =>
                     message.reply(`You have successfuly added ${amount} coins to ${user.tag}'s account.`));
                 })
}

module.exports.help = {
  name: "addbalance",
  aliases: ["addbal"],
  perm: "",
  role: "",
  group: "economy"
}
