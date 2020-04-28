const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "?";
client.on("message", message => {

            if (message.content.startsWith(prefix + "dm")) {
                         if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("❌ Finded an error❌");
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== '').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== '').size}\` ✔ Will dm this "MESSAGE" to everyone! ✔ `); 
 message.delete(); 
};     
});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}! on ${client.guilds.size}`);
  client.user.setGame(`Watching Pornhub`)
client.user.setStatus("dnd")
});


client.login(process.env.BOT_TOKEN);
