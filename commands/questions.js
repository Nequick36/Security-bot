const Discord = require("discord.js")
const fs = require("fs") 
module.exports.run = async (bot, message, args) => {
  let file = JSON.parse(fs.readFileSync('commands/questions.json', 'utf8')); 
  
  if(!file) message.reply("Can't find a json file!")
  if(!file.questions) file.questions = ""
  let q = file.questions.split("|")
  let questions = ""
  for(let i = 0; i<q.length; i++) {
    questions = `${questions}${q[i]}\n`
  }
  if(!args[0]) return message.channel.send(`Questions\n${questions}`)
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("⛔ **ACCESS DENIED!** ⛔")
  file.questions = args.join(" ")
  message.channel.send(`Questions are set!`)
  fs.writeFile('commands/questions.json', JSON.stringify(file, null, 4), (err) => {
 if(err) console.error(err)
})
}

module.exports.help = {
  name: "questions",
  aliases: [],
  description: "Shows/Sets questions for staff application",
  perm: "",
  role: "",
  group:"Staff"
}
//mess up one more 