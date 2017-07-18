  const Discord = require('discord.js');
  const music = require('discord.js-music-v11');
  const Bot = new Discord.Client();
  const token = "MzM2MjcwODE2NTE1OTgxMzIy.DE19wQ.XNIVAlwWq4Q9WR2-7UvYYBkmEhM" // Recommended to load from json file.

  Bot.on('ready', () => {
      console.log(`[Start] ${new Date()}`);
      Bot.user.setGame('O-onii-san... <3')
  });

  music(Bot);

  let PREFIX = '!';

  Bot.on('message', msg => {

    const message = msg.content.trim();

    // Check if the message is a command.
    if (message.toLowerCase().startsWith(PREFIX.toLowerCase())) {
      // Get the command and suffix.
      const command = message.substring(PREFIX.length).split(/[ \n]/)[0].toLowerCase().trim();
      const suffix = message.substring(PREFIX.length + command.length).trim();

      // Process the commands.
      switch (command) {

        case 'test':
          return test(msg, suffix);
        case 'ohayo':
          return ohayo(msg, suffix);
        case 'banho':
          return banho(msg, suffix);
        case 'sopa':
          return sopa(msg, suffix);
        case 'beijo':
          return beijo(msg, suffix);
        case 'say':
          return say(msg, suffix);
        case 'onii':
          return onii(msg, suffix);
        case 'ajuda':
          return ajuda(msg, suffix);
        default:
          msg.channel.send(basicembed('5351170', 'Comando errado ' + msg.author + ' b-baka...'));
      }
    }

    if ((/~lolicon/).test(message.content)) {
      const mention = message.mentions.users.first();
      message.channel.send({embed: {
        color: 5351170,
        description: mention.toString() + ", O-onii-san"
      }});
      message.delete().then(msg => console.log(`Deleted message from ${msg.author}`)).catch(console.error);
    }
  });



  function basicembed(color,text) {
    return {embed: {
      color: color,
      description: text
      }};
  }

  function imageembed(color,image,text) {
  return {embed: {
    "color": color,
    "description": text,
    "image": {
    "url": image}
    }};
}

  function ohayo(msg, suffix) {
    msg.delete();
    const mention = msg.mentions.users.first();
    msg.channel.send(basicembed('5351170', 'Ohayo ' + mention.toString()));
  }

  function isAdmin(member) {
    return member.hasPermission("ADMINISTRATOR");
  }

  function test(msg, suffix) {
    msg.delete();
    if (isAdmin(msg.member)) {
      msg.channel.send(basicembed('5351170', 'Com permissão, nha'));
    } else {
      msg.channel.send(basicembed('5351170', 'Sem permissão'));  
    }
  }

  function banho(msg, suffix) {
    msg.delete();
    const mention = msg.mentions.users.first();
    msg.channel.send(imageembed('5351170', 'https://68.media.tumblr.com/cbad86fd71e480486c1d6ef983a03b97/tumblr_o4jxlkyrMd1rc0rvzo1_500.png', mention.toString() + ' está dando banho na ' + Bot.user));
  }

  function beijo(msg, suffix) {
    msg.delete();
    const mention = msg.mentions.users.first();
    msg.channel.send(imageembed('5351170', 'https://i.ytimg.com/vi/_IRuDIsj3vE/maxresdefault.jpg', mention.toString() + ' deu beijo indireto na ' + Bot.user));
  }

  function say(msg, suffix) {
    msg.delete();
    msg.channel.send(basicembed('5351170', suffix));
  }

  function onii(msg, suffix) {
    msg.delete();
    msg.channel.send(basicembed('5351170', mention.toString() + ', O-onii-san'));
  }

  function ajuda(msg, suffix) {
    msg.delete();
    msg.channel.send({embed: {
      color: 3447003,
      author: {
        name: Bot.user.username,
        icon_url: Bot.user.avatarURL
      },
      title: "COMANDOS DA KITTY-CAT",
      description: "B-baka :heart: ",
      fields: [{
        name: "!banho @user",
        value: "@user da banho na Kitty"
      },
      {
        name: "RABBITÃO",
        value: "[Rabbit - iFonteSeca](https://www.rabb.it/ifonteseca) \r[Rabbit - MaVi](https://www.rabb.it/MaVi) "
      },
      ],
      timestamp: new Date(),
      footer: {
        icon_url: Bot.user.avatarURL,
        text: "© Kitty-Cat"
      }
    }
  });
  }

  Bot.login(token);