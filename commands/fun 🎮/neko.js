const discord = require("discord.js")

const client = new discord.Client()

const random = require("something-random-on-discord").Random

module.exports = {
  name: "neko",
   category: "fun",
  
  description: "Get Fresh Neko Images :D",
run: async (client, message, args) => {
  
    let data = await random.getNeko()
    message.channel.send(data)
  
}
}