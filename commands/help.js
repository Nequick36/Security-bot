const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
        let embed = new Discord.RichEmbed()
  
  .addField("addbalance", "**__ ADDBALANCE __**")
          .addField("balance", "**__ BAL __**")
          .addField("buy", "**__ BUY __**")
          .addField("daily", "**__ DAILY __**")
          .addField("pay", "**__ PAY __**")
          .addField("removebalance", "**__ REMOVEBALANCE __**")
          .addField("shop", "**__ SHOP __**")
          .addField("slot", "**__ SLOTS __**")
          .addField("topbal", "**__ TOPBALANCE __**")
          .addField("work", "**__ WORK __**")
        message.channel.send(embed)
}
module.exports.help = {
name: "help",
aliases: ["pomoc"]
}