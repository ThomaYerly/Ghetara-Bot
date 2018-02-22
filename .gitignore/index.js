const Discord = require('discord.js')

const bot = new Discord.Client()

bot.on("ready", function() {
    bot.user.setGame("TutoBot, g-help");
    console.log("Le bot a bien ete connecte");
});

bot.login('NDE0MzgwNjE0Mjk3NTgzNjI4.DW8_fg.UlSYcIc4vgFt8DfQdyqJBsiONqU');
