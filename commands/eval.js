const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
  let code = args.join(" ")
  if(!code) return message.channel.send('What code do you want to eval?')
  try {
    let output = eval(code)
  } catch(e) {
    if(e) message.reply(e)
  }
  
  embed.setColor(0xff0000)
  embed.addField('Code', code)
  embed.addField('Output', output)
  message.channel.send(embed)
}

module.exports.help = {
  name: "eval",
  aliases: [],
  description: "Evals a code.",
  perm: "ADMINISTRATOR",
  role: "GH Bot Developer",
  group:"Developer"
}
