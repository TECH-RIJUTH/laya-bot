const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('Chat' ,{type:"WATCHING"});
});

client.on('messageCreate', message => {
  if (message.content === 'ping') {
    message.channel.send('pong');
  }
});

client.on('messageCreate', message => {
  if (message.content === 'sukkano laya') {
    message.channel.send('ada sukkam ann ninik sukkam ano');
  }
});

client.on('messageCreate', message => {
  if (message.content === 'ayine') {
    message.channel.send('ayine ippam entha ..onula ');
  }
});

client.on('messageCreate', message => {
  if (message.content === 'olaka') {
    message.channel.send('vala panikum poda');
  }
});

client.on('messageCreate', message => {
  if (message.content === 'i love you') {
    message.channel.send('i love you too');
  }
});

client.on('messageCreate', message => {
  if (message.content === 'how are you laya') {
    message.channel.send('fine da , how are you');
  }
});

client.on('messageCreate', message => {
  if (message.content === 'food kayicha') {
    message.channel.send('aa kayichu ,nee kayicha');
  }
});

client.on('messageCreate', message => {
  if (message.content === 'veed evideya') {
    message.channel.send('kuthiravattam');
  }
});

client.on('messageCreate', message => {
  if (message.content === 'aa kayichu') {
    message.channel.send('mm');
  }
});

client.on('messageCreate', message => {
  if (message.content === 'what are you doing') {
    message.channel.send('chilling');
  }
});

client.on('messageCreate', message => {
  if (message.content === 'enthadi myree') {
    message.channel.send('enthda myreeee');
  }
});

client.on('messageCreate', message => {
  if (message.content === 'lol') {
    message.channel.send('hahaha');
  }
});

client.on('messageCreate', message => {
  if (message.content === 'bye') {
    message.channel.send('byee see you');
  }
});

client.on('messageCreate', message => {
  if (message.content === 'ok') {
    message.channel.send('ookk');
  }
});

client.on('messageCreate', message => {
  if (message.content === 'hello') {
    message.channel.send('hellooo');
  }
});

client.on('messageCreate', message => {
  if (message.content === 'Hi') {
    message.channel.send('Hellooooooo');
  }
});

client.on('messageCreate', message => {
  if (message.content === 'hi') {
    message.channel.send('Hellooooooo');
  }
});

client.on('messageCreate', message => {
  if (message.content === 'sukkam') {
    message.channel.send('Hmm');
  }
});

client.on('messageCreate', message => {
  if (message.content === 'how are you') {
    message.channel.send('fine..');
  }
});

client.login(process.env.DIS_TOKEN);
