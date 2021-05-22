const { MessageEmbed } = require('discord.js');
const reactions = ['😅', '🙂', '🤔']; //Change bot's reactions
const answers = ['Yes', 'Of Course', 'Maybe', 'No', 'Impossible'];//Change bot's answers 

module.exports = {
  name: '8ball',
  category: 'fun', 
  description: 'Ask the bot a Yes/No question and wait for the answer',
  run: async (client, message, args) => { 
    const question = args.join(' ');
    if (!question) return message.channel.send('**🥱 - You Didn\'t Ask Me Anything .**');
    const botans = new MessageEmbed()
      .setThumbnail(message.guild.iconURL())
      .setColor('RANDOM')
      .setTitle(`${client.user.username}'s 8Ball Game:`)
      .setDescription(`${message.author} Asked Me: \n\`${question}?\` \nAnd My Answer Is: \n**${reactions[Math.floor(Math.random() * reactions.length)]} - ${answers[Math.floor(Math.random() * answers.length)]} !**`)
      .setFooter('This Game Is Made For Fun Only .');
      message.channel.send(botans).then(() => message.delete());
  }
}