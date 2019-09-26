const Discord = require("discord.js")
const eco = require("discord-economy")

module.exports.run = async (bot, message, args) => {
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("**__:x: VI NEMATE DOZVOLU DA KORISITE OVU KOMANDU  :x:__**")
  let amount = message.content.split(" ").slice(2).join(" ");
        if (!message.member.hasPermission("ADMINISTRATOR"))
        {
          return message.reply("**__:x: VI NEMATE DOZVOLU DA KORISITE OVU KOMANDU  :x:__*")
        }
       if (!amount) return message.reply("**__:x: KOLIKO ZELITE DODATI COINSA  :x:__*");
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
