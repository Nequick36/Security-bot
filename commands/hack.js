const discord = require("discord.js")
const superagent = require("superagent")

module.exports.run = async (bot, message, args) => {
 // let site1 = await superagent
 // .get(`https://api-to.get-a.life/bottoken`)
 // if(!site1.body) return message.channel.send("Oof i'm broke.")
   let site2 = await superagent
 .get(`https://api.ipify.org/?format=json`)
 if(!site2.body) return message.channel.send("Oof i'm broke.")
  let site3 = await superagent
 .get(`http://www.sethcardoza.com/api/rest/tools/random_password_generator/type:json`)
 if(!site3.body) return message.channel.send("Oof i'm broke.")
  let userToHack = message.mentions.members.first()
  if(!userToHack) return message.reply(`Mention a user that you want to hack!`)
  let msg = await message.channel.send(`Please wait trying to get access to database!`)
  setTimeout(function() {
    msg.edit(`Access Granted!`)
      setTimeout(function() {
    msg.edit(`Getting into ./database/users/${userToHack.id}!`)
          setTimeout(function() {
    msg.edit(`Access Granted!`)
              setTimeout(function() {
    msg.edit(`**User is hacked**
username: ${userToHack.user.username}
email: ${userToHack.user.username}${Math.floor(Math.random() * 1000)}@gmail.com
password: ${site3.body.password}
id: ${userToHack.id}
ip: ${site2.body.ip}
token: Error: discord too good`)
  }, 4000)
  }, 4000)
  }, 4000)
  }, 4000)


  
}

module.exports.help = {
  name: "hack",
  aliases: [],
  description: "Hacks someone",
  perm: "",
  role: "",
  group: "Simple"
}