const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.send(`If you want to see help go to <a href="/help">/help!</a>
To see about and credits go to <a href="/about">/about!</a>!`)
});

app.get("/help", (req, res) => {
  res.sendFile(__dirname + '/help.html')
})

app.get("/about", (req, res) => {
  res.sendFile(__dirname + '/about.txt')
})
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);


const Discord = require("discord.js");
const botconfig = require("./botconfig.json");
var replaceall = require("replaceall");
const eco = require("discord-economy");
const logger = require("winston")
const antispam = require("discord-anti-spam");
const fs = require("fs")
const bot = new Discord.Client()
bot.commands = new Discord.Collection()
bot.aliases = new Discord.Collection();
bot.afk = new Map()
bot.workCooldown = new Map()
bot.devs = ['532659544791318540']
let helpCmd = `Prefix is <b>en!</b><br>\nCommands:<br><br>\n\n` 
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
      
      if(props.help.description) helpCmd = `${helpCmd}<b>${props.help.name}</b>,<br>\n`
      else helpCmd = `${helpCmd}Prefix is <b>en!</b><br>
Commands:<br><br>

<b>8ball</b>,<br>
<b>addbalance, Vlasnik Komanda!</b>,<br>
<b>afk</b>,<br>
<b>anketa, Vlasnik Komanda!</b>,<br>
<b>new, Vlasnik Komanda!</b>,<br>
<b>apply</b>,<br>
<b>ascii</b>,<br>
<b>avatar</b>,<br>
<b>await, Vlasnik Komanda!</b>,<br>
<b>balance</b>,<br>
<b>ban</b>,<br>
<b>status, Vlasnik Komanda!</b>,<br>
<b>bugreport</b>,<br>
<b>buy</b>,<br>
<b>cat</b>,<br>
<b>channelinfo, Vlasnik Komanda!</b>,<br>
<b>channels, Vlasnik Komanda!</b>,<br>
<b>send, Vlasnik Komanda!</b>,<br>
<b>music, Vlasnik Komanda!</b>,<br>
<b>flip</b>,<br>
<b>event, Vlasnik Komanda!</b>,<br>
<b>daily</b>,<br>
<b>roll</b>,<br>
<b>dm, Vlasnik Komanda!</b>,<br>
<b>dmall, Vlasnik Komanda!</b>,<br>
<b>dog</b>,<br>
<b>embed, Vlasnik Komanda!</b>,<br>
<b>emojify</b>,<br>
<b>eval</b>,<br>
<b>gayrate</b>,<br>
<b>hack</b>,<br>
<b>id</b>,<br>
<b>iq</b>,<br>
<b>joke</b>,<br>
<b>kick</b>,<br>
<b>levelleaderboard</b>,<br>
<b>members</b>,<br>
<b>mirror</b>,<br>
<b>msgs</b>,<br>
<b>msgsleaderboard</b>,<br>
<b>mute</b>,<br>
<b>myinfo</b>,<br>
<b>penis</b>,<br>
<b>ping</b>,<br>
<b>poll</b>,<br>
<b>profile</b>,<br>
<b>purge</b>,<br>
<b>question</b>,<br>
<b>questions</b>,<br>
<b>randomcolor</b>,<br>
<b>randomemoji</b>,<br>
<b>randomnumber</b>,<br>
<b>reload, Vlasnik Komanda!</b>,<br>
<b>removebalance, Vlasnik Komanda!</b>,<br>
<b>rename</b>,<br>
<b>report</b>,<br>
<b>resetwarns</b>,<br>
<b>role, Vlasnik Komanda!</b>,<br>
<b>roles, Vlasnik Komanda!</b>,<br>
<b>serverinfo</b>,<br>
<b>setStatus, Vlasnik Komanda!</b>,<br>
<b>setlevel, Vlasnik Komanda!</b>,<br>
<b>setxp, Vlasnik Komanda!</b>,<br>
<b>shop</b>,<br>
<b>shorturl, Vlasnik Komanda!</b>,<br>
<b>slot</b>,<br>
<b>sql</b>,<br>
<b>suggest</b>,<br>
<b>ticket</b>,<br>
<b>lb</b>,<br>
<b>transfer</b>,<br>
<b>unban</b>,<br>
<b>unmute</b>,<br>
<b>userinfo</b>,<br>
<b>vote</b>,<br>
<b>warn</b>,<br>
<b>warns</b>,<br>
<b>work</b>,<br>
<b>xp</b>,<br>
<b>xpdelete, Vlasnik Komanda!</b>,<br>
<br>

  <b>Bot made by ⚡ Veka ⚡ ᴼᴿᴵᴳᴵᴺᴬᴸ#7740</b>
 <b>Official Server https://discord.gg/BgxSdvP</b><br>\n`
           props.help.aliases.forEach(alias => {
         bot.aliases.set(alias, props.help.name);

     });


      });
  console.log(`Loaded ${jsfile.length} commands!`)
      helpCmd = `${helpCmd}<br>\n
  <b>Bot made by ⚡ Veka ⚡ ᴼᴿᴵᴳᴵᴺᴬᴸ#7740</b>
 <b>Official Server https://discord.gg/BgxSdvP</b><br>`
});
bot.on("message", message => {
    if(message.channel.type === "dm") return;
    if(message.author.bot) return;
if(message.content.toLowerCase().includes("suck one")) return message.reply("Thats the best you got? LOL how pathetic.")
 if(message.content.toLowerCase().includes("seth is gay")) return message.reply("stfu boi, you do not talk like that about my creator like that")
    if(message.content.toLowerCase().includes("j122 is gay")) return message.reply("psst -> ||dont tell him i told you this but he is gay||")
 if(message.content.toLowerCase().includes("your mom")) return message.reply("Wow, *how orginal*")
  if(message.content.includes("https://discord.gg/" )) {
    if(message.channel.name === '「📯」obavjestenja' || message.channel.name === '「🤝」partners' || message.channel.name === '⚫》staff-announcements'|| message.channel.name === '🔸》announcements') return;
    else message.delete()
  }
  if(message.content.includes("https://discordapp.com/invite/")) {
     if(message.channel.name === '「📯」obavjestenja' || message.channel.name === '「🤝」partners' || message.channel.name === '⚫》staff-announcements') return;
    else message.delete()
  }
  if(message.content.includes("https://is.gd/" )) {
    if(message.channel.name === '「📯」obavjestenja' || message.channel.name === '「🤝」partners' || message.channel.anme === '⚫》staff-announcements') return;
    else message.delete()
  }

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0]
    let args = messageArray.slice(1);
  if(!message.content.startsWith(prefix)) return;

    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)));
  // let NeededPerm = commandfile.help.perm
  // let NeededRole = message.guild.roles.find(r => r.name === commandfile.help.role)
  // if(!NeededRole) {}
  // if(NeededRole === '' && NeededPerm === '') {}
  // if(NeededRole && NeededPerm !== '') if(!message.member.roles.has(NeededRole.id) || !message.member.hasPermission(NeededPerm)) return message.channel.send(`🛑 **ACCESS DENIED! THIS IS ${commandfile.help.group.toUpperCase()} ONLY COMMAND. 🛑**"`)
  // if(NeededPerm !== '' && !NeededRole) if(!message.member.hasPermission(NeededPerm)) return message.channel.send(`🛑 **ACCESS DENIED! THIS IS ${commandfile.help.group.toUpperCase()} ONLY COMMAND. 🛑**"`)
    if(commandfile) commandfile.run(bot, message, args) //can you go thru files and add needed perms or roles they are blank but add like MANAGE_MESSAGES
    else { //ok wait is there roles and perms //i need to go now
      if(cmd.slice(prefix.length) === 'help') {}
      else message.channel.send(`Ta komanda ne postoji ukucajte en!help da vidite listu komandi`)
      }
   
    if(cmd === `${prefix}help`) {
      if(!args[0])  {
        message.author.send(`https://extremecommunitybot.glitch.me/help`)
        message.channel.send(`${message.author.tag} Pogledajte svoj DM!`)
    fs.writeFile('./help.html', helpCmd, (err) => {
 if(err) console.error(err)
});

        return;
      }
      let command = bot.commands.get(args[0]) || bot.commands.get(bot.aliases.get(args[0]));
      if(!command) return message.channel.send(`Can't find command named ${args[0]}!`)
      console.log(command)
      let HelpEmbed = new Discord.RichEmbed()
      .setColor(0xff0000)
      .addField(`Name`, `${command.help.name}`)
      .addField(`Description`, `${command.help.description || 'None'}`)
      .addField(`Aliases`, `${replaceall(" ", ", ", command.help.aliases.join(" ")) || 'None'}`)
      .addField(`Required Permission`, `${command.help.perm || 'None'}`)
      .addField(`Required Role`, `${command.help.role || 'None'}`)
      .addField(`Group`, `${command.help.group.toLowerCase() || 'None'}`)
      message.channel.send(HelpEmbed)
    }
  
  
})
 fs.readdir("./events/", (err, files) => {
	if (err) console.log(err);
   let jsfiles = files.filter(f => f.split(".").pop() === "js")
	jsfiles.forEach(file => {
		let eventFunc = require(`./events/${file}`);
		let eventName = file.split(".")[0];
		bot.on(eventName, (...args) => eventFunc.run(bot, ...args));
    console.log(`${file} Loaded!`)
	});
});





