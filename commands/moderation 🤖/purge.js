module.exports = {
    name : "clear",
    category: "moderation", 
    aliases : ["purge"],
    run : async(client, message, args) => {
        if(!args[0]) return message.channel.send('Please specify a number of messages to delete ranging from 1 - 100')
        if(isNaN(args[0])) return message.channel.send('Numbers are only allowed')
        if(parseInt(args[0]) > 100) return message.channel.send('The max amount of messages that I can delete is 100')
        await message.channel.bulkDelete(parseInt(args[0]) + 0)
            .catch(err => console.log(err))
        message.channel.send('*```Deleted ' + args[0]  + " messages.```*")
    }
}