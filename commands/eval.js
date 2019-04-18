const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let developers = bot.devs
  if(!developers.includes(message.author.id)) return message.channel.send(`🛑 **ACCESS DENIED! THIS IS A DEVELOPER ONLY COMMAND. 🛑**`)
  function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
  
    try {
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
}

module.exports.help = {
  name: "eval",
  aliases: [],
  description: "Evals a code.",
  perm: "ADMINISTRATOR",
  role: "GH Bot Developer",
  group:"Developer"
}
