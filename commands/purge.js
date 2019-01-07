const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES"))
        {
            message.channel.send("🛑 **ACCESS DENIED! THIS IS A STAFF-ONLY COMMAND. 🛑**");
            return;
        }
      const deleteCount = parseInt(args[0], 10);
      if(!deleteCount || deleteCount < 1 || deleteCount > 101)
     return message.reply("specify the number of messages between 1 and 100.");
     const fetched = await message.channel.fetchMessages({limit: deleteCount});
      message.channel.bulkDelete(fetched)
  let logChannel = message.guild.channels.find(`name`, "🔸》chat-logs")
  logChannel.send(`**B`)
     .catch(error => message.reply(`can't clear chat because: ${error}`));
}

module.exports.help = {
  name: "purge",
  description: "Deletes a certain number of messages in a channel.",
  group:"Admin"
}
