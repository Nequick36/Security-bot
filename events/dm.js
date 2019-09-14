if((message.channel.type === "dm" || message.channel.type === "group") && message.content.includes("feedback"))
    {
        message.author.send("Would you like to give feedback? (Yes/No)");
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, {max: 1, time: 30000});
        console.log(collector);
        collector.on('collect', newMessage => {
            if (newMessage.content.includes('yes') || newMessage.content.includes('Yes'))
            {
                message.author.send("Would you like to be anonymous? (Yes / No)");
                const anonCollect = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, {max: 1, time: 30000});
                var nameString = "ANONYMOUS";
                console.log(anonCollect);
                anonCollect.on('collect', anonMessage => {
                    if (anonMessage.content.includes('yes') || anonMessage.content.includes('Yes'))
                    {
                        message.author.send("Your name will be kept in confidentiality.");
                    }
                    else if (anonMessage.content.includes('no') || anonMessage.content.includes('No'))
                    {
                        message.author.send("What's your name? Please don't put anything stupid. ");
                        const nameCollect = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, {max: 1, time: 30000});
                        console.log(nameCollect);
                        nameCollect.on('collect', nameMessage => {
                            nameString = nameMessage.toString();
                        });
                    }
                });
                nameString += "\n\n";
                var responseString = "None.";
                message.channel.send("What would you like to give as feedback? You have 5 minutes to write whatever you need. (I highly recommend writing what you need to say before hand and pasting it into the chat with me) :");
                const responseCollect = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, {max: 1, time: 1000 * 60 * 5});
                console.log(responseCollect);
                responseCollect.on('collect', responseMessage => {
                    responseString = responseMessage.toString();
                });
                message.channel.send("Wonderful! Thanks for your feedback! Your message will be sent to the Protocol Officer for review. Have a wonderful day! :smile: :heart: ");
                nameString += responseString;
               
            }
            else if (newMessage.content.includes('no') || newMessage.content.includes('No'))
            {
                message.author.send("Then have a great rest of your day! Here's a cat picture to make you feel wonderful! :smile: :heart:");
            }
        });
    }