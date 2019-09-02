const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let emoji = ['', '🇦', '🇧', '🇨', '🇩', '🇪', '🇫', '🇬', '🇭', '🇮', '🇯', '🇰', '🇱', '🇲', '🇳']//🇦 🇧 🇨 🇩 🇪 🇫 🇬 🇬 🇮 🇯 🇰 🇱 🇲 🇳
  let role = message.guild.roles.find(role => role.name === "*")
  if(!message.member.roles.has(role.id) && !message.member.hasPermission("ADMINISTRATOR")) return message.reply("🛑 **ACCESS DENIED! THIS IS ADMIN ONLY COMMAND. 🛑**")
  message.delete()  
  let options = args.join(" ").split(" | ")
  if(options.length > 15) return message.reply("Too many options!")
  let optionsRAW = ''
  let embed = new Discord.RichEmbed()
  .setTitle(options[0])
  .setColor(0xff0000)
  for(let i = 1; i<options.length; i++) {
    optionsRAW = `${optionsRAW}${emoji[i]} ${options[i]}\n`
  }
  embed.setDescription(optionsRAW)
  let msg = await message.channel.send(embed)
  
  
  for(let l = 1; l<options.length; l++) {
    await msg.react(emoji[l])
  }
}

module.exports.help = {
  name: "poll",
  aliases: [],
  perm: "ADMINISTRATOR",
  role: "Pristup",
  group:"SIMPLE"
}
  