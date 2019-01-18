const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    // bot.user.setStatus('available')
    // bot.user.setPresence({
    //     game: {
    //         name: 'to use commands do !help',
    //         type: "WATCHING",
    //     }
    // })
  if(!args[0]) {
    try {
      bot.user.setStatus(args[0])
    }
    catch(e) {
      if(e) message.reply(`${e}`)
    }
  }
}

module.exports.help = {
  name: "status",
  aliases: ['setstatus'],
  description: "Changes the bot's status.",
  group:"Simple"
}