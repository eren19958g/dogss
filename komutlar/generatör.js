const AsreaperDiscord = require('discord.js');
const AsreaperClient = new AsreaperDiscord.Client();
const ayarlar = require('../ayarlar.json');
let Prefix = ayarlar.prefix

exports.run = (client, message) => {
 const HepBeleş = new AsreaperDiscord.MessageEmbed()
  .setColor(0xff000)
 .setAuthor(`${client.user.username} | Generatör Yardım Menüsü`)
 .setDescription(`
------------------Generatör------------------
**${Prefix}generatör-minecraft** \n-> Yakında
**${Prefix}generatör-call-of-duty** \n-> Yakında
**${Prefix}generatör-valorant** \n-> Yakında 
**${Prefix}generatör-steam** \n-> Yakında


`)
 .setFooter(``)
 .setTimestamp()
 message.channel.send(HepBeleş)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'generatör',
  description: 'Generatör ile ilgili bilgi verir.',
  usage: 'generatör',
  cooldown: 5
};