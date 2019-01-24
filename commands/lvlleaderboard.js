const Discord = require("discord.js");
const eco = require("discord-economy");
const dl = require('discord-leveling')

module.exports.run = async (bot, message, args) => {

  if (message.mentions.users.first()) {
 
      var output = await dl.Leaderboard({
        search: message.mentions.users.first().id
      })
      message.channel.send(`The user ${message.mentions.users.first().tag} is number ${output.placement} on my leaderboard!`);
 
      //Searches for the top 3 and outputs it to the user.
    } else {
 
      dl.Leaderboard({
        limit: 3
      }).then(async users => { //make sure it is async
 
        if(users[0]) var firstplace = await bot.fetchUser(users[0].userid) //Searches for the user object in discord for first place
        if(users[1]) var secondplace = await bot.fetchUser(users[1].userid) //Searches for the user object in discord for second place
        if(users[2]) var thirdplace = await bot.fetchUser(users[2].userid) //Searches for the user object in discord for third place
 
        message.channel.send(`My leaderboard:
 
1 - ${firstplace.tag || 'None'} | level ${users[0].level || 'None'} | ${users[0].xp || 'None'} xp
2 - ${secondplace.tag || 'None'} | level ${users[1].level || 'None'} | ${users[1].xp || 'None'} xp
3 - ${thirdplace.tag || 'None'} | level ${users[2].level || 'None'} | ${users[2].xp || 'None'} xp`) 
 
      })
 
    }

}

module.exports.help = {
  name: "levelleaderboard",
  aliases: ['lvlleaderboard', 'lvllb', 'levellb', 'xpleaderboard', 'xplb', 'xplb'],
  description: "Shows the leaderboard of xp system.",
  perm: "",
  role: "",
  group:"Leveling"
}
