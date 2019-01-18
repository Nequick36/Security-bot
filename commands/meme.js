const discord = require("discord.js")
const superagent = require("superagent")

module.exports.run = async (bot, message, args) => {
 let { body } = await superagent
 .get(`https://api-to.get-a.life/meme`)
 if(!{body}) return message.channel.send("Oof i'm broke. Try again!")
  let embed = new discord.RichEmbed()
  .setColor("BLUE")
  .setImage(body.url)
  message.channel.send(embed)
}

module.exports.help = {
  name: "meme",
  aliases: [],
  description: "produces memes" 
}