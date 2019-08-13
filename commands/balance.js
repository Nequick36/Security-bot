const Discord = require("discord.js");
const eco = require("discord-economy");

module.exports.run = async (bot, message, args) => {
  eco.FetchBalance(message.author.id).then(l => {
                message.channel.send(`${message.author.username} Vi imate **${l.balance}**:money_with_wings: `);
            })

}

module.exports.help = {
  name: "balance",
  aliases: ['wallet', 'bal', 'Bal', 'Balance'],
  description: "Checks your balance.",
  perm: "",
  role: "",
  group:"Economy"
}
