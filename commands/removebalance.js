const Discord = require("discord.js")
const eco = require("discord-economy")

module.exports.run = async (bot, message, args) => {
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("** :x: VI NEMATE DOZVOLU DA KORISITE OVU KOMANDU :x: **")
  let amount = message.content.split(" ").slice(2).join(" ");
        if (!message.member.hasPermission("ADMINISTRATOR"))
        {
          return message.reply("** :x: VI NEMATE DOZVOLU DA KORISITE OVU KOMANDU! :x: **")
        }
       if (!amount) return message.reply("** :x: MORATE STAVITI KOLIKO ZELITE DA UKLONITE PARA KORISNIKU :x: **");
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
