const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let Invite = message.guild.channels.first().createInvite()
    let Owner = message.author;
    if(Owner.id !== "532659544791318540" && Owner.id !== "610107625383919616") return message.reply("Only the bot owner can use this command!") //you need to add your id and another one if you want
   
    const id = args.shift();
    const sayMessage = args.join(" ")
    if(!sayMessage) return message.reply("Pomoc: en!dm <id> <poruka>")
    

   let contact = new Discord.RichEmbed()
   .setColor("00ff00")
   .setThumbnail(Owner.displayAvatarURL) //User avatar will be display if you keep this line
   .addField("Mesage:", sayMessage)
   .setTimestamp()

    bot.users.get(id).send(contact);

    let chanemb = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setDescription(`Message sent to <@${id}>`);

    message.channel.send(chanemb).then(msg => {msg.delete(5000)});


        message.delete();

      }
      module.exports.help = {
        name: "dm",
        aliases: ["DM"]
      }