const discord = require("discord.js")
const superagent = require("superagent")

module.exports.run = async (bot, message, args) => {
 let { body } = await superagent
 .get(`https://api-to.get-a.life/meme`)
}

module.exports.help = {
  name: "meme",
  description: "produces memes" 
}