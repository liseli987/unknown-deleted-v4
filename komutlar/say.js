//SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA
const { MessageEmbed } = require("discord.js");
// module.exports.onLoad = (client) => {}
module.exports.run = (client, message, args) => {
  
  if(!['709069702659309568'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new MessageEmbed().setColor('RED').setAuthor(`Başarısız !`).setDescription(`Bu Komutu Kullanmak İçin Yetkiniz Bulunmamakta <a:no:776484326215909427> \n \`u!ban @Etiket Sebep\` `))


  let tag = "𐌞";
  const booster = message.guild.roles.cache.get("733987502335066165").members.size
  const online = message.guild.members.cache.filter(u => u.presence.status != "offline").size
  const ttag = message.guild.members.cache.filter(m => m.user.username.includes(tag)).size
  const toplam = message.guild.memberCount
  const ses = message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.size).reduce((a, b) => a + b) 

  const embed = new MessageEmbed()
  .setTimestamp()
  .setColor('#ff0000')
  .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
  message.channel.send(embed.setDescription(`**Toplam Üye  ・ ${toplam}
  Aktif Üye ・ ${online}
  Taglı Üye ・ ${ttag}
  Booster Üye ・${booster}
  Sesteki Üye ・${ses}**`));
};

  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["say"],
  permLvl: 0,
}

  exports.help = {
  name: 'say'
}

//SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA