const Discord = require("discord.js");
const eco = require("discord-economy");
const isgd = require('isgd')

module.exports.run = async (bot, message, args) => {
  let type = args[0]
  let link = args.[1].join(" ")
  let custom = args.slice(2).join(" ")
  console.log(`
type ${type}
link ${link}
custom ${custom}
`)
  
  if(type === 'shorten') {
    isgd.shorten(link, function(res) {
    message.channel.send(res); // Returns a shorter version of http://google.com - http://is.gd/OwycZW
}); 
  } else if(type === 'custom') {
  isgd.custom(link, custom, function(res) {
    message.channel.send(res); // If the custom URL of MyGoogleShortcut is actually available, it should return http://is.gd/MyGoogleShortcut
});
  } else if (type === 'lookup') {
    isgd.lookup(link, function(res) {
    console.log(res); // Returns a longer version of http://is.gd/OwycZW - http://google.com
});
  } else {
    message.channel.send(`Short URL help:
!shorturl shorten - just shorts an URL
!shorturl custom - shorts an URL with custom name
!shorturl lookup - unshorts an URL
`)
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
