const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
 let Embed = new Discord.RichEmbed()
    let profilepic = message.author.avatarURL;

    message.channel.send({
        file: {
            attachment: "https://cute-api.tk/v1/generate/triggered?url=" + profilepic,
            name: "triggered.gif"
        }
    });
};
module.exports.help = {
    name: "triggered",
    aliases: ["Rriggered"]
};