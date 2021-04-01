const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('V2 ye Ne kaldı ? Hadi Diyin Ekliyin Botu Sunucununuza ');
  message.delete();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'v2',
  description: '',
  usage: 'v2 [V2 ye Ne kaldı ? Hadi Diyin Ekliyin Botu Sunucununuza ]'
};
//Liderizm Scripts LUA JS HTLM Developer 