// const Discord = require('discord.js');
// const bot = new Discord.Client();


// A discord client that makes setting up commands easier
// Won't need lines 1-2 if using commando
const commando = require('discord.js-commando');
const bot = new commando.Client();

// Register a group of commands.
// Every command must be in a group
// Each command must be in folder named after group it's in

bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('stats', 'Stats');
// Registers default commands, such as help, and bot can message one with all commands it has
bot.registry.registerDefaults();
// __dirname = name of current directory
bot.registry.registerCommandsIn(__dirname + "/commands");



//Anytime a message is sent to any channel, this code runs
bot.on('message', (message) => {
    if (message.content == 'ping') {
        // Results in @User
        var userid = bot.user.id;
        message.reply(userid);
        // Results in general channel message. No @
        message.channel.sendMessage('pong');
    }
});

// Bot token goes here
// ボットのtokenをここに置く
bot.login('');

console.log('Working');