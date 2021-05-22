const Discord = require('discord.js')

module.exports = {
name: "ban",
aliases: [],
category: "Moderation",
usage: "ban <@user> [reason]",
description: "ban a user from the guild.",
run: async (client, message, args) => {
    
        let user = message.mentions.users.first();
        let reasonban = message.content.split(' ').slice(2).join(' ');
        let guild = message.guild;
        let memberban = message.guild.member;
    
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`You Require BAN MEMBERS Permission to Execute this Command`)
    
     if (message.mentions.users.size < 1) {
            return message.channel.send('You need to mention someone to ban!');
        }
    
     if (!reasonban)  {
            reasonban = "No Reason Given"
        }
    
    if (!message.guild.member(user).kickable) {
            return message.channel.send("That Member couldn't be banned due to role hierarchy");
        }
    
    message.guild.member(user).ban();
    
    let embed = new Discord.MessageEmbed()
    .setTitle("User Was Successfully banned")
    .setDescription(`${user.username}#${user.discriminator} was banned by ${message.author.username}`)
    .addField(`Reason :-`, `${reasonban}`)
    .setColor("RANDOM")
    message.channel.send(embed)
    
     let DmEmbed = new Discord.MessageEmbed()
    .setDescription(`You were banned from ${guild}`)
    .addField(`Moderator:`, `${message.author.username}`) 
    .addField(`Reason :-`, `${reasonban}`) 
    .setColor("RANDOM")
    .setTimestamp() 
    user.send(DmEmbed)
  }
}