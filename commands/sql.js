const Discord = require("discord.js")
const sqlite = require('sqlite3').verbose()
var fs = require('fs');

module.exports.run = async (bot, message, args) => {

  var dbFile = './database.sqlite';
  var dbExists = fs.existsSync(dbFile);

  if (!dbExists) {
      fs.openSync(dbFile, 'w');
  }

  var db = new sqlite.Database(dbFile);
  
  message.guild.members.forEach(member => {
    
  })

  db.close();

}

module.exports.help = {
  name: "sql",
  aliases: [],
  description: "Runs a sql code.",
  perm: "ADMINISTRATOR",
  role: "GH Bot Developer",
  group:"Developer"
}