const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "-";
client.on("message", message => {

            if (message.content.startsWith(prefix + "himox")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : @HiMoxY™#1027`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : @HiMoxY™#1027  ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`-himox |@HiMoxY™`,"https://www.twitch.tv/himoxytm")
client.user.setStatus("dnd")
});



client.login("NDQwNTM1NTQxODI2NDUzNTA0.DcjINw.eAj84arcjVWHn7kq-O8rbxT-FtI");
