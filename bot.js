const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '%clientconfiguremsg1') {
    	message.channel.send({embed:{
            title:"Platform Role Assignment",
            description:"React with each of the platforms you play on by clicking on the corresponding platform icon below.",
            color: 0xFFF7F7
        }})
  	}
});

client.on('message', message => {
    if (message.content === '%clientconfiguremsg2') {
    	message.channel.send({embed:{
            title:"Game-Specific Roles",
            description:"React with one or more of the following icons to assign game-based roles.",
            color: 0xFFF7F7
        }})
  	}
});

client.on('message', message => {
    if (message.content === '%clientconfiguremsg3') {
    	message.channel.send({embed:{
            title:"Server Announcements",
            description:"React to the following message to receive server news.",
            color: 0xFFF7F7
        }})
  	}
});

client.on('message', message => {
    if (message.content === '%clientconfiguremsg4') {
    	message.channel.send({embed:{
            title:"/r/Gaming Announcements",
            description:"React to the following message to receive news related to r/gaming.",
            color: 0xFFF7F7
        }})
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
