const Discord = require("discord.js");
const eco = require("discord-economy");

module.exports.run = async (bot, message, args) => {

  
      let user = message.mentions.users.first() || message.author;
    let userBalance = bot.eco.FetchBalance(user.id);
    const embed = new Discord.RichEmbed()
        .setTitle(`Balance`)
        .addField(`User`, `<@${userBalance.user}>`)
        .addField(`Balance`, `${userBalance.amount} 💸`)
        .setColor("RANDOM")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp();
    return message.channel.send(embed);

}

module.exports.help = {
  name: "balance",
  aliases: ['wallet', 'bal', 'Bal', 'Balance'],
  perm: "",
  role: "",
  group:""
}
