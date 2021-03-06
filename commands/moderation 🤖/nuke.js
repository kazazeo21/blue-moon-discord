const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "nuke",
    description: "Nukes a given channel",
    usage: "nuke <rsn>",
    category: "utility",
    run: async(client, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.reply("You do not have the perms to use this cmd! missing perms: `ADMINISTRATOR`")
        }
        let reason = args.join(" ") || "No Reason :/"
        if(!message.channel.deletable) {
            return message.reply("This channel cannot be nuked! what are you thinking?")
        }
        let newchannel = await message.channel.clone()
        await message.channel.delete()
        let embed = new MessageEmbed()
        .setTitle(`BOOM💣! \`channel ${message.channel.name}\` **has been NUKED**`)
        .setDescription(reason)
        .setImage('https://cdn.discordapp.com/attachments/811143476522909718/819507596302090261/boom.gif')
        await newchannel.send(embed)
    }
}
