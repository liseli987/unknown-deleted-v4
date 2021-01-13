const Striga = require('discord.js')
const datab = require('quick.db')

exports.run = async (client, message, args) => {
  
 if(!message.member.roles.cache.some(r => ["ROL ID"].includes(r.id)));
 const uyarırol = message.guild.roles.cache.find(r => r.id === "ROL ID")
  
//
  
  let kullanıcı = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  if(!kullanıcı) return message.channel.send(`Kime uyarı vermemi istiyorsun? <:bylendim:796059985431232573>`)
  
//
  
  datab.add(`uyari.${kullanıcı.id}`, 1)
  let toplamuyari = datab.fetch(`uyari.${kullanıcı.id}`)
  
//
  
  let sebep = args[1]
  if(!sebep) return message.channel.send(`Bir Sebep Belirt.`)
  kullanıcı.roles.add(uyarırol)
  
//
  
  const uyarımesaj = new Striga.MessageEmbed()
  .setAuthor('Uyarı')
  .setDescription(`${kullanıcı} Adlı Kullanıcı \`${sebep}\` Sebebiyle Uyarıldı.`)
  .setFooter(`Bu Kullanıcı ${toplamuyari} Kez Uyarıldı`)
  .setColor(`#ff0000`)
  message.channel.send(uyarımesaj)
  
//
  
  kullanıcı.send(`**${message.guild.name}** Sunucusunda \`${sebep}\` Sebebiyle uyarıldın. <a:duyuru1:794761020514107402> \n\n Toplam \`${toplamuyari}\` Kez uyarılmışsın.<a:dnendisko:796159040665157675>`)
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["uyarı"],
  permLevel: 0,
}

exports.help = {
  name: "uyar"
};