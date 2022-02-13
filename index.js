const { Client, Collection } = require("discord.js");
const client = new Client({intents: 32767});
const { Token } = require("./config.json");

client.commands = new Collection()

require("./Handlers/Events")(client);
require("./Handlers/commands")(client);


client.login(Token);