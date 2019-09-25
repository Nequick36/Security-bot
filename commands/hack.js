const discord = require("discord.js")
const superagent = require("superagent")

module.exports.run = async (bot, message, args) => {
//  let site1 = await superagent
 // .get(`https://api-to.get-a.life/bottoken`)
 // if(!site1.body) return message.channel.send("Oof i'm broke.")
   let site2 = await superagent
 .get(`https://api.ipify.org/?format=json`)
 if(!site2.body) return message.channel.send("Oof i'm broke.")
  let site3 = await superagent
 .get(`http://www.sethcardoza.com/api/rest/tools/random_password_generator/type:json`)
 if(!site3.body) return message.channel.send("Oof i'm broke.")
  let userToHack = message.mentions.members.first()
  if(!userToHack) return message.reply(`** :x: MORATE TAGATI USERA KOJEG ZELITE HAKIRATI :x: **`)
  let msg = await message.channel.send(`__Ulazenje__ u __database__ Korisnika`)
  setTimeout(function() {
    msg.edit(`Pristup dozvoljen!`)
      setTimeout(function() {
    msg.edit(`Ulazak ./database/users/${userToHack.id}`)
          setTimeout(function() {
    msg.edit(`Pristup odobren!`)
              setTimeout(function() {
    msg.edit(`**${userToHack.user.username} je __Hakovan!__**
**__Username__**: ${userToHack.user.username}
**__Email__**: ${userToHack.user.username}${Math.floor(Math.random() * 1000)}@gmail.com
**__Password__**: ${site3.body.password}
**__Id__**: ${userToHack.id}
**__Ip__**: ${site2.body.ip}
**__Token__**: Greska!: Ne mogu da uzmem token od korisnika`)
  }, 4000)
  }, 4000)
  }, 4000)
  }, 4000)


  
}

module.exports.help = {
  name: "hack",
  aliases: [],
  perm: "",
  role: "",
  group: "Simple"
}