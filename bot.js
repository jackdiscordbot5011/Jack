const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'config.reboot') {
    	message.channel.send({embed: {
    color: 3447003,
    title: "Initial setup",
    description: "Initializing sequence..",
    footer: 
    {
        text: "Footnote ©"
    }

});
    
client.login(process.env.BOT_TOKEN);
