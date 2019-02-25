const Discord = require("discord.js")
const figlet = require('figlet')

module.exports.run = async (bot, message, args) => {
    var maxLen = 100
  
  if(args.join(' ').length > maxLen) return message.channel.send(`${maxLen} is over the maximum character limit!`) 
  
  if(!args[0]) return message.channel.send('Please enter a post ');
  
  figlet(`${args.join(' ')}`, function(err, data) {
      if (err) {
          console.log('Theres a mistake...');
          console.dir(err);
          return;
      }

      message.channel.send(`${data}`, {code: 'AsciiArt'});
  });
}

module.exports.help = {
  name: "ascii",
  aliases: [],
  description: "Ascii a message.",
  perm: "",
  role: "",
  group:"SIMPLE"
}
