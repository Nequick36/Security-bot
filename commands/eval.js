const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  if(message.author.id !== '36623439447995187') return message.channel.send(`🛑 **ACCESS DENIED! THIS IS A DEVELOPER ONLY COMMAND. 🛑**`)
  let embed = new Discord.RichEmbed()
  let code = args.join(" ")
  if(!code) return message.channel.send('What code do you want to eval?')
  try {
    let output = eval(code)
    if(message.content.includes('[nolog]')) {
      
    } else {
    embed.setColor(0xff0000)
    embed.addField('Code', code)
    embed.addField('Output', JSON.parse(output))
    message.channel.send(embed)
    }
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
