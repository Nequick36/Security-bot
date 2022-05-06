const Discord = require("discord.js")
const eco = require("discord-economy")

module.exports.run = async (bot, message, args) => {
  const embed5 = new Discord.RichEmbed()
            .setColor("RED")
   .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
   .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
   .addField(":x:» Permisije", `Vi nemate dozvolu da koristite ovu komandu`)
   .setThumbnail(user.displayAvatarURL)
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(embed5);
  
  let amount = message.content.split(" ").slice(2).join(" ");
  const embed = new Discord.RichEmbed()
            .setColor("RED")
   .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
   .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
 .addField(":x:» Pogreška", "Morate Tagovati Korisnika Kojem Želite Ukloniti Novac")
 .addField("✅» Korišćenje", ".removebal @User#1991 100")
  .setThumbnail(user.displayAvatarURL)
  
       if (!amount) return message.channel.send("** :x: MORATE STAVITI KOLIKO ZELITE DA UKLONITE PARA KORISNIKU :x: **");
        var user = message.mentions.users.first() || message.guild.members.get(args[0])
         if (!user) return message.reply('** :x: MORATE TAGATI USERA :x: **')


        eco.FetchBalance(user.id).then(x => {
                   eco.SubstractFromBalance(user.id, amount).then(l =>
                     message.reply(`** Uspjesno ste uklonili korisniku ${user.tag} **, __${amount}__ **coinsa**`));
                 })
}

module.exports.help = {
  name: "removebalance",
  aliases: ["removebal"],
  perm: "",
  role: "*",
  group: "economy"
}
