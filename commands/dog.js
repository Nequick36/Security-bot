  const discord = require('discord.js')
const superagent = require('superagent')
exports.run = async (bot, message, args, tools) => {
  let site = await superagent.get('https://random.dog/woof.json')
  if(!site) return message.channel.send(`Oof im broke`)
  let DogImage = new discord.RichEmbed()
  .setTitle(`| :dog: | Dog | :dog: |`)
  .setTimestamp()
  .setColor(0xff0000)
  .setImage(site.body.url)
  message.channel.send(DogImage)
}
module.exports.help = {
name: "dog",
aliases: ["Dog"]
}