const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let emoji = ['🇦', '🇧', '🇨', '', '']//:regional_indicator_a: :regional_indicator_b: :regional_indicator_c: 
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't make poll!")
  let options = args.join(" ").split(" | ")
  if(options.length >= 5) return message.reply("Too many options!")
  let optionsRAW = ''
  let embed = new Discord.RichEmbed()
  .setTitle("Poll")
  for(let i = 0; i<options.length; i++) {
    optionsRAW = `${optionsRAW}${emoji[i]} ${options[i]}\n`
  }

  let msg = message.channel.send(optionsRAW)
  
  for(let l = 0; l<options.length; l++) {
    msg.react(emoji[l])
  }
}

module.exports.help = {
  name: "vote",
  description: "Make a poll",
  group:"SIMPLE"
}
