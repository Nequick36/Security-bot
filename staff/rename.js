const discord = require("discord.js")
exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) message.channel.send("🛑 **ACCESS DENIED! THIS IS A MOD/ADMIN ONLY COMMAND. 🛑**")
  let user = message.mentions.members.first()
  let name = args[1]
  if(!user || !name) return message.channel.send('Pomoc: en!rename <@member> <ime>')
  user.setNickname(name)
  message.channel.send(`Nick od ${user.user.username} sad je ${name}`)
}
module.exports.help = {
name: "rename",
aliases: ["Rename"],
perm: "MANAGE_MESSAGES",
role: "Pristup",
group: "admin"
}