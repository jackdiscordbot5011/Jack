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
    if (message.content === '%devannouncement') {
        message.channel.send('<@&434793404459778058> The **iOS 11.4 Developer & Public Beta 1** are now available. Here is a guide on how to get them: https://developer.apple.com/support/beta-software/install-ios-beta/');
      }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
