const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

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
        message.reply('@Announcement The **iOS 11.4 Developer & Public Beta 1** are now available. Here is a guide on how to get them: https://developer.apple.com/support/beta-software/install-ios-beta/');
      }
});

client.on('message', message => {
    if (message.content === 'disabled176') {
    	message.channel.send({embed:{
            title:"Need help?",
            description:"Go to **#help-and-support** and leave a message containing your issue/request and ping **@Support Team**",
            color: 0x8c98ff
        }})
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
