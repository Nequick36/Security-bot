const Discord = require("discord.js");
const botconfig = require("./botconfig.json");
var replaceall = require("replaceall");
const eco = require("discord-economy");
const fs = require("fs");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.afk = new Map();
bot.hobbyCooldown = new Map()
bot.crimeCooldown = new Map()
bot.devs = ['824799268270243891', '774046091334778921', '883794267007516682', '779433631088115762']
let helpCmd = `Prefix is <b>en!</b><br>\nCommands:<br><br>\n\n`;

fs.readdir("./commands", (err, files) => {
  if (err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if (jsfile <= 0) {
    console.log("couldn't find commands");
    return;
  }
  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);

    if (props.help.description)
      helpCmd = `${helpCmd}<b>${props.help.name}</b>,<br>\n`;
    else helpCmd = `${helpCmd}<b>${props.help.name}</b>,<br>\n`;
    props.help.aliases.forEach(alias => {
      bot.aliases.set(alias, props.help.name);
    });
  });
  console.log(`Loaded ${jsfile.length} commands!`);
  helpCmd = `${helpCmd}<br>\n
  <b>Bot made by | ⚡ TheVeka ⚡ |#7740<</b><br>`;
});
bot.on("message", message => {
  if (message.channel.type === "dm") return;
  if (message.author.bot) return;
  
  
  let prefix = "s!";
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  if (!message.content.startsWith(prefix)) return;

  let commandfile =
    bot.commands.get(cmd.slice(prefix.length)) ||
    bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)));
  if (commandfile) commandfile.run(bot, message, args);
  else {
    if (cmd.slice(prefix.length) === "fghfghfghhhfghfgheghfghfghfglphfghffghfghfg") {
    } else {}}

  if (cmd === `.dfgdfgdfgdfgdfgdfgdfgdfgfdcmgdfgdfgdfgdfgdffgdfgfdddfgdfginfo`) {

    let command =
      bot.commands.get(args[0]) || bot.commands.get(bot.aliases.get(args[0]));
    if (!command)
      return message.channel.send(`Can't find command named ${args[0]}!`);
    console.log(command);
    let HelpEmbed = new Discord.RichEmbed()
      .setColor(0xff0000)
      .addField(`Name`, `${command.help.name}`)
      .addField(`Description`, `${command.help.description || "None"}`)
      .addField(`Aliases`, `${replaceall(" ", ", ", command.help.aliases.join(" ")) || "None"}`
      )
      .addField(`Required Permission`, `${command.help.perm || "None"}`)
      .addField(`Required Role`, `${command.help.role || "None"}`)
      .addField(`Group`, `${command.help.group.toLowerCase() || "None"}`);
    message.channel.send(HelpEmbed);
  }})


bot.on('ready', () => {
    console.log(`${bot.user.username} is online!`)

    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: `Prefix s! | Security`,
          type: "WATCHING"
        }
    })
})

bot.login("OTcyMDk4MzMwMTI3NjM4NTU4.YnUHHg.zcXqaXkmI1uP9ZeXX9o6n4Eh53A");