bot.on("message", (message) => {
  if(message.content === "zz") {
    message.channel.send(`${message.author.tag} zz`);
  }
  if(message.content === "jutro") {
    message.channel.send(`${message.author.tag} Jutro`);
  }
    if(message.content === "Jutro") {
    message.channel.send(`${message.author.tag} Jutro`);
  }
    if(message.content === "Zz") {
    message.channel.send(`${message.author.tag} zz`);
  }
    if(message.content === "cao") {
    message.channel.send(`${message.author.tag} cao`);
  }
    if(message.content === "lkn") {
    message.channel.send(`${message.author.tag} Lkn`);
  }
    if(message.content === "laku noc") {
    message.channel.send(`${message.author.tag} laku noc`);
  }
    if(message.content === "Cao") {
    message.channel.send(`${message.author.tag} Cao`);
  }
});

bot.on('message', message => {
  if(botconfig.badwords.some(word => message.content.toLowerCase().includes(word))){
    message.delete()
  }})

bot.on("guildMemberAdd", function (member) {
    member.send(`DobroDošli ${member.user.tag} na naš Discord Server ExtremeCommunity, Zabavite se i pročitajte pravila. Hvala unapred!`)
    let memberRole = member.guild.roles.find(role => role.name === "Memberi");
    member.addRole(memberRole);
  let guild = member.guild;
  let channel = member.guild.channels.find(channel => channel.name === '「🙋」welcome')//wouldnt it be better w ids?
    channel.sendMessage(`${member.user} je ušao/la u server. Pogledaj poruku od ExtremeCommunity`).catch(console.error);
});

bot.on("guildMemberRemove", function (member) {
     let guild = member.guild;
  let channel = member.guild.channels.find(channel => channel.name === '「😢」leaves')
     channel.sendMessage(`${member.user.tag} je izašao sa servera.`).catch(console.error);
});
bot.on('ready', () => {
    console.log(`${bot.user.username} is online!`)

    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: 'Welcome to Server!',
            type: "WATCHING",
        }
    })
});

bot.login(process.env.TOKEN)