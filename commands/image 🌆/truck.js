
const Discord = require('discord.js')
const truck = require('discord-trucks');

module.exports = {
    name: "truck",
    category: "image", 
    description: "Give a random truck image",

    async run (client, message, args) {

        const embed = new Discord.MessageEmbed()
        .setImage(truck.randomTruck())
        .setColor("RANDOM")

        message.channel.send(embed)
    }
}
