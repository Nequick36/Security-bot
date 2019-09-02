const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let jokes = [
"What did the the drummer call his twin daughters? Anna one, Anna two!",
"What do you call a bear without any teeth? A gummy bear!",
"Does anyone need an ark? I Noah guy!",
"How did Darth Vader know what Luke got him for Christmas? He felt his presents!",
"Why didn’t the astronaut come home to his wife? He needed his space.",
"What did the blanket say as it fell off the bed? Oh sheet!",
"I was sitting in traffic the other day. Probably why I got run over.", 
"A communist joke isn’t funny... unless *everyone* gets it.",
" I can swallow two pieces of string and when they come out the other end, they'll be tied together. I shit you knot.",
"My friend entered a pun contest. He entered ten, figuring at least one of them would win, but no pun in ten did.",
"Why don’t crabs donate? Because they're shelfish.",
" 'You.' ",
"If laughter is the best medicine, your face must be curing the world.",
"I could pick up more women off Tinder by posting a picture of my shit than using a picture of your face.",

// `\`\`\`Error: Cannot find module \'MemeLoader'
//     at Function.Module._resolveFilename (internal/modules/cjs/loader.js:580:15)
//     at Function.Module._load (internal/modules/cjs/loader.js:506:25)
//     at Module.require (internal/modules/cjs/loader.js:636:17)
//     at require (internal/modules/cjs/helpers.js:20:18)
//     at Object.<anonymous> (/Users/user/Documents/prod/MemeLoader.js)
//     at Module._compile (internal/modules/cjs/loader.js:688:30)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:699:10)
//     at Module.load (internal/modules/cjs/loader.js:598:32)
//     at tryModuleLoad (internal/modules/cjs/loader.js:537:12)
//     at Function.Module._load (internal/modules/cjs/loader.js:529:3)\`\`\``
]
  let chance = Math.floor(Math.random() * jokes.length)
  message.channel.send(jokes[chance]);
}

module.exports.help = {
  name: "joke",
  aliases: [],
  perm: "",
  role: "",
  group: "simple"
}


