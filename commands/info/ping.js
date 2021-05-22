const discord = require("discord.js");

module.exports = {
  name: "ping",
  aliases: ["pong"],
  category: "info",
  usage: "ping",
  description: "Get the bot's ping!",
  run: async (client, message, args) => {
    let start = Date.now();

    message.channel
      .send({
        embed: { description: "Looks like the bot is slow.", color: "RANDOM" }
      })
      .then(m => {
        let end = Date.now();

        let embed = new discord.MessageEmbed()
          .setAuthor("Ping!", message.author.avatarURL())
          .addField("❤API Latency", Math.round(client.ws.ping) + "ms", true)
          .addField("💙Message Latency", end - start + "ms", true)
          .setTimestamp()
          .setColor("RANDOM");
        m.edit(embed).catch(e => message.channel.send(e));
      });
  }
};
