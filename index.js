const { token } = require("./config.json");
const discord = require("discord.js");
const express = require("express");
const WOKCommands = require("wokcommands");
const mongoose = require("mongoose");
const app = express();
const db = require("quick.db");
require("dotenv").config;
app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.listen(process.env.PORT);
const client = new discord.Client({
  disableEveryone: true
});

// Init discord giveaways
const { GiveawaysManager } = require("discord-giveaways");
// Starts updating currents giveaways
const manager = new GiveawaysManager(client, {
    storage: "./handlers/giveaways.json",
    updateCountdownEvery: 10000,
    default: {
        botsCanWin: false,
        exemptPermissions: [ "MANAGE_MESSAGES", "ADMINISTRATOR" ],
        embedColor: "#FF0000",
        reaction: "🎉"
    }
});
// We now have a giveawaysManager property to access the manager everywhere!
client.giveawaysManager = manager;
client.commands = new discord.Collection();
client.aliases = new discord.Collection();
["command", "events"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
}); 
client.login(token);
