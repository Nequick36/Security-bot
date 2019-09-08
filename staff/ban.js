const discord = require("discord.js")

exports.run = async (bot, message, args) => {
  message.delete()
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send({embed:{description:` | :x: | Nemas dozvolu za ovu komandu!  | :x: | `, color:0xff0000}})
    let user = message.mentions.members.first()
    if(!user) return message.channel.send({embed:{description:`Taguj membera kojeg hocete banati!`, color:0xff0000}})
    if(user.hasPermission("ADMINISTRATOR")) return message.channel.send({embed:{description:`| :x: | Ne mozes da banas ljude sa Administracijom! | :x: |  `, color:0xff0000}})
    let reason = args.filter(arg => arg!==args[0]).join(" ") || 'Razlog nije dat'
    try {
        user.ban(`Staff: ${message.author.tag}, Razlog: ${reason}`)
        message.channel.send({embed:{description:`| :white_check_mark: | ${user} **__je banovan! ,razlog__** \`${reason}\``, color:0xff0000}})
    } catch (e) {
        if(e) return message.channel.send(e+'\nError: Kontaktirajte ownera!')
    }
}
module.exports.help = {
name: "ban",
aliases: ["Ban"]

}