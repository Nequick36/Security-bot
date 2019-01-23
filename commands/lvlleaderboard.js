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
 
        var firstplace = await bot.fetchUser(users[0].userid) //Searches for the user object in discord for first place
        var secondplace = await bot.fetchUser(users[1].userid) //Searches for the user object in discord for second place
        var thirdplace = await bot.fetchUser(users[2].userid) //Searches for the user object in discord for third place
 
        message.channel.send(`My leaderboard:
 
1 - ${firstplace.tag} : ${users[0].level} level : ${users[0].xp} xp
2 - ${secondplace.tag} : ${users[1].level} level : ${users[1].xp} xp
3 - ${thirdplace.tag} : ${users[2].level} level : ${users[2].xp} xp`) 
 
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
