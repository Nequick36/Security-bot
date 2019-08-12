const discord = require('discord.js')

exports.run = async (bot, message, args) => {
 if(!bot.devs.includes(message.author.id)) return message.channel.send(`**:x: Nemas dozvolu za ovu komandu :x:**`)
    message.delete()

    let options = args.join(" ").split(" || ")
    let title = options[0]
    let description = options.slice(2).join(" ")

    if (!args[0]) {

        message.channel.send(new discord.RichEmbed()
            .setDescription(`Uputstvo: ${bot.prefix}say <rijec> || <color> ||`)
        )
    } else {
        message.channel.send(new discord.RichEmbed()

            .setTitle(title)
            .setDescription(description))
    }

}
module.exports.help = {
name: "say",
aliases: ["say"]

}