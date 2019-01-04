const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let emoji = ['', '🇦', '🇧', '🇨', '', '']//:regional_indicator_a: :regional_indicator_b: :regional_indicator_c: 
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't make poll!")
  let options = args.join(" ").split(" | ")
  if(options.length >= 6) return message.reply("Too many options!")
  let optionsRAW = ''
  let embed = new Discord.RichEmbed()
  .setTitle(options[0])
  .setColor(0xff0000)
  for(let i = 1; i<options.length; i++) {
    optionsRAW = `${optionsRAW}${emoji[i]} ${options[i]}\n`
  }
  embed.setDescription(optionsRAW)
  let msg = await message.channel.send(embed)
  
  for(let l = 1; l<options.length; l++) {
    await msg.react(emoji[l])
  }
}

module.exports.help = {
  name: "vote",
  description: "Make a poll",
  group:"SIMPLE"
}
