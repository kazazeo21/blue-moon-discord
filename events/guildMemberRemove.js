const db = require("quick.db")
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
const discord = require("discord.js")


module.exports.run = async (client, member) => {
  let chx = db.get(`leavechannel_${member.guild.id}`);

  if (chx === null) {
    return;
  }

  
   let data = await canva.welcome(member, { link: "https://cdn.discordapp.com/attachments/809744236324192259/814539108259987516/20210225_234716.jpg" })
 
    const attachment = new discord.MessageAttachment(
      data,
      "leave-image.jpg"
    );
  
  


  client.channels.cache.get(chx).send(`<@${member.id}> Leave in **${member.guild.name}**, We now have **${member.guild.memberCount}** members!`, attachment);
}