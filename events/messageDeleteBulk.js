const discord = require("discord.js")

exports.run = async (bot, messages) => {
 let mChannel = bot.guilds.get('358634388461715456').channels.find(c => c.name === '🔸》moderation-chat-logs')
 mChannel.send({embed:{description: `**Bulk delete: ${messages.size} messages **`, color:0xff0000}})
}