exports.run = async (client, message, args) => {
    const newName = message.content.split(' ');

    if(!message.member.hasPermission("ADMINISTATOR")){
        return message.channel.send("| :x: | **__Vi Nemate dozvolu za ovu komandu__** | :x: |");
    }
    
    try{
               client.user.setAvatar(newName[1])
            .then(user => message.channel.send(`My new avatar url is: **${user.avatar}**`))
            .catch(console.error);
    }
    catch(error){
        message.channel.send("I could not set my new avatar :sob:");
    }
}
module.exports.help = {
  name: "setbotavatar",
  aliases: ['Setbotavatar'],
  perm: "ADMINISTRATOR",
  role: "*",
  group:"Leveling"
}
