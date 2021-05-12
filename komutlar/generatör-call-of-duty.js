const Discord = require("discord.js");
const client = new Discord.Client();
const callofduty = require('../generatör/call-of-duty.json');

exports.run = (client, message) => {

message.channel .send("*Dm Kutunu Kontrol Edermisin Lütfen :)*")
message.author.send("Hemen Generatör 1 Saniye..").then(message => {
let gönderR = new Discord.MessageEmbed()
    var callofdutydm = callofduty
    var callofdutydm = callofdutydm[Math.floor(Math.random() * callofdutydm.length)];
    message.edit(`${callofdutydm}`);
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
  name: "generatör-call-of-duty",
  description: "generatör call-of-duty",
  usage: "generatör-steam.js",
  cooldown: 600
};