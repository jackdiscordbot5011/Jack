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
    if (message.content === '%devannouncementinitiate') {
        message.channel.send('<@&428010525410983937> The **iOS 11.4 Developer Beta 2** is now available. Here is a guide on how to get them: https://developer.apple.com/support/beta-software/install-ios-beta/');
      }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
