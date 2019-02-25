const fs = require('fs')
const discord = require('discord.js')
const dl = require('discord-leveling')
let developers = ['366234394479951873', '435406608479158273']
exports.run = async (bot, message) => {
      let messageArray = message.content.split(" ")
    let cmd = messageArray[0]
    let args = messageArray.slice(1);
  let logChannel = message.guild.channels.find(c => c.name === '🔸》moderation-chat-logs')
  if(message.content.startsWith('!')) logChannel.send({embed:{description: `${message.author.tag} used command ${message.content} in channel ${message.channel.name}.`, color: 0xff0000}})
  if(message.mentions.roles >= 2) {
     message.delete() //what are you doing 
    message.reply("Don't mention roles more than once please")
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
  // fs.appendFile('events/chatlogs.txt', `[${message.createdAt}][${message.guild.name}][${message.channel.name}] ${message.author.username}: ${message.content}\n`, (err) => {
  //       if(err) console.log(err)
  //   })
  
  
  //xp system
  if(message.author.bot) return
  let randomXp = Math.floor(Math.random() * 10)
  let userID = message.author.id
  let Reset = 0
  dl.AddXp(userID, randomXp || 10)
 
  let profile = await dl.Fetch(userID)
  
  if(profile.xp >= 200) {
      dl.SetXp(userID, 1).then()//oh
      dl.AddLevel(userID, 1).then()
      message.channel.send(`${message.author} just leveled up to level ${profile.level + 1}!`)
  }
  
  //console in channel
  if(message.channel.id === '549703259057553438' && !message.author.bot) {
    if(!developers.includes(message.author.id)) return 
    function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
  
    try {
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }}

}