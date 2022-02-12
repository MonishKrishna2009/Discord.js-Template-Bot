# Starter

## This is the starter lib fo a Discord Bot!

## How to install

First fork this repo and host it in your [Localhost](https://techterms.com/definition/localhost) or on any other hosting or a own [VPS](https://techterms.com/definition/vps) would help!

## Step-1
First of all after importing or pushing the files and folders type 
```bash
npm install 
```
which will install all the packages required. After that type 
```bash
node index.js
```
Which will start the Bot!

## Adding New Commands

For adding new commands the following format should be followed

```javascript
const { CommandInteraction } = require("discord.js");

module.exports = {
    name: "Ping",
    description: "Test CMD",
    permission: "ADMINISTRATOR",

    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        interaction.reply({content: "Pong!"})
    }
}
```

## Adding New Events

For adding new Events the following format should be followed

```javascript
const Ascii = require("ascii-table");
const { Client } = require("discord.js");

module.exports = {
    name: "ready",
    once: true,
    /**
     * 
     * @param {Client} client  
     * @returns 
     */
    execute(client) {
        const Table = new Ascii("Node Connected!").addRow(`Logged in as : RicoCozy#2460`).addRow(`Total-Servers - ${client.guilds.cache.size}`).addRow(`Total-Members - ${client.users.cache.size}`);
        console.log(Table.toString())
}
```
## Adding Database Structures

First of all go to the structures folder.

And in the Schema folder you can make a Database Structure there!

### Example

```javascript
const mongoose = require('mongoose');

const afkSchema = mongoose.Schema({
    Guild: String,
    User: String,
    Reason: String,
    Date: String
})

module.exports = mongoose.model('afkk', afkSchema)
```
##Handlers

We have our custom handelers. Thanks to [LYX](https://www.youtube.com/lyxcode) Who made the handler. this is the older version but i suggest to see his upcomming video for the new Handler!

When the bot starts the handlers outputes this

```
.-----------------------------------.
|           Events Loaded           |
|-----------------------------------|
| interactionCreate | ✔ Successful! |
| interactionCreate | ✔ Successful! |
| ready             | ✔ Successful! |
| guildMemberAdd    | ✔ Successful! |
| channelCreate     | ✔ Successful! |
| channelDelete     | ✔ Successful! |
| channelUpdate     | ✔ Successful! |
| emojiCreate       | ✔ Successful! |
| emojiDelete       | ✔ Successful! |
| emojiUpdate       | ✔ Successful! |
| roleCreate        | ✔ Successful! |
| roleDelete        | ✔ Successful! |
| roleUpdate        | ✔ Successful! |
| interactionCreate | ✔ Successful! |
| interactionCreate | ✔ Successful! |
| interactionCreate | ✔ Successful! |
| interactionCreate | ✔ Successful! |
'-----------------------------------'
.-------------------------------.
|       Commands Loaded!        |
|-------------------------------|
| help         | 🔹 SUCCESSFUL! |
| status       | 🔹 SUCCESSFUL! |
| userinfo     | 🔹 SUCCESSFUL! |
| botinfo      | 🔹 SUCCESSFUL! |
| channelinfo  | 🔹 SUCCESSFUL! |
| btnroles     | 🔹 SUCCESSFUL! |
| logs         | 🔹 SUCCESSFUL! |
| ticket-setup | 🔹 SUCCESSFUL! |
| welcomesetup | 🔹 SUCCESSFUL! |
'-------------------------------'
.--------------------------------.
|        Node Connected!         |
|--------------------------------|
| Logged in as : RageCode++#4984 |
| Total-Servers - 1              |
| Total-Members - 6              |
'--------------------------------'
.---------------------.
| Database Connected! |
|---------------------|
| DataUsed - infinity |
'---------------------'
```
## Credits

The main Credits goes to [Lyxcode](https://www.youtube.com/lyxcode) Who made the handlers and some amazing stuff through the project like the Handlers and more


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

##Copyright
©  Ragecode 2022
