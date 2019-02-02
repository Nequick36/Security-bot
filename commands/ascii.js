const Discord = require("discord.js")
const figlet = require('figlet')

module.exports.run = async (bot, message, args) => {
    var maxLen = 100
  
  if(args.join(' ').length > maxLen) return message.channel.send(`En fazla ${maxLen} karakter yazabilirsin!`) 
  
  if(!args[0]) return message.channel.send('Lütfen bir yazı girin...');
  
  figlet(`${args.join(' ')}`, function(err, data) {
      if (err) {
          console.log('Bir hata var...');
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
