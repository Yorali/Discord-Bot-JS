const commando = require('discord.js-commando');
const bot = new commando.Client();

// Adds +1 to death-toll for individual user, and informs user of
// their individual deaths
// Return 'UserName' has died X times

var count = 0;

function User(username, deathCount) {
    this.username = username;
    this.deathCount = deathCount;
};

var deadman = {
    name: 'death',
    group: 'stats',
    memberName: 'death count',
    description: 'Informs of how many times one has died',
    examples: ['!death']
};

class DeathCountCommand extends commando.Command {
    constructor(client) {
        super(client, deadman);
    }

    async run(message, args) {
        var user = new User(bot.user.username, 0);
        user.deathCount += 1;
        message.reply("You have died " + user.deathCount + " times...")
    }
}

module.exports = DeathCountCommand;