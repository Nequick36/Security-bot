const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  if(message.author.id !== '435406608479158273' && message.author.id !== '366234394479951873') return message.channel.send(`🛑 **ACCESS DENIED! THIS IS A DEVELOPER ONLY COMMAND. 🛑**`)
  let embed = new Discord.RichEmbed()
  let code = args.join(" ")
  if(!code) return message.channel.send('What code do you want to eval?')
  try {
    let output = eval(code)
    embed.setColor(0xff0000)
    embed.addField('Code', code)
    .addField('Output', output)
    message.channel.send(embed)
  } catch(e) {
    embed.addField('Error', `${e || 'No errors'}`)
  }
}

module.exports.help = {
  name: "eval",
  aliases: [],
  description: "Evals a code.",
  perm: "ADMINISTRATOR",
  role: "GH Bot Developer",
  group:"Developer"
}
