const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let mapping = {
    ' ': '   ',
    '0': ':zero:',
    '1': ':one:',
    '2': ':two:',
    '3': ':three:',
    '4': ':four:',
    '5': ':five:',
    '6': ':six:',
    '7': ':seven:',
    '8': ':eight:',
    '9': ':nine:',
    '!': ':grey_exclamation:',
    '?': ':grey_question:',
    '#': ':hash:',
    '*': ':asterisk:',
    '$': ':heavy_dollar_sign:'
}
  'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
    mapping[c] = mapping[c.toUpperCase()] = ` :regional_indicator_${c}:`;
});
  if(args < 1) return message.channel.send('Please provide some text!')
      message.channel.send(
        args.join(' ')
            .split('')
            .map(c => mapping[c] || c)
            .join('')
    );
}

module.exports.help = {
  name: "emojify",
  aliases: [],
  perm: "",
  role: "",
  group:"SIMPLE"
}
