const discord = require("discord.js")
const superagent = require("superagent")

module.exports.run = async (bot, message, args) => {
 let { body } = await superagent
 .get(`https://api-to.get-a.life/bottoken`)
 if(!{body}) return message.channel.send("Oof i'm broke.")
  let userToHack = message.mentions.members.first()
  if(!userToHack) return message.reply(`Mentions a user that you want to hack!`)
  let msg = await message.channel.send(`Please wait trying to get access to database!`)
  setTimeout(function() {
    msg.edit(`Access Granted!`)
      setTimeout(function() {
    msg.edit(`Getting into ./database/users/${userToHack.id}!`)
  }, 4000)
  }, 4000)


  setTimeout(function() {
    msg.edit(`**User is hacked**
Username: ${userToHack.user.username}
id: ${userToHack.id}
token: ${body.token}`)
  }, 4000)
  
}

module.exports.help = {
  name: "hack",
  description: "Hacks someone" 
}