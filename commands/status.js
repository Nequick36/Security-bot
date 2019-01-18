const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let devRole = message.guild.roles.find(`name`, "GH Bot Developer")
  if(!message.member.roles.has(devRole.id)) return message.channel.send("**🛑 THIS IS A DEVELOPER ONLY COMMAND! 🛑**")
    // bot.user.setStatus('available')
    // bot.user.setPresence({
    //     game: {
    //         name: 'to use commands do !help',
    //         type: "WATCHING",
    //     }
    // })
  if(!args[1]) {
    try {
      bot.user.setStatus(args[0])
    } catch(e) {
      if(e) message.channel.send(e)
    }
  } else {
    bot.user.setPresence({
        game: {
            name: args.shift().join(" "),
            type: args[0],
        }
    })
  }
}

module.exports.help = {
  name: "status",
  aliases: ['setstatus'],
  description: "Changes the bot's status.",
  group:"Simple"
}