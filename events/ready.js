const fs = require('fs')
const discord = require('discord.js')
exports.run = async (bot) => {
  let rainbowrole = bot.guilds.get('619582468076470292').roles.find(r => r.name === 'Rainbow')
  let colors = [
  0xe6194B,
  0x3cb44b,
  0xffe119,
  0x4363d8,
  0xf58231,
  0x911eb4,
  0x42d4f4,
  0xf032e6,
  0xbfef45,
  0xfabebe,
  0x469990,
  0xe6beff,
  0x9A6324,
  0xfffac8,
  0x800000,
  0xaaffc3,
  0x808000,
  0xffd8b1,
  0x000075,
  0xa9a9a9,
  0xffffff,
  0x000000
  ]
  let num = 0
  setInterval(function() {
    num++
    if(num > colors.length) num = 0
    rainbowrole.setColor(colors[num])
  }, 3000)
}