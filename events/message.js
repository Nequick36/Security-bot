const fs = require('fs')
const discord = require('discord.js')
const dl = require('discord-leveling')
let moment = require('moment')
require("moment-duration-format");
exports.run = async (bot, message) => {
  let developers = bot.devs
  let messageArray = message.content.split(" ")
  let cmd = messageArray[0]
  let args = messageArray.slice(1);
  if(message.mentions.roles.size >= 2) {
     message.delete()  
    message.reply("Nemojte tagati vise od 2 rola!")
  }
  
  
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
  let date = message.createdTimestamp
  fs.appendFile('./chatlogs.txt', `[${moment(date).format('DD.MM.YYYY')}][${moment(date).format('hh:mm:ss')}][${message.channel.name}] ${message.member.username || message.author.username}#${message.author.tag.split('#').slice(1).join(" ")}: ${message.content}\n`, (err) => {
    if(err) console.log(err)
  })
  // fs.appendFile('events/chatlogs.txt', `[${message.createdAt}][${message.guild.name}][${message.channel.name}] ${message.author.username}: ${message.content}\n`, (err) => {
  //       if(err) console.log(err)
  //   })
  
  
  //xp system
  if(message.author.bot) return;
  let randomXp = Math.floor(Math.random() * 5)
  let userID = message.author.id
  let Reset = 0
  dl.AddXp(userID, randomXp || 5)
 
  let profile = await dl.Fetch(userID)
  
  if(profile.xp >= 350) {
      dl.SetXp(userID, 1).then()//oh
      dl.AddLevel(userID, 1).then()
      message.channel.send(`${message.author} se level-upo na level ${profile.level + 1}!`)
  }
  
  //console in channel
  if(message.channel.id === '590474521425739807' && !message.author.bot) {
    if(!developers.includes(message.author.id)) return
    if(message.content.startsWith('//')) return
    function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
  
    try {
      const code = message.content
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }}
  //afk
if(bot.afk.has(message.author.id)) {
  let options = bot.afk.get(message.author.id)
  if(options.justafk == true) {
    options.justafk = false
    bot.afk.set(message.author.id, options)
  } else {
  message.reply(`${message.author.tag} je dosao nazad!`)
  bot.afk.delete(message.author.id)
  if(message.member.nickname) {
    if(message.member.nickname.includes('[AFK] ')) {
      message.member.setNickname(message.member.nickname.replace('[AFK] ', ''))
    }
  }
  }
}
if(message.mentions.members) {
  message.mentions.members.forEach(member => {
    if(bot.afk.has(member.id)) {
      let options = bot.afk.get(member.id)
      message.channel.send({embed:{description:`${member.user.tag} is afk!\nReason: ${options.reason}`, color:0xff0000, title:message.author.username}})
    }
  })
}


}