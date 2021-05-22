const discord = require("discord.js");


module.exports = {
  name: "invite",
  category: "info",
  description: "Get the invite link of the bot",
  run: async (client, message, args) => { 
  
    let embed = new discord.MessageEmbed()
    .setTitle('INVITE LINK OF BOT')
    .setDescription(`[CLICK HERE](https://discord.com/oauth2/authorize?client_id=771747649870626896&scope=bot&permissions=940056766)`)
    .setColor("RANDOM")
    .setFooter(`Bot made by Ade Fahrozi`)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel.send(embed)
    
    
  }
}