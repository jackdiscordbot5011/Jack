const Discord = require('discord.js');
const bot = new Discord.Client();
bot.on('ready', function() {
    bot.user.setUsername("MyNewUsername");
}
bot.login("token");
