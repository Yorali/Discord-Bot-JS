const commando = require('discord.js-commando');

// Extends adds more functionality to an already existing function
class DiceRollCommand extends commando.Command {
    // Called when command is constructed
    constructor(client) {
        // Tells Command it is being created
        super(client, {
            // Info about command in object-form
            name: 'roll',
            group: 'random',
            memberName: 'roll',
            description: 'Rolls a die',
            // ex of how to call command
            examples: ['!roll']
        });
    }
    
    // Everytime command is run
    async run(message, args) {
        var roll = Math.floor(Math.random() * 7) + 1;
        message.reply("You have rolled a " + roll);
    }
}

// Needed to export function so that bot can utilize properly
module.exports = DiceRollCommand;