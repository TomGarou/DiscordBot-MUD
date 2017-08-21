const commando = require('discord.js-commando');

class Info extends commando.Command {
    constructor(client){
        super(client,{
            name: 'info',
            group: 'debug',
            memberName: 'info',
            description: 'Provides Essential Debug information.',
        });
    }
        async run(message, args) {
            message.reply("OK, Let me spill my deepest secrests to you " + message.author.username)
        }
}
module.exports = Info;