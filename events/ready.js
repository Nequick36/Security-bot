const fs = require('fs')
const discord = require('discord.js')
exports.run = async (bot) => {
  //rainbow role
  let rainbowrole = bot.guilds.get('358634388461715456').roles.find(r => r.name === 'Rainbow')
  let colors = [
    0xff0000,
    0xffa500,
    0xffff00,
    0x008000,
    0x0000ff,
    0x4b0082,
    0xee82ee
  ]
  let num = 0
  setInterval(function() {
    num++
    if(num > colors.length) num = 0
    rainbowrole.setColor(colors[num])
  }, 3000)
}