const Discord = require('discord.js');
const bot = new Discord.Client();
bot.on('ready', function() {
    bot.user.setUsername("iOS");
}
client.login(process.env.BOT_TOKEN);
