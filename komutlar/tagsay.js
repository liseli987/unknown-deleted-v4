const Discord = require('discord.js');

exports.run = (client, message, args) => {
  var tagdakiler = 0;
  let tag = "𐌞";
  message.guild.members.cache.forEach(member => {
    if(member.user.username.includes(tag)) {
      tagdakiler = tagdakiler+1
    }
  })
  message.channel.send("𐌞 " + tagdakiler + " Kişi tagımızı almıştır. <a:vkral:796158981114429470> ")
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tagdakilerisay","tagsay"]
};

exports.help = {
  name: 'tag-say',
  description: 'Tagdaki Kullanıcıları Sayar!',
  usage: ''
};