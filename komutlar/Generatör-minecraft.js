const Discord = require("discord.js");
const client = new Discord.Client();
const minecraft = require('../generatör/minecraft.json');


exports.run = (client, message, ) => {
  
message.channel .send("*Dm Kutunu Kontrol Edermisin Lütfen :)*")
message.author.send("Hemen Generatör 1 Saniye..").then(message => {
let gönderR = new Discord.MessageEmbed()
    var minecraftdm = minecraft
    var minecraftdm = minecraftdm[Math.floor(Math.random() * minecraftdm.length)];
    message.edit(`${minecraftdm}`);
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
  name: "generatör-minecraft",
  description: "generatör-minecraft"
};