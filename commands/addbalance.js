const Discord = require("discord.js")
const eco = require("discord-economy")

module.exports.run = async (bot, message, args) => {
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("🛑 **ACCESS DENIED! THIS IS A MOD/ADMIN ONLY COMMAND. 🛑**")
  let amount = message.content.split(" ").slice(2).join(" ");
        if (!message.member.hasPermission("ADMINISTRATOR"))
        {
          return message.reply("🛑**ACCESS DENIED! THIS IS A STAFF-ONLY COMMAND.🛑**")
        }
       if (!amount) return message.reply("Koliko zelite dodati novca?");
        var user = message.mentions.users.first() || message.guild.members.get(args[0])
         if (!user) return message.reply('Kome hocete da dodate novac?')


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
