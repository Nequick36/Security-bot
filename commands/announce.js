const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let role = message.guild.roles.find(r => r.name === 'Administrator')
  if(!message.member.roles.has(role.id))
         {
             message.channel.send("🛑**ACCESS DENIED! THIS IS A ADMIN-ONLY COMMAND.🛑**");
             return;
         }
        let announcement = message.content.split(" ").slice(1).join(" ");
       if(!announcement) return message.reply("You have not specified a message to announce!")
        message.guild.channels.get("391268693964881920").send(announcement)
       message.reply("**Your message has been announced!**")
}

module.exports.help = {
  name: "announce",
  aliases: [],
  description: "Announces a message to a announcements.",
  perm: "",
  role: "",
  group:"Admin"
}