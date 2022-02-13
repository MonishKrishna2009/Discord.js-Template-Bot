const Ascii = require("ascii-table");
const { Client } = require("discord.js");
const mongoose = require("mongoose");
const { Database } = require("../../config.json");

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
        
        let totalCommands = 0
        client.commands.forEach((cmd) => {
            totalCommands++
        })
        const activites = [
            {name: `${client.guilds.cache.size} servers!`, type: "WATCHING"},
            {name: `${client.users.cache.size} users!`, type: "LISTENING"},
            {name: `${client.ws.ping}ms`, type: "LISTENING"},
            {name: `${totalCommands} commands!`, type: "LISTENING"},
        ]
        let activity = 0
        client.user.setPresence({status: "idle", activity: activites[0]})
        setInterval(() => {
            if(activity === activity.length) return activity = 0;
            activity++
            client.user.setActivity(activites[Math.floor(Math.random() * activites.length)])
        }, 1000 * 35);

        if(!Database) return;
        mongoose.connect(Database, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            const Table2 = new Ascii("Database Connected!").addRow(`DataUsed - infinity`)

            console.log(Table2.toString());
        }).catch ((err) => {
            console.log(err)
        });
    }
}