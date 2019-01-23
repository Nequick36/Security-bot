const Discord = require("discord.js");
const eco = require("discord-economy");
const isgd = require('isgd')

module.exports.run = async (bot, message, args) => {
  let type = args[0]
  let link = args.slice(1).join(" ")
  
  if(type === 'shorten') {
    isgd.shorten(link, function(res) {
    message.channel.send(res); // Returns a shorter version of http://google.com - http://is.gd/OwycZW
}); 
  } else if(type === '') {
  
  } else if (type === '') {
    
  }
}

module.exports.help = {
  name: "shorturl",
  aliases: ['shortlink'],
  description: "Checks your balance.",
  perm: "",
  role: "",
  group:"Economy"
}
