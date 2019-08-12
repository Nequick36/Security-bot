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
        limit: 10
      }).then(async users => { //make sure it is async
 
        var firstplace = await bot.fetchUser(users[0].userid) //Searches for the user object in discord for first place
        var secondplace = await bot.fetchUser(users[1].userid) //Searches for the user object in discord for second place
        var thirdplace = await bot.fetchUser(users[2].userid) //Searches for the user object in discord for third place
        var fourthplace = await bot.fetchUser(users[3].userid)
        var fifthplace = await bot.fetchUser(users[4].userid)
        var sixthplace = await bot.fetchUser(users[5].userid)
        var seventhplace = await bot.fetchUser(users[6].userid)
        var eigthplace = await bot.fetchUser(users[7].userid)
        var ninethplace = await bot.fetchUser(users[8].userid)
        var tenthplace = await bot.fetchUser(users[9].userid)
 
        message.channel.send(`My leaderboard:
 
1 - ${firstplace.tag || 'None'} | level ${users[0].level || 'None'} | ${users[0].xp || 'None'} xp
2 - ${secondplace.tag || 'None'} | level ${users[1].level || 'None'} | ${users[1].xp || 'None'} xp
3 - ${thirdplace.tag || 'None'} | level ${users[2].level || 'None'} | ${users[2].xp || 'None'} xp
4 - ${fourthplace.tag || 'None'} | level ${users[3].level || 'None'} | ${users[3].xp || 'None'} xp
5 - ${fifthplace.tag || 'None'} | level ${users[4].level || 'None'} | ${users[4].xp || 'None'} xp
6 - ${sixthplace.tag || 'None'} | level ${users[5].level || 'None'} | ${users[5].xp || 'None'} xp
7 - ${seventhplace.tag || 'None'} | level ${users[6].level || 'None'} | ${users[6].xp || 'None'} xp
8 - ${eigthplace.tag || 'None'} | level ${users[7].level || 'None'} | ${users[7].xp || 'None'} xp
9 - ${ninethplace.tag || 'None'} | level ${users[8].level || 'None'} | ${users[8].xp || 'None'} xp
10 - ${tenthplace.tag || 'None'} | level ${users[9].level || 'None'} | ${users[9].xp || 'None'} xp`) 

      })
 
    }

}

