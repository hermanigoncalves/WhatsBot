const wppconnect = require('@wppconnect-team/wppconnect');

stamp = new Date();
hours = stamp.getHours();
if (hours >= 18 && hours < 24) {
    time = "boa noite"
} else if (hours >= 12 && hours < 18) {
    time = "boa tarde"
} else if (hours >= 0 && hours < 12) {
    time = "bom dia"
};
stamp = new Date();
hours = stamp.getHours();
if (hours >= 18 && hours < 24) {
    time2 = "a sua noite"
} else if (hours >= 12 && hours < 18) {
    time2 = "a sua tarde"
} else if (hours >= 0 && hours < 12) {
    time2 = "o seu dia"
};



wppconnect.create({
    session: 'bot',
    autoClose: false,
    puppeteerOptions: { args: ['--no-sandbox'] }
})
.then((client) =>
client.onMessage(async (message) => {
    if(message.isGroupMsg == false){
    await client.sendSeen(message.from);
    await client.startTyping(message.from, 1200);
    client.sendFile(message.from, `Eu a 🌑Lua🌑, sua assistente virtual, como posso deixar ${time2} melhor?🙋‍♂️`, {
        useTemplateButtons: true, // False for legacy
        buttons: [
          {
            id: 'Falar com atendente',
            text: '🤣😂Contar um piada😂🤣'
          },
          {
            id: '',
            text: '😊😋Contar um história infantil😋😊'
          },
          {
            id: '',
            text: '💤Musica de ninar💤'
          }
        ],
        title: `👋Ola ${message.notifyName}, ${time}!`, 
    });
    
    }
   })
);