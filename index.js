const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);


const Discord = require("discord.js");
const botconfig = require("./botconfig.json");
const eco = require("discord-economy")
const fs = require("fs")
const bot = new Discord.Client()
bot.commands = new Discord.Collection()
bot.aliases = new Discord.Collection();
let helpCmd = `Prefix is !\nCommands:\n\n` 
fs.readdir("./commands", (err, files) => {
    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile <= 0){
        console.log("couldn't find commands")
        return;
    }
    jsfile.forEach((f, i) => {
         let props = require(`./commands/${f}`)
         console.log(`${f} loaded!`)
         bot.commands.set(props.help.name, props)
      
      if(props.help.description) helpCmd = `${helpCmd}**${props.help.name}**: ${props.help.description}\n`
      else helpCmd = `${helpCmd}** ${props.help.name}**: No description added.\n`
           props.help.aliases.forEach(alias => {
         bot.aliases.set(alias, props.help.name);

     });

      });
      helpCmd = `${helpCmd}\n**Updates:**\`\`\`
Added:
Tickets: !ticket
Coins in !profile
Memes: !meme
Aliases: Suggest some with !suggest
Bot updates\`\`\`\n
***Bot made by Seth#7796 & \${j122}#6975***`
});
bot.on("message", message => {
    if(message.channel.type === "dm") return;
    if(message.author.bot) return;
if(message.content.toLowerCase().includes("suck one")) return message.reply("Thats the best you got? LOL how pathetic.")
 if(message.content.toLowerCase().includes("seth is gay")) return message.reply("stfu boi, you do not talk like that about my creator like that")
 if(message.content.toLowerCase().includes("your mom")) return message.reply("Wow, *how orginal*")
  

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0]
    let args = messageArray.slice(1);
  if(!message.content.startsWith(prefix)) return;

    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)));
    if(commandfile) commandfile.run(bot, message, args)
    else { 
      if(cmd.slice(prefix.length) === 'help') {}
      else message.channel.send(`Can't find that command! Please use !help`)
      }
   
    if(cmd === `${prefix}help`) {
      message.author.send(helpCmd)
      message.channel.send(`Check DMs!`)
    }
  
  
})
fs.readdir("./events/", (err, files) => {
	if (err) console.log(err);
	files.forEach(file => {
		let eventFunc = require(`./events/${file}`);
		let eventName = file.split(".")[0];
		bot.on(eventName, (...args) => eventFunc.run(bot, ...args));
	});
});



bot.on("guildMemberAdd", function (member) {
    member.send("Welcome to the server! Please read the rules.")
    let memberRole = member.guild.roles.find(role => role.name === "GameHub Member");
    member.addRole(memberRole);
  let guild = member.guild;
  let channel = member.guild.channels.find(channel => channel.name === '🔸》welcome')//wouldnt it be better w ids?
    channel.sendMessage(`Welcome ${member.user} to this server.`).catch(console.error);
});
bot.on("guildMemberRemove", function (member) {
     let guild = member.guild;
  let channel = member.guild.channels.find(channel => channel.name === '🔸》welcome')
     channel.sendMessage(`${member.user.tag} has left the server.`).catch(console.error);
});
bot.on('ready', () => {
    console.log("Ready")

    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: 'to use commands do !help',
            type: "WATCHING",
        }
    })
});

bot.login(process.env.TOKEN)