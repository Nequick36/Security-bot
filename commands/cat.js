const discord = require('discord.js')
const superagent = require('superagent')
exports.run = async (bot, message, args, tools) => {
  let site = await superagent.get('http://aws.random.cat/meow')
  if(!site) return message.channel.send(`Oof im broke`)
  let CatImage = new discord.RichEmbed()
  .setTitle(`| :cat: | Cat | :cat: |`)
  
  .setTimestamp()
  .setColor(0xff0000)
  .setImage(site.body.file)

  message.channel.send(CatImage)
}
module.exports.help = {
name: "cat",
aliases: []

}