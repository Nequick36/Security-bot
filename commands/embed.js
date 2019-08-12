const discord = require('discord.js')

exports.run = async (bot, message, args) => {
 if(!bot.devs.includes(message.author.id)) return message.channel.send(`**:x: Nemas dozvolu za ovu komandu :x:**`)
    message.delete()

    let options = args.join(" ").split(" || ")
    let title = options[0]
    let color = options[1]
    let description = options.slice(2).join(" ")

    if (!args[0] || !args[1]) {

        message.channel.send(new discord.RichEmbed()
            .setDescription(`Usage: ${bot.prefix}embed <title> || <color> || <text>`)
            .setColor(0xff0000)
        )
    } else {
        message.channel.send(new discord.RichEmbed()

            .setTitle(title)
            .setColor(color)
            .setDescription(description))
    }

}
module.exports.help = {
name: "embed",
aliases: []

}