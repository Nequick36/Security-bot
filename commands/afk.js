const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let user = message.member
  if(user.nickname) {
    if(user.nickname.startsWith('[AFK]')) {user.setNickname(user.nickname.replace('[AFK] ', ''))
                                           message.channel.send(`You are no longer AFK!`)}
    else {user.setNickname(`[AFK] ${user.nickname}`)
          message.channel.send(`You are now AFK!`)}
  } else {user.setNickname(`[AFK] ${user.username}`)
          message.channel.send(`You are now AFK!`)}
}

module.exports.help = {
  name: "afk",
  aliases: [],
  description: "Makes you AFK.",
  group:"Simple"
}