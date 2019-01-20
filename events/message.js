const fs = require('fs')
const discord = require('discord.js')
exports.run = async (bot, message) => {
  let logChannel = message.guild.channels.find(c => c.name === '🔸》moderation-chat-logs')
  if(message.content.startsWith('!')) logChannel.send({embed:{description: `${message.author.tag} used command ${message.content} in channel ${message.channel.name}.`, color: 0xff0000}})
  
  
  
  //message count
  let msgs = JSON.parse(fs.readFileSync('events/msgs.json', 'utf8'));
  let author = message.author
  if(!msgs[author.id]) msgs[author.id] = {}
  if(!msgs[author.id].username) msgs[author.id].username = author.username
  if(msgs[author.id].username !== author.username) msgs[author.id].username = author.username
  if(!msgs[author.id].count) msgs[author.id].count = 0
  msgs[author.id].count++
  fs.writeFile('events/msgs.json', JSON.stringify(msgs, null, 4), (err) => {
     if(err) console.error(err)
  })
  
  //chat logs
  // fs.appendFile('events/chatlogs.txt', `[${message.createdAt}][${message.guild.name}][${message.channel.name}] ${message.author.username}: ${message.content}\n`, (err) => {
  //       if(err) console.log(err)
  //   })
}