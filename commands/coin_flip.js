const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  var chance = Math.floor(Math.random() * 2);
         if (chance == 0){
             message.reply("Vas coin je pao na glavu");
         }
         else
         {
             message.reply("Vas coin je pao na pismo");
     }

}

module.exports.help = {
  name: "flip",
  aliases: [],
  perm: "",
  role: "",
  group:"Simple"
}
