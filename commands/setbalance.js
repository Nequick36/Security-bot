const Discord = require("discord.js")
const eco = require("discord-economy")

module.exports.run = async (bot, message, args) => {
  let amount = message.content.split(" ").slice(2).join(" ");
        if (!message.member.hasPermission("ADMINISTRATOR"))
        {
          return message.reply("🛑**ACCESS DENIED! THIS IS A STAFF-ONLY COMMAND.🛑**")
        }
       if (!amount) return message.reply("You have not specified an amount!");
        var user = message.mentions.users.first() || message.guild.members.find(args)
         if (!user) return message.reply('cannot find user!')


        eco.FetchBalance(user.id).then(x => {
                   eco.AddToBalance(user.id, amount).then(l =>
                     message.reply(`You have successfuly added ${amount} coins to ${user.tag} account.`));
                 })
}

module.exports.help = {
  name: "setbalance",
  description:"It will set a users balance.",
  group: "economy"
}
