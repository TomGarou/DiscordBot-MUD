const commando = require('discord.js-commando');

class Add extends commando.Command {
    constructor(client){
        super(client,{
            name: 'add',
            group: 'math',
            memberName: 'add',
            description: 'Combines numbers',
            examples: ['add 14 2 392 18']
        });
    }

    async run(message, args) {
        var params = args.split(" ");
        var counter = 0;
        var ans = 0;
        while (counter < params.length) 
            {
                if (isNaN( params[counter]))
                    {
                    message.reply("element #"+(counter+1)+"  wasn't a number, Canceling.");
                    counter = 99999999
                    }
                ans = ans+ parseInt(params[counter]);
                counter++;
                
            }
            if (counter < 99999999)
                {
                let fancy = "the sum of (";
                let rep = params[0];
                counter = 0;
                while (counter < params.length-1)
                    {
                        rep = rep +"+"+ params[counter];
                        counter++
                    }
                fancy = fancy + rep +") is ("+ans+")";
                //message.reply("The sum of (" + args +") is ("+ans+")");
                message.reply(fancy);
                message.reply("So for debugging the channel is called "+message.channel)
                //message.reply(message.channel,"/r "+rep)
                //message.client.user.send("Test");
                message.reply("Dont belive me? how about we ask Fate?")
                var options = {disableEveryone:false}
                //message.reply("/r "+rep,options)
                return message.say("<@209048672195969025>/r "+rep)
                
                }
    }
}

module.exports = Add;