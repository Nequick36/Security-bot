const Discord = require('discord.js')

module.exports.run = async(client, message, args) => {
    var choices = [
        '● **Sigurno je**',
        '● **To je definitivno tako**',
        '● **Bez sumnje**',
        '● **Da definitivno**',
        '● **Možete osloniti na njega**',
        '● **Možete računati na to**',
        '● **Kao što ja vidim, da**',
        '● **Najverovatnije**',
        '● **Izgled dobro**',
        '● **Da**',
        '● **Znakovi ukazuju na da**',
        '● **Apsolutno**',
        '● **Odgovor je maglovit pokušajte ponovno**',
        '● **Pitajte kasnije**',
        '● **Bolje da ti ne kažem sada**',
        '● **Koncentrišite se i pitajte ponovo**',
        "● **Ne računaj na to**",
        '● **Moj odgovor je ne**',
        '● **Moji izvori kažu ne**',
        '● **Veoma sumnjivo**',
        "● **Šanse nisu dobre**",
        "● **Dobro je ako je tako**",
        "● **Dobro sam ti?**",
        "● **100% **",
        "● **Ne**"

        
    ]
    var embed = new Discord.RichEmbed()
    .setAuthor('MOON 8ball','http://www.pngmart.com/files/3/8-Ball-Pool-PNG-Photos.png')
    .setThumbnail('https://vignette.wikia.nocookie.net/uncyclopedia/images/4/40/8ball.png/revision/latest?cb=20131030182451')
    .setDescription(`${choices[Math.floor(Math.random() * choices.length)]}`)
    .setColor("RANDOM")

    message.channel.send(embed)
}
module.exports.help = {
 name: "8ball",
 aliases: [],
}