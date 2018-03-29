const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '%clientconfiguremsg1') {
    	message.channel.send('React with each of the platforms you play on by clicking on the corresponding platform icon below.');
  	}
});

client.on('message', message => {
    if (message.content === '%clientconfiguremsg2') {
    	message.channel.send('React with one or more of the following icons to assign game-based roles.');
  	}
});

client.on('message', message => {
    if (message.content === '%clientconfiguremsg3') {
    	message.channel.send('React to the following message to receive server news.');
  	}
});

client.on('message', message => {
    if (message.content === '%clientconfiguremsg4') {
    	message.channel.send('React to the following message to receive news related to r/gaming.');
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
