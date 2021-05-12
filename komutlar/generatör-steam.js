const Discord = require("discord.js");
const client = new Discord.Client();
const steam = require('../generatör/steam.json');

exports.run = (client, message) => {

message.channel .send("*Dm Kutunu Kontrol Edermisin Lütfen :)*")
message.author.send("Hemen Generatör 1 Saniye..").then(message => {
let gönderR = new Discord.MessageEmbed()
    var steamdm = steam
    var steamdm = steamdm[Math.floor(Math.random() * steamdm.length)];
    message.edit(`${steamdm}`);
    message.author.send(gönderR)
  
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "generatör-steam",
  description: "generatör call-of-duty",
  usage: "generatör-valorant",
  cooldown: 600
};