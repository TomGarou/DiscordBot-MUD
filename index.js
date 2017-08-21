//Main program that handles the front end of IO

const commando = require('discord.js-commando');
const sqlite = require('sqlite');
const bot = new commando.Client({owner: '229785330683740160'});
const path = require("path")

//Setting up commands and what to call them
bot.registry.registerGroup('random','Random');
bot.registry.registerGroup('math','Math');
bot.registry.registerGroup('debug','Debug');
//bot.registry.registerGroup('game',"Game");
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname+'/commands');

//Setting up SQL provider.
//db = new sqlite.Database(__dirname+"/BotSettings");
//db = new commando.SQLiteProvider(db);
console.warn(path.join(__dirname+"\\BotSettings\\","settings.sqlite3"));
console.warn(path.join(__dirname,"settings.sqlite3"));
bot.setProvider(
    sqlite.open(path.join(__dirname+"\\BotSettings\\","settings.sqlite3")).then(db => new commando.SQLiteProvider(db))
    
).catch(console.error);

bot.on('message',(message) => {

    });

bot.login('MzMzMzYwMDI2NzAzODg4Mzg0.DELiIw.ldChs8EOIn62mXnC3nRruvRZqiY');

  /*if(message.content == 'Woof'){
        message.channel.sendMessage('ArrWooWoo!~'); */