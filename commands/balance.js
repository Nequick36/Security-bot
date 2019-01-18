const Discord = require("discord.js");
const eco = require("discord-economy");

module.exports.run = async (bot, message, args) => {
  eco.FetchBalance(message.author.id).then(l => {
                message.channel.send(`Hey ${message.author.username}! You own ${l.balance} coins.`);
            })

}

module.exports.help = {
  name: "balance",
  aliases: [],
  description: "Checks your balance.",
  group:"Economy"
}
