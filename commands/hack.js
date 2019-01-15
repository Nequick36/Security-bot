const discord = require("discord.js")
const superagent = require("superagent")

module.exports.run = async (bot, message, args) => {
 let { body } = await superagent
 .get(`https://api-to.get-a.life/bottoken`)
 if(!{body}) return message.channel.send("Oof i'm broke.")
  
}

module.exports.help = {
  name: "hack",
  description: "Hacks someone" 
}