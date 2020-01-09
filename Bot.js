const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
client.on("message", message => {

            if (message.content.startsWith(prefix + "broad")) {
                         if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("❌ «⁅Aurora⁆» Finded an error❌");
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== '').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== '').size}\` ✔ «⁅Aurora⁆» Will dm this "MESSAGE" to everyone! ✔ `); 
 message.delete(); 
};     
});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}! on ${client.guilds.size}`);
  client.user.setGame(`FREE BOT BUY PREMIUM TO CHANGE NAME AND CUSTOM STATUS`)
client.user.setStatus("dnd")
});


client.login("NjY0ODcxNDkwMDgwMDc5ODcz.XhdbVw.qUXWZ2KtT8YCQ10TNyRS-7qqsBM");