const Discord = require('discord.js');
exports.run = function(client, message, args) {
  message.reply('Merhaba! **' + client.ping + '** ms');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'Merhaba',
  description: 'Botla selamlaşmanızı sağlar !',
  usage: 'merhaba'
};
