const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('pong');
  	}
});

client.on('message', message => {
    if (message.content === '%clientreboot') {
    	message.channel.send('Rebooting instances...');
  	}
});

client.on('message', message => {
    if (message.content === '%clientsubsetup') {
    	message.channel.send('Initializing instances...');
  	}
});

client.on('message', message => {
    if (message.content === '%clientfinalize') {
    	message.channel.send('Initialization finalized.');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
