const { Client, Collection } = require("discord.js");

module.exports={
    name: 'interactionCreate',
 
    async execute(interaction, bot){
        if(!interaction.isCommand()) return;
        if(!interaction.channel.permissionsFor(interaction.guild.me).toArray().includes('SEND_MESSAGES')) return;
        if(!interaction.channel.permissionsFor(interaction.guild.me).toArray().includes('READ_MESSAGE_HISTORY')) return;
        if(!interaction.channel.permissionsFor(interaction.guild.me).toArray().includes('VIEW_CHANNEL')) return;
            const command = bot.commands.get(interaction.commandName);
          
            if(command.requirements?.clientPerms && !interaction.guild.me.permissions.has(command.requirements.clientPerms)){
                return interaction.reply({content: `I am missing the following perms: ${missingPerms(interaction.guild.me, command.requirements.clientPerms)}`, ephemeral:true})
            };
            if(command.requirements?.userPerms && !interaction.member.permissions.has(command.requirements.userPerms)){
                return interaction.reply({content: `You are missing the following perms: ${interaction.member, command.requirements.userPerms}`, ephemeral:true})
            };

            if(command.requirements?.serverOwnerOnly && interaction.guild.ownerId !== interaction.member.id) return interaction.reply({content: 'Only the server owner can use this command.', ephemeral:true})
             try{
            command.execute(interaction, bot)
             }catch(error){
                 console.log(error)
             }
    }
}

const missingPerms = (member, perms)=>{
    const missingPerms = member.permissions.missing(perms)
    .map(str => `\`${str.replace(/_/g, ' ').toLowerCase().replace(/\b(\w)/g, char=> char.toUpperCase())}\``);

    return missingPerms.length > 1 ?
    `${missingPerms.slice(0, -1).join(", ")}, ${missingPerms.slice(-1)[0]}`:
    missingPerms[0]
};