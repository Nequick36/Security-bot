const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

  if(!message.content.startsWith(".")) return;

    const page1 = new Discord.RichEmbed()
    .setTitle('Page 1')
    .setDescription('this is an example desc for page 1')

    const page2 = new Discord.RichEmbed()
    .setTitle('page 2')
    .setDescription('this is an example for page 2')

    const page3 = new Discord.RichEmbed()
    .setTitle('Page 3')
    .setDescription('this is an example for page 3')


    const pages = [
        page1,
        page2,
        page3
    ]

    const emoji = ["⏪", "⏩"]

    const timeout = '30000'  
  
}
module.exports.help = {
name: "help",
aliases: ["pomoc", "Help", "Pomoc", "pomoć", "Pomoć", "komande", "Komande", "komanda", "Komanda"]
}