const discord = require("discord.js")
exports.run = async (bot, message, args) => {
  let Embed = new discord.RichEmbed()
	.setTitle('▬▬▬▬▬▬▬▬▬▬▬◥◣◆◢◤▬▬▬▬▬▬▬▬▬▬▬')
  
  .setColor(0xff0000)
  
  .setDescription(`${message.guild.name}`)
  .addField("﹝ :busts_in_silhouette: ﹞|-Member komande-|", `${bot.prefix}suggest , ${bot.prefix}botinfo , ${bot.prefix}time , ${bot.prefix}serverinfo , ${bot.prefix}time , ${bot.prefix}status , ${bot.prefix}report , ${bot.prefix}miniavatar , ${bot.prefix}avatar`)
  .addField("﹝ :joy: ﹞|-Zabavne komande-|" , `${bot.prefix}emojify , ${bot.prefix}mirror , ${bot.prefix}cat , ${bot.prefix}dog , ${bot.prefix}iq , ${bot.prefix}gayrate , ${bot.prefix}avatar , ${bot.prefix}randomcolor , ${bot.prefix}randomnumber , ${bot.prefix}randomemoji , ${bot.prefix}8ball , ${bot.prefix}question , ${bot.prefix}hack , ${bot.prefix}penis`)
  .addField("﹝ :tophat: ﹞|-Staff komande-|",  `${bot.prefix}ban , ${bot.prefix}kick , ${bot.prefix}clear , ${bot.prefix}mute , ${bot.prefix}unmute , ${bot.prefix}warn , ${bot.prefix}vote , ${bot.prefix}ascii`)
  .addField("﹝ :robot: ﹞|-Bot-|" , `${bot.prefix}botinvite , ${bot.prefix}support`)
  .addField("﹝ :necktie: ﹞|-Vlasnik komande-|",  `${bot.prefix}addrole , ${bot.prefix}delrole , ${bot.prefix}update , ${bot.prefix}dmall ${bot.prefix}dm , ${bot.prefix}anketa`)
  .addField("﹝ :necktie: ﹞|-Bot Owner komande-|", `${bot.prefix}embed , ${bot.prefix}say , ${bot.prefix}reload , ${bot.prefix}setStatus`)
  .addField("﹝ :moneybag:  ﹞|-Ekonomija-|", `${bot.prefix}flip , ${bot.prefix}buy , ${bot.prefix}shop , ${bot.prefix}work , ${bot.prefix}bal , ${bot.prefix}transfer , ${bot.prefix}slot , ${bot.prefix}daily`)
  .addField(" ﹝ **?** ﹞ |-Info Komande-|",` ${bot.prefix}userinfo , ${bot.prefix}myinfo , ${bot.prefix}profile`)
  .addField("▬▬▬▬▬▬▬▬▬▬▬◥◣◆◢◤▬▬▬▬▬▬▬▬▬▬▬","Ako imate neki bag sa botom javite mi se u dm Veka#5742")
  .addField("Ako hocete da pomognete oko bota javite mi se u dm Veka#5742", `:beginner:  ***${message.guild.name} HELP*** :beginner:`)
  .addField("▬▬▬▬▬▬▬▬▬▬▬◥◣◆◢◤▬▬▬▬▬▬▬▬▬▬▬","**__Zabavi se sa Botom :D__**")
  .addField(`${message.guild.name}` , `◤▬▬▬▬◆▬▬▬▬▬◣◥ ◆ ◤◢▬▬▬▬▬◆▬▬▬▬▬◥`)
   .setThumbnail(`${message.author.displayAvatarURL}`)
  .setTimestamp() 
	.setFooter(`${message.guild.name} Bot`, 'https://cdn.discordapp.com/attachments/578362059708825603/610416348350119937/extreme_community.jpg');
  
  message.channel.send(Embed)
}
module.exports.help = {
name: "komande",
aliases: ["Komande"]
}