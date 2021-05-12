const Discord = require("discord.js");
const client = new Discord.Client();
const valorant = require('../generatör/valorant.json');

exports.run = (client, message) => {

message.channel .send("*Dm Kutunu Kontrol Edermisin Lütfen :)*")
message.author.send("Hemen Generatör 1 Saniye..").then(message => {
let gönderR = new Discord.MessageEmbed()
    var valorantdm = valorant
    var valorantdm = valorantdm[Math.floor(Math.random() * valorantdm.length)];
    message.edit(`${valorantdm}`);
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
  name: "generatör-valorant",
  description: "generatör call-of-duty",
  usage: "generatör-valorant",
  cooldown: 600
};