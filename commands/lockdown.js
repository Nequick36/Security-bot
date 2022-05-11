const Discord = require("discord.js")
const eco = require("discord-economy")

module.exports.run = async (bot, message, args) => {
  let developers = bot.devs
        let embed = new Discord.RichEmbed()

    .setColor("RED")
  .setAuthor('CzvVesti | Security', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .setThumbnail (message.author.displayAvatarURL)
  .addField("❌» Nemate dozvolu da koristite ovu komandu", "Ovu komandu mogu koristiti samo Developeri Bota") 
        
  if(!developers.includes(message.author.id)) return message.channel.send(embed)
  
          let embed9 = new Discord.RichEmbed()
    .setColor("GREEN")
  .setAuthor('CzvVesti | Security', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg')
  .setThumbnail (message.author.displayAvatarURL)
  .addField("🔐» Lockdown", "Started") 
    
  message.channel.send(embed9)
  
  let text1 = message.guild.channels.find(c => c.id === '911715308262273034')
  let text2 = message.guild.channels.find(c => c.id === '911998680675020800')
  let text3 = message.guild.channels.find(c => c.id === '911895566030626846')
  let text4 = message.guild.channels.find(c => c.id === '970428099713982514')
  
  let text5 = message.guild.channels.find(c => c.id === '970694317503041596')
  let text6 = message.guild.channels.find(c => c.id === '912276832219447326')
  let text7 = message.guild.channels.find(c => c.id === '970687454287904810')
  let text8 = message.guild.channels.find(c => c.id === '971495169683750922')
  let text9 = message.guild.channels.find(c => c.id === '912276695908757534')
  let text10 = message.guild.channels.find(c => c.id === '971504198506123296')
  let text11 = message.guild.channels.find(c => c.id === '971504432611213322')
  
  let text12 = message.guild.channels.find(c => c.id === '970423288423645275')
  let text13 = message.guild.channels.find(c => c.id === '970423653269397534')
  let text14 = message.guild.channels.find(c => c.id === '970423176091803679')
  let text15 = message.guild.channels.find(c => c.id === '970423242156290149')
  
  let voice1 = message.guild.channels.find(c => c.id === '911718680830808096')
  let voice2 = message.guild.channels.find(c => c.id === '971752919370203166')
  let voice3 = message.guild.channels.find(c => c.id === '972926696523186266')
  let voice4 = message.guild.channels.find(c => c.id === '912389497499566090')
  let voice5 = message.guild.channels.find(c => c.id === '971774655067213834')
  let voice6 = message.guild.channels.find(c => c.id === '911896636400222249')
  
text1.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {SEND_MESSAGES: false})
text2.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {SEND_MESSAGES: false})
text3.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {SEND_MESSAGES: false})
text4.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {SEND_MESSAGES: false})
text5.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {SEND_MESSAGES: false})
text6.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {SEND_MESSAGES: false})
text7.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {SEND_MESSAGES: false})
text8.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {SEND_MESSAGES: false})
text9.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {SEND_MESSAGES: false})
text10.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {SEND_MESSAGES: false})
text11.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {SEND_MESSAGES: false})
text12.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {SEND_MESSAGES: false})
text13.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {SEND_MESSAGES: false})
text14.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {SEND_MESSAGES: false})
text15.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {SEND_MESSAGES: false})

voice1.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {CONNECT: false})
voice2.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {CONNECT: false})
voice3.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {CONNECT: false})
voice4.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {CONNECT: false})
voice5.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {CONNECT: false})
voice6.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {CONNECT: false})
}

module.exports.help = {
  name: "lockdown",
  aliases: ["ld", "lock"],
  perm: "",
  role: "",
  group: "economy"
}
