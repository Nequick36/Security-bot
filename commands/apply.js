const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let memberUsername = message.author.username
  let ticketChannel = message.guild.channels.find(c => c.name === `apply-${message.author.username}`)
  if(!args[0]) {
    message.channel.send(`Apply help:
!apply new - Makes new ticket`)
  }
  if(args[0] === `new`) {
    let ticketChannel = message.guild.channels.find(r => r.name === `apply-${message.author.id}`)
    if(ticketChannel) return message.channel.send(`You can only have one apply!`)
    message.guild.createChannel(`apply-${message.author.id}`, 'text').then(channel => {
      channel.setTopic(`Apply: ${message.author.tag}`)
      channel.send(`
${message.author.tag}
       **Staff Apply**

1: Da li se spreman za Staff Apply? Sto bolje odgovoris na ova pitanja imas vece sanse za ulazak u Staff Team! Sretno!
2: Kako se zoves u real life?
3: Koje si godiste?
4: Kolko imas godina?
5: Koliko dugo koristis Discord?
6: Koliko znas o Discordu!(1-10)
7: Koliko znas o Botovima! (1-10)
8: Navedi nam minimum 6 Discord botova? (Sto vise to bolje)
9: Navedi sto vise botova koji pomazu u administraciji servera!
10: Koliko mozes da budes aktivan?
11: Da li si nekada bio/la staff na nekom srv i koji su to serveri? (koliko membera)
12: Zasto bi zelio bas da budes dio Staff-Teama na ExtremeCommunity Discord serveru?
13: Ocijeni nas Discord server!(1-10)
14: Sta bi promjenio na nasem Discord serveru?
15: Sta ti se najvise i najmanje svidja na nasem Discord serveru?
16: Srecno!
`)
      channel.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {
VIEW_CHANNEL: false,
SEND_MESSAGES: false,
READ_MESSAGE_HISTORY: false
        
        
})
channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Botovi'), {
VIEW_CHANNEL: true,
SEND_MESSAGES: true,
READ_MESSAGE_HISTORY: true
})
channel.overwritePermissions(message.author, {
VIEW_CHANNEL: true,
SEND_MESSAGES: true,
READ_MESSAGE_HISTORY: true
})

    })
    message.guild.channels.forEach(channel => {
      if(channel.name.startsWith('ticket')) {
        if(channel.topic === `owner:${message.author.id}`) {
          return message.channel.send(`You can only have one ticket!`)
        } else {
              message.guild.createChannel(`ticket-${message.author.username}`, 'text').then(channel => {
        channel.setTopic(`owner:${message.author.id}`)
    channel.send(`Ćao! ${message.author} Ako vam treba neka pomoc pitajte nas Staff-Team!`)

})
    ticketChannel = message.guild.channels.find(c => c.name === `ticket-${message.author.username}`)
        }
      }
    })
      }
  else if(args[0] === `close`) {
    if(message.channel.name.startsWith(`ticket-`)) {
      message.channel.delete()
    } else {
      message.reply("This channel isn't a ticket!")
    }
  }
}
//we should make the help site look more sleek by using vue or soemthing


module.exports.help = {
  name: "apply",
  aliases: ["Apply"],
  perm: "",
  role: "",
  group:"SIMPLE"
}
