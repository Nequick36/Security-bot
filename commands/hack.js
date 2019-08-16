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
    msg.edit(`Pristup dozvoljen!`)
      setTimeout(function() {
    msg.edit(`Ulazak./database/users/${userToHack.id}!`)
          setTimeout(function() {
    msg.edit(`Pristup odobren!`)
              setTimeout(function() {
    msg.edit(`**${message.author.username} je Hakovan!**
``Username``: ${userToHack.user.username}
``Email``: ${userToHack.user.username}${Math.floor(Math.random() * 1000)}@gmail.com
``Password``: ${site3.body.password}
``Id``: ${userToHack.id}
``Ip``: ${site2.body.ip}
``Token``: Error: discord too good`)
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