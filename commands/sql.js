const Discord = require("discord.js")
const sqlite = require('sqlite3').verbose()
var fs = require('fs');

module.exports.run = async (bot, message, args) => {

  if(!message.member.roles.has(message.guild.roles.find(r => r.name === '*').id)) return message.channel.send('** :x: VI NEMATE DOZVOLU DA KORISITE OVU KOMANDU :x: **')
  var dbFile = './database.sqlite';
  var dbExists = fs.existsSync(dbFile);

  if (!dbExists) {
      fs.openSync(dbFile, 'w');
  }

  var db = new sqlite.Database(dbFile);
  let code = args.join(" ")
  let output = ``
  db.each(code, (err, row) => {
    if(!row) return message.channel.send(`\`\`\ Error while executing this command!\`\`\``)
 output+= `${row.userID} - ${row.balance}\n` 
})
  db.close();
  message.channel.send(`\`\`\`${output || "Error"}\`\`\``)

}

module.exports.help = {
  name: "sql",
  aliases: [],
  perm: "ADMINISTRATOR",
  role: "*",
  group:"Developer"
}