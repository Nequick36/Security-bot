const fs = require('fs')
const discord = require('discord.js')
exports.run = async (bot, oldMember, newMember) => {
  let logChannel = oldMember.guild.channels.find(c => c.name === '🔸》chat-logs')
  //nickname change log
  let nickEmbed = new discord.RichEmbed()
  nickEmbed.setTitle(newMember.user.tag)
  nickEmbed.setColor('BLUE')
  nickEmbed.addField("Old nickname", oldMember.nickname)
  nickEmbed.addField("New nickname", newMember.nickname)
  nickEmbed.setThumbnail(oldMember.avatarURL)
  if(oldMember.nickname !== newMember.nickname) {
    logChannel.send(nickEmbed)
  }
  
  //role update
  let oldRoles = oldMember.roles.map(role => {return role.name}).toString().split(",")
  let newRoles = newMember.roles.map(role => {return role.name}).toString().split(",")
  if(oldRoles > newRoles) 
  {
    logChannel.send({embed:{description: `${oldMember} has been removed`}})
  }
   //console.log(`oldRoles: ${oldRoles}`)
  // console.log(oldRoles)
   //console.log(`newRoles: ${newRoles}`)
  // console.log(newRoles)
//   oldRoles.forEach(role => {
//     if(!newRoles.has(role)) console.log(`${role} is the one!`)
//   })
 }