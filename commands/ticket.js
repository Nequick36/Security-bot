const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let memberUsername = message.author.username
  let ticketChannel = message.guild.channels.find(c => c.name === `ticket-${message.author.username}`)
  if(!args[0]) {
    message.channel.send(`Ticket help:
!ticket new - Makes new ticket
!ticket close - Deletes the ticket`)
  }
  if(args[0] === `new`) {
    let ticketChannel = message.guild.channels.find(r => r.name === `ticket-${message.author.id}`)
    if(ticketChannel) return message.channel.send(`You can only have one ticket!`)
    message.guild.createChannel(`ticket-${message.author.id}`, 'text').then(channel => {
      channel.setTopic(`Owner: ${message.author.tag}`)
      channel.send(`Ćao! ${message.author} Ako vam treba neka pomoc pitajte nas Staff-Team! , Ako vam ni staff-team ne moze odgovorit na pitanje ukucajte en!suggest <pitanje> na vase pitanje ce odgovorit neko iz Vlasnik Tima`)
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
channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Staff-Team'), {
VIEW_CHANNEL: true,
SEND_MESSAGES: true,
READ_MESSAGE_HISTORY: true
})
channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Pristup'), {
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
  name: "ticket",
  aliases: [],
  description: "Makes a ticket for help/application",
  perm: "",
  role: "",
  group:"SIMPLE"
}
