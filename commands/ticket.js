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
    message.guild.channels.forEach(channel => {
      if(channel.name.startsWith('ticket')) {
        if(channel.topic === `owner:${message.author.id}`) return message.channel.send(`You can only have one ticket!`)
        else {
              message.guild.createChannel(`ticket-${message.author.username}`, 'text').then(channel => {
        channel.setTopic(`owner:${message.author.id}`)
    channel.send(`Hello, ${message.author}. This is your ticket, you can use it for help or applying. Staff Members has access to this channel so don't abuse it. If you want to apply answer the questions(!questions)`)
          channel.overwritePermissions(message.guild.roles.find(r => r.name === '@everyone'), {
  VIEW_CHANNEL: false,
  SEND_MESSAGES: false,
  READ_MESSAGE_HISTORY: false
})
  channel.overwritePermissions(message.guild.roles.find(r => r.name === 'Bots'), {
  VIEW_CHANNEL: false,
  SEND_MESSAGES: false,
  READ_MESSAGE_HISTORY: false
})
  channel.overwritePermissions(message.author, {
  VIEW_CHANNEL: true,
  SEND_MESSAGES: true,
  READ_MESSAGE_HISTORY: true
})
  channel.overwritePermissions(message.guild.roles.find(r => r.name === 'GameHub Staff'), {
  VIEW_CHANNEL: true,
  SEND_MESSAGES: true,
  READ_MESSAGE_HISTORY: true
})
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



module.exports.help = {
  name: "ticket",
  aliases: [],
  description: "Makes a ticket for help/application",
  perm: "",
  role: "",
  group:"SIMPLE"
}
