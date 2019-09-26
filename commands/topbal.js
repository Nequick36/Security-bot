const Discord = require("discord.js");
const eco = require("discord-economy")

module.exports.run = async (bot, message, args) => {

  if (message.mentions.users.first()) {
 
      var output = await eco.Leaderboard({
        search: message.mentions.users.first().id
      })
      message.channel.send(`The user ${message.mentions.users.first().tag} is number ${output.placement} on my leaderboard!`);
 
      //Searches for the top 3 and outputs it to the user.
    } else {
 
      eco.Leaderboard({
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
 
        message.channel.send(`Top Balance:
 
**1** - ${firstplace.tag || 'None'} **|** **Balance** ${users[0].balance} 
**2** - ${secondplace.tag || 'None'} **|** **Balance** ${users[1].balance} 
**3** - ${thirdplace.tag || 'None'} **|** **Balance** ${users[2].balance} 
**4** - ${fourthplace.tag || 'None'} **|** **Balance** ${users[3].balance} 
**5** - ${fifthplace.tag || 'None'} **|** **Balance** ${users[4].balance} 
**6** - ${sixthplace.tag || 'None'} **|** **Balance** ${users[5].balance} 
**7** - ${seventhplace.tag || 'None'} **|** **Balance** ${users[6].balance} 
**8** - ${eigthplace.tag || 'None'} **|** **Balance** ${users[7].balance} 
**9** - ${ninethplace.tag || 'None'} **|** **Balance** ${users[8].balance} 
**10** - ${tenthplace.tag || 'None'} **|** **Balance** ${users[9].balance}`)

      })
 
    }

}

module.exports.help = {
  name: "lb",
  aliases: ['leaderboard', 'topbal', 'baltop'],
  perm: "",
  role: "",
  group:"Economy"
}
