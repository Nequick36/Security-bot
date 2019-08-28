const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let memberUsername = message.author.username
  let ticketChannel = message.guild.channels.find(c => c.name === `ticket-${message.author.username}`)
  if(!args[0]) {
    message.channel.send(`Event help:
en!music new - Makes new event
en!music close - Deletes the event`)
  }
  if(args[0] === `new`) {
    let ticketChannel = message.guild.channels.find(r => r.name === `event-${message.author.id}`)
    if(ticketChannel) return message.channel.send(`vec imate event u toku !!`)
        message.guild.createChannel(`naruci muziku za event`)
        message.guild.createChannel(`Music Event`, 'voice').then(channel => {
      channel.setTopic(`Event Created: ${message.author.username}`)
      channel.send(`
**NOVI MUSIC EVENT**
Eve
`)
      channel.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {
VIEW_CHANNEL: true, 
SPEAK: false
})
channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Fail'), {
VIEW_CHANNEL: true,
SEND_MESSAGES: false,
READ_MESSAGE_HISTORY: true,
SPEAK: false
})
channel.overwritePermissions(message.author, {
VIEW_CHANNEL: true,
SEND_MESSAGES: true,
READ_MESSAGE_HISTORY: true,
SPEAK: true
})
channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Staff-Team'), {
VIEW_CHANNEL: true,
SEND_MESSAGES: true,
READ_MESSAGE_HISTORY: true,
SPEAK: true
})
channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Pristup'), {
VIEW_CHANNEL: true,
SEND_MESSAGES: true,
READ_MESSAGE_HISTORY: true,
SPEAK: true
})

    })
    message.guild.channels.forEach(channel => {
      if(channel.name.startsWith('ticket')) {
        if(channel.topic === `event created: ${message.author.id}`) {
          return message.channel.send(`You can only have one ticket!`)
        } else {
              message.guild.createChannel(`event`, 'text').then(channel => {
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
  name: "music",
  aliases: ["Music"],
  description: "Makes a ticket for help/application",
  perm: "Administrator",
  role: "*",
  group:"Owner"
}
