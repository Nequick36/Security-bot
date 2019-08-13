const Discord = require('discord.js')

exports.run = async (bot,message,args) => {
   let user = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member
  let userEco = await eco.FetchBalance(user.user.id).then()
  let roles = user.roles;
        let role_name = roles.map(role => {
          if(role.name === "@everyone") return
          return role.name;
        })

        let joined = user.joinedAt
        var profile = new Discord.RichEmbed()
            .addField("Name", user)
            .addField("Joined at", joined) 
            .addField("Coins", userEco.balance)//no that is array  //wait what do add here then
            .addField("Roles", role_name)
  
   return;
}    
module.exports.help = {
name: "userinfo",
aliases: ["user-info"]
}