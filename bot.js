const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'wm1') {
    	message.channel.send({embed:{
            title:"Device Role Assignment",
            description:"React with each of the devices you have by clicking on the corresponding device icon below.",
            color: 0xFFF7F7
        }})
  	}
});

client.on('message', message => {
    if (message.content === 'wm2') {
    	message.channel.send({embed:{
            title:"Device Color",
            description:"React with one or more of the following icons to assign device color roles.",
            color: 0xFFF7F7
        }})
  	}
});

client.on('message', message => {
    if (message.content === 'wm3') {
    	message.channel.send({embed:{
            title:"Capacity Roles",
            description:"React with one or more of the following icons to assign device capacity roles.",
            color: 0xFFF7F7
        }})
  	}
});

client.on('message', message => {
    if (message.content === 'wm4') {
    	message.channel.send({embed:{
            title:"Server News",
            description:"React to the following message to receive news related to this Discord server.",
            color: 0xFFF7F7
        }})
  	}
});

client.on('message', message => {
    if (message.content === 'wm5') {
    	message.channel.send({embed:{
            title:"ATTENTION",
            description:"**If you've just joined the server, you will have to wait** __**10 minutes**__ **before you can react.**",
            color: 0xFFF7F7
        }})
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
