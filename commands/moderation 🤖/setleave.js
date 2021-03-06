const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setleave",
  category: "moderation",
  usage: "setleave <#channel>",
  description: "Set the leave channel",
  run: (client, message, args) => {
    
    let channel = message.mentions.channels.first()
    
    if(!channel) {
      return message.channel.send("Please Mention the channel first")
    }
    
    //Now we gonna use quick.db
    
    db.set(`leavechannel_${message.guild.id}`, channel.id)
    
    message.channel.send(`Leave Channel is seted as ${channel}`)
  }
